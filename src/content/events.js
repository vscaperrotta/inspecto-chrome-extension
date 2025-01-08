// events.js
import { highlightElement, removeHighlight } from "./highlight.js";
import { showTooltip, hideTooltip } from "./tooltip.js";

/**
 * Registra i listener del mouse sul documento, usando la logica passata.
 * Ritorna una funzione "cleanup" per rimuoverli.
 */
export function setupMouseEvents({ getEnabled, getHighlightedEl, setHighlightedEl }) {
  function onMouseOver(e) {
    if (!getEnabled()) return;
    const target = e.target;
    if (!target) return;
    const oldEl = getHighlightedEl();
    const newEl = highlightElement(target, oldEl);
    setHighlightedEl(newEl);
  }

  function onMouseMove(e) {
    if (!getEnabled()) return;
    const highlightedEl = getHighlightedEl();
    if (highlightedEl) {
      showTooltip(highlightedEl, e.clientX, e.clientY);
    }
  }

  function onMouseOut() {
    if (!getEnabled()) return;
    const highlightedEl = getHighlightedEl();
    if (highlightedEl) {
      removeHighlight(highlightedEl);
      setHighlightedEl(null);
    }
    hideTooltip();
  }

  document.addEventListener("mouseover", onMouseOver);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseout", onMouseOut);

  // Ritorniamo una funzione di cleanup, utile se avessi bisogno di rimuovere questi listener
  return () => {
    document.removeEventListener("mouseover", onMouseOver);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseout", onMouseOut);
  };
}
