/*!
 * CSIS Korea Chair figure embed loader.
 * Mirrors the Datawrapper embed pattern: a <div data-target> placeholder plus a
 * deferred <script> that injects a responsive iframe and auto-sizes it from the
 * figure's postMessage height. A <noscript> PNG inside the div is the no-JS fallback.
 *
 * Usage (one block per figure):
 *   <div style="min-height:590px" id="csis-vis-fig1">
 *     <script type="text/javascript" defer
 *             src="https://andysaulim.github.io/sk-market-figures/embed.js"
 *             charset="utf-8"
 *             data-target="#csis-vis-fig1"
 *             data-src="embed_fig1.html"
 *             data-title="Figure 1: The KOSPI nearly tripled in a year"></script>
 *     <noscript><img src="https://andysaulim.github.io/sk-market-figures/img/fig1_kospi.png"
 *             alt="Figure 1: The KOSPI nearly tripled in a year" style="width:100%"></noscript>
 *   </div>
 */
(function () {
  var script = document.currentScript;
  if (!script) { return; }

  var sel = script.getAttribute('data-target');
  var target = sel && document.querySelector(sel);
  if (!target) { return; }

  var figSrc = script.getAttribute('data-src');
  if (!figSrc) { return; }

  // Resolve the figure URL relative to this script's own location.
  var base = script.src.replace(/[^/]*$/, '');
  var title = script.getAttribute('data-title') || 'CSIS Korea Chair figure';
  var initialHeight = target.style.minHeight || '600px';

  // Remove the <noscript> fallback so it never double-renders, then inject the iframe.
  var fallback = target.querySelector('noscript');
  if (fallback) { fallback.parentNode.removeChild(fallback); }

  var iframe = document.createElement('iframe');
  iframe.src = base + figSrc;
  iframe.title = title;
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('loading', 'lazy');
  iframe.style.width = '100%';
  iframe.style.border = '0';
  iframe.style.height = initialHeight;
  target.appendChild(iframe);

  // One shared listener resizes every CSIS figure iframe on the page.
  if (!window.__csisEmbedListenerAttached) {
    window.__csisEmbedListenerAttached = true;
    window.addEventListener('message', function (e) {
      if (e && e.data && e.data.csisEmbed && e.data.id) {
        var f = document.querySelector('iframe[src*="' + e.data.id + '"]');
        if (f && e.data.height) { f.style.height = e.data.height + 'px'; }
      }
    });
  }
})();
