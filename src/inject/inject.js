function parseHomeContent() {
	var posts = document.querySelectorAll('div[id^="hyperfeed_story_id_"]');
	for (var index = 0; index < posts.length; index++) {
		var element = posts[index];
		if (element.innerHTML.includes("https://www.facebook.com/MatthewRohnPremium")) {
			if (element.innerHTML.includes("https%3A%2F%2Fdocs.google.com%2Fa%2Ffandm.edu%2F")) {
				element.innerHTML = "<p>Fight Rohn's 'Premium' Content. Bring Rohn back for the people!</p>";
			}
		}
	}

	var profPosts = document.querySelectorAll('div[id^="tl_unit_"]');
	for (var index = 0; index < profPosts.length; index++) {
		var element = profPosts[index];
		if (element.innerHTML.includes("https://www.facebook.com/MatthewRohnPremium")) {
			if (element.innerHTML.includes("https%3A%2F%2Fdocs.google.com%2Fa%2Ffandm.edu%2F")) {
				element.innerHTML = "<p>Fight Rohn's 'Premium' Content. Bring Rohn back for the people!</p>";
			}
		}
	}
}

setInterval(function(){ parseHomeContent() }, 500);