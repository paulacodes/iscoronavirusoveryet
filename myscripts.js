console.log("HELLO")

var activityIndex = 0 

let activityList = 
[
	"Read a book.",
	"Hug your dog.",
	"Learn how to make actual coffee.",
	"Download TikTok.",
	"Jk.",
	"Have a group call with those friends from high school you haven't talked to in years.",
	"Cry.",
	"Be kind.",
	"Be kind to yourself.",
	"Watch a movie.",
	"Or just weird Youtube videos.",
	"Write some haikus\\about the things you will do\\once you can go out.",
	"Don't write a Medium article.",
	"Bake"

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