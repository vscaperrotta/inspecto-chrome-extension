
(function () {
  let tooltipEl = null;
  let highlightedEl = null;

  let enabled = false;

  function createTooltip() {
    if (tooltipEl) return;
    tooltipEl = document.createElement("div");
    tooltipEl.id = "css-scanner-tooltip";
    tooltipEl.style.position = "fixed";
    tooltipEl.style.zIndex = "999999";
    tooltipEl.style.padding = "8px";
    tooltipEl.style.borderRadius = "6px";
    tooltipEl.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    tooltipEl.style.color = "#fff";
    tooltipEl.style.fontSize = "12px";
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.display = "none";
    document.body.appendChild(tooltipEl);
  }

  function showTooltip(el, x, y) {
    if (!tooltipEl) return;
    tooltipEl.style.left = x + 10 + "px";
    tooltipEl.style.top = y + 10 + "px";
    tooltipEl.style.display = "block";

    const styles = window.getComputedStyle(el);
    const color = styles.getPropertyValue("color");
    const bg = styles.getPropertyValue("background-color");
    const fontSize = styles.getPropertyValue("font-size");
    const margin = styles.getPropertyValue("margin");
    const padding = styles.getPropertyValue("padding");

    tooltipEl.innerHTML = `
      <strong>Tag:</strong> ${el.tagName.toLowerCase()} <br/>
      <strong>Color:</strong> ${color} <br/>
      <strong>Background:</strong> ${bg} <br/>
      <strong>Font-Size:</strong> ${fontSize} <br/>
      <strong>Margin:</strong> ${margin} <br/>
      <strong>Padding:</strong> ${padding}
    `;
  }

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.style.display = "none";
    }
  }

  function highlightElement(el) {
    if (highlightedEl) {
      removeHighlight(highlightedEl);
    }
    el.style.outline = "2px solid red";
    highlightedEl = el;
  }


  function removeHighlight(el) {
    el.style.outline = "";
  }


  function onMouseOver(e) {
    if (!enabled) return;
    const target = e.target;
    if (!target) return;
    highlightElement(target);
  }


  function onMouseMove(e) {
    if (!enabled) return;
    if (highlightedEl) {
      showTooltip(highlightedEl, e.clientX, e.clientY);
    }
  }


  function onMouseOut() {
    if (!enabled) return;
    if (highlightedEl) {
      removeHighlight(highlightedEl);
      highlightedEl = null;
    }
    hideTooltip();
  }

  createTooltip();

  document.addEventListener("mouseover", onMouseOver);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseout", onMouseOut);


  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "TOGGLE") {
      enabled = request.value;

      if (!enabled) {

        if (highlightedEl) {
          removeHighlight(highlightedEl);
          highlightedEl = null;
        }
        hideTooltip();
      }

      sendResponse({ status: "ok" });
    }
  });
})();
