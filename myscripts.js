console.log("HELLO")

var activityIndex = 0 

let activityList = 
[
	"Read a book.",
	"Hug your dog.",
	"Learn how to make actual coffee.",
	"Join group calls.",
	"Cry.",
	"Be kind.",
	"Be kind to yourself.",
	"Download TikTok.",
	"Jk.",
	"Unless?",
	"Watch a movie.",
	"Or just weird Youtube videos.",
	"Write a few haikus\\about the things you will do\\once you can go out.",
	"Don't write a Medium article.",
	"Bake.",
	"Take naps.",
	"Take a walk.",
	"Breathe."

]

document.onclick= function(event) {
	if (activityIndex < activityList.length) {
		var activities = document.getElementById("activities")
		var activity = "\n" + activityList[activityIndex]
		activities.textContent += activity + " "
		activityIndex += 1
		console.log(activities.textContent)
	}
};