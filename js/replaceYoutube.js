function replaceYoutube() {
	chrome.storage.sync.get(['invidiousInstance'], function(result) {
		const youtubeRegex = /(www\.)?youtu(\.be|be\.com)/;
		const invidiousDomain = result.invidiousInstance;

		const framesInPage = document.getElementsByTagName("iframe");
		for (let index = 0; index < framesInPage.length; index++) {
			const frame = framesInPage[index];
			let youtubeDomain = frame.src.match(youtubeRegex);
			console.log(youtubeDomain);
			if (youtubeDomain !== null) {
				frame.src = frame.src.replace(youtubeDomain[0], result.invidiousInstance)
			}
		}

		for (let i = 0; i < document.links.length; i++) {
			const link = document.links[i];
			let youtubeDomain = link.hostname.match(youtubeRegex);
			if (youtubeDomain !== null) {
				link.hostname = invidiousDomain;
				link.innerHTML = link.innerHTML.replace(youtubeDomain[0], result.invidiousInstance)
			}
		}
	});
}
