import Browser from 'webextension-polyfill';

let isExtensionEnabled = false;

Browser.action.onClicked.addListener(async (tab) => {
  isExtensionEnabled = !isExtensionEnabled;

  if (tab.id) {
    Browser.tabs.sendMessage(tab.id, {
      action: "INIT",
      value: isExtensionEnabled,
    });
  }

  const iconPath = isExtensionEnabled ? "../icon-enabled.png" : "../icon-disabled.png";
  Browser.action.setIcon({ path: iconPath });
});
