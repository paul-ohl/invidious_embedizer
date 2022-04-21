let invidiousInstance = 'vid.puffyan.us';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({
		invidiousInstance: invidiousInstance,
		autoRun: false,
	});
});

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['js/replaceYoutube.js', 'js/clickedButton.js']
	});
});
