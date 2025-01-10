/**
 * Evidenzia l’elemento con un bordo rosso.
 * Restituisce l’elemento precedentemente evidenziato (se presente).
 */
export function highlightElement(el, previouslyHighlighted) {
  if (previouslyHighlighted) {
    removeHighlight(previouslyHighlighted);
  }
  el.style.outline = "2px solid red";
  return el;
}

/**
 * Rimuove il bordo rosso da un elemento.
 */
export function removeHighlight(el) {
  el.style.outline = "";
}
