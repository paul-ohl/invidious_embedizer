function getInvidiousInstance() {
	let apiRequest = "https://api.invidious.io/instances.json?pretty=1&sort_by=type,users";

	return new Promise((resolve, reject) => {
		fetch( apiRequest )
			.then( response => response.json() )
			.then( response => { resolve(response[0][0]); } )
			.catch( err => { reject(err) } );
	});
}

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.get([ 'invidiousInstance', 'autoRun' ], (result) => {
		if (result.invidiousInstance === undefined)
		{
			const instancePromise = getInvidiousInstance();

			instancePromise.then(result => {
				chrome.storage.sync.set({
					invidiousInstance: result,
					autoRun: false,
				});
			}).catch( err => { console.log(err); } );
		}
	});
});

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['js/replaceYoutube.js', 'js/clickedButton.js']
	});
});
