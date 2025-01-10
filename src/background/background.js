import Browser from 'webextension-polyfill';

let isExtensionEnabled = false; // Stato globale dell'estensione

Browser.action.onClicked.addListener(async (tab) => {
  // Cambia lo stato dell'estensione
  isExtensionEnabled = !isExtensionEnabled;

  // Invia un messaggio alla scheda attiva
  if (tab.id) {
    Browser.tabs.sendMessage(tab.id, {
      type: "TOGGLE_EXTENSION",
      value: isExtensionEnabled,
    });
  }

  // Cambia l'icona in base allo stato
  const iconPath = isExtensionEnabled ? "icon-enabled.png" : "icon-disabled.png";
  Browser.action.setIcon({ path: iconPath });
});
