chrome.storage.sync.get(['autoRun'], function(result) {
	if (result.autoRun)
		replaceYoutube()
})
