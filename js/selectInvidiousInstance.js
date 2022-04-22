function setInvidiousInstance( htmlInput ) {
	let apiRequest = "https://api.invidious.io/instances.json?pretty=1&sort_by=type,users";

	fetch( apiRequest )
		.then( response => response.json() )
		.then( response => {
			htmlInput.value = response[0][0];
		} );
}
