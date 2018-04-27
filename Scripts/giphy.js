$(document).ready(function() {

	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		key: "9yj6LLSAX3Fx1nyvAlbpmTgMbD21he7t",
		tag: "fail",
		type: "random",
		rating: "pg-13"
	};
	const $gif_wrap = $("#gif-wrap");
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.key +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	var renderGif = _giphy => {
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});
	};

	// Call Giphy API for new gif
	newGif();
});
