var activityIndex = 0 

let activityList = 
[
	"Read a book.",
	"Hug your dog.",
	"Or just watch dog videos.",
	"Finally learn how to make coffee.",
	"Check in with your friends.",
	"Check in with yourself.",
	"Join group calls.",
	"Cry.",
	"Download TikTok.",
	"Jk.",
	"Unless?",
	"Watch a movie.",
	"Or just weird Youtube videos.",
	"Write a few haikus\\about the things you will do\\once you can go out.",
	"Yes, the word 'haiku' has two syllables.",
	"I googled it.",
	"Bake.",
	"Take naps.",
	"Breathe."

]

document.onclick= function(event) {
	if (activityIndex < activityList.length) {
		var activities = document.getElementById("activities")
		var activity = "\n" + activityList[activityIndex]
		activities.textContent += activity + " "
		activityIndex += 1
	}
};