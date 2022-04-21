let invidiousInstanceInput = document.getElementById("invidious-instance");
let autoRunInput = document.getElementById("autoRun");

chrome.storage.sync.get(['invidiousInstance', 'autoRun'], function(result) {
	invidiousInstanceInput.value = result.invidiousInstance;
	autoRunInput.checked = result.autoRun;
});

document.getElementById("saveSettingsButton").addEventListener("click", () => {
	let invidiousInstance = invidiousInstanceInput.value;
	let autoRun = autoRunInput.checked;
	chrome.storage.sync.set({
		invidiousInstance,
		autoRun,
	});
});
