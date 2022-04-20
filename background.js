let invidiousInstance = 'vid.puffyan.us/';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ invidiousInstance });
	console.log('Default Invidious instance set to %cgreen', `invidiousInstance: ${invidiousInstance}`);
});
