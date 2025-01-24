import Browser from 'webextension-polyfill';

Browser.action.onClicked.addListener(async () => {
  console.log('onClicked')
});
