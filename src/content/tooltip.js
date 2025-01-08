
let tooltipEl = null;

/**
 * Crea il tooltip e lo appende al body,
 * se non esiste già.
 */
export function createTooltip() {
  if (tooltipEl) return tooltipEl;

  tooltipEl = document.createElement("div");
  tooltipEl.id = "css-scanner-tooltip";
  tooltipEl.style.position = "fixed";
  tooltipEl.style.zIndex = "999999";
  tooltipEl.style.padding = "12px";
  tooltipEl.style.borderRadius = "12px";
  tooltipEl.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  tooltipEl.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.3)";
  tooltipEl.style.color = "#fff";
  tooltipEl.style.fontFamily = "Sans-Serif";
  tooltipEl.style.fontSize = "12px";
  tooltipEl.style.pointerEvents = "none";
  tooltipEl.style.display = "none";
  tooltipEl.style.maxWidth = "280px";
  tooltipEl.style.width = "100%";
  document.body.appendChild(tooltipEl);

  return tooltipEl;
}

/**
 * Mostra il tooltip con le info dell'elemento (el) in posizione (x, y).
 */
export function showTooltip(el, x, y) {
  if (!tooltipEl) return;

  tooltipEl.style.left = x + 10 + "px";
  tooltipEl.style.top = y + 10 + "px";
  tooltipEl.style.display = "block";

  const styles = window.getComputedStyle(el);

  const color = styles.getPropertyValue("color");
  const bg = styles.getPropertyValue("background-color");
  const fontSize = styles.getPropertyValue("font-size");
  const fontFamily = styles.getPropertyValue("font-family");
  const margin = styles.getPropertyValue("margin");
  const padding = styles.getPropertyValue("padding");
  const height = styles.getPropertyValue("height").replace('px', '');
  const width = styles.getPropertyValue("width").replace('px', '');

  tooltipEl.innerHTML = `
    <div style="display: flex;">
      <span style="
        color: rgb(21, 213, 224);
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1px;
      ">${el.tagName.toLowerCase()}</span>
    </div>
    <br/>
    <div style="display: flex; gap: 4px;">
      <span style="
        color: rgba(255,255,255, .8);
        letter-spacing: 1px;
      ">
      <strong>${width}</strong>x<strong>${height}</strong>
      </span>
    </div>
    <br/>
    <div style="display: flex; gap: 4px;">
      <span style="
        color: rgba(255,255,255, .8);
        letter-spacing: 1px;
      ">
      Aa ${fontFamily}
      </span>
    </div>
    <br/><br/>
    <div style="display: flex;">
      <span style="
        color: rgb(198, 84, 115);
        font-weight: bold;
        letter-spacing: 1px;
      ">Color: </span>
      <span style="
        color: #fff;
        letter-spacing: 1px;
      ">${color}</span>
    </div>
    <br/>
    <div style="display: flex;">
      <span style="
        color: rgb(198, 84, 115);
        font-weight: bold;
        letter-spacing: 1px;
      ">Background: </span>
      <span style="
        color: #fff;
        letter-spacing: 1px;
      ">${bg}</span>
    </div>
    <br/>
    <div style="display: flex;">
      <span style="
        color: rgb(198, 84, 115);
        font-weight: bold;
        letter-spacing: 1px;
      ">Font-Size: </span
       <span style="
        color: #fff;
        letter-spacing: 1px;
       ">${fontSize}</span>
    </div>
    <br/>
    <div style="display: flex;">
      <span style="
        color: rgb(198, 84, 115);
        font-weight: bold;
        letter-spacing: 1px;
      ">Margin: </span>
      <span style="
        color: #fff;
        letter-spacing: 1px;
      ">${margin}</span>
    </div>
    <br/>
    <div style="display: flex;">
      <span style="
        color: rgb(198, 84, 115);
        font-weight: bold;
        letter-spacing: 1px;
      ">Padding: </span>
      <span style="
        color: #fff;
        letter-spacing: 1px;
      ">${padding}</span>
    </div>
  `;
}

/**
 * Nasconde il tooltip.
 */
export function hideTooltip() {
  if (tooltipEl) {
    tooltipEl.style.display = "none";
  }
}
