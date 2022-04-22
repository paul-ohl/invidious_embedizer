let invidiousInstanceInput = document.getElementById("invidious-instance");
let autoRunInput = document.getElementById("autoRun");
let saveSettingsButton = document.getElementById("saveSettingsButton");

chrome.storage.sync.get(['invidiousInstance', 'autoRun'], function(result) {
	invidiousInstanceInput.value = result.invidiousInstance;
	autoRunInput.checked = result.autoRun;
});

saveSettingsButton.addEventListener("click", () => {
	saveSettingsButton.disabled = true;
	saveSettingsButton.innerHTML = "...";

	let invidiousInstance = invidiousInstanceInput.value;
	let autoRun = autoRunInput.checked;
	chrome.storage.sync.set({
		invidiousInstance,
		autoRun,
	}, () => {
		saveSettingsButton.innerHTML = "Saved!";
	});
});

function reactivateButton() {
	saveSettingsButton.innerHTML = "Save Settings";
	saveSettingsButton.disabled = false;
}

invidiousInstanceInput.addEventListener("input", reactivateButton);
autoRunInput.addEventListener("change", reactivateButton);
