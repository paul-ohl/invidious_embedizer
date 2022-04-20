let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
	changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: replaceYoutubeEmbedsWithInvidious,
	});
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: replaceYoutubeLinksWithInvidious,
	});
});

// The body of this function will be executed as a content script inside the
// current page
function replaceYoutubeEmbedsWithInvidious() {
	const framesInPage = document.getElementsByTagName("iframe");
	for (let index = 0; index < framesInPage.length; index++) {
		const frame = framesInPage[index];
		if (frame.src.startsWith("https://www.youtube.com/")) {
			console.log("HERE");
			frame.src = frame.src.replace("https://www.youtube.com/", "https://vid.puffyan.us/")
		}
	}
}

function replaceYoutubeLinksWithInvidious() {
	for (let i = 0; i < document.links.length; i++) {
		const link = document.links[i];
		if (link.hostname == "www.youtube.com") {
			link.hostname = "vid.puffyan.us";
		}
	}
}
