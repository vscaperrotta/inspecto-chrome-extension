import { createTooltip, hideTooltip } from "./tooltip.js";
import { removeHighlight } from "./highlight.js";
import { setupMouseEvents } from "./events.js";

/**
 * Variabili "globali" del nostro content script.
 */
let enabled = false;
let highlightedEl = null;

// Al caricamento, creiamo il tooltip:
createTooltip();

/**
 * Funzioni accessor per "enabled".
 */
function getEnabled() {
  return enabled;
}
function setEnabled(value) {
  enabled = value;
}

/**
 * Funzioni accessor per "highlightedEl".
 */
function getHighlightedEl() {
  return highlightedEl;
}
function setHighlightedEl(el) {
  highlightedEl = el;
}

/**
 * Avviamo il setup degli event listener del mouse.
 * Restituisce una funzione di cleanup (se servisse).
 */
setupMouseEvents({
  getEnabled,
  getHighlightedEl,
  setHighlightedEl
});

// Ascolto dei messaggi per toggle
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "TOGGLE_EXTENSION") {
    setEnabled(request.value);

    if (!request.value) {
      // Se disabilitiamo, rimuoviamo highlight e tooltip
      if (highlightedEl) {
        removeHighlight(highlightedEl);
        setHighlightedEl(null);
      }
      hideTooltip();
    }

    sendResponse({ status: "ok" });
  }
});
