self.addEventListener('push', function(e) {
	var option = {
		body: "Simple, fluid and automated, with no learning curve. In brief, nothing to be compared to the current Content Management systems or 'Do-it-Yourself’ alike! All you need is your contents and Piksyn transforms it into a site within a click (well... almost).",
		icon: 'images/piksyn.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		actions: [
		    {
		      action: 'coffee-action',
		      title: 'Coffee',
		      icon: '/images/action1.png'
		    },
		    {
		      action: 'doughnut-action',
		      title: 'Doughnut',
		      icon: '/images/action2.png'
		    }
  		]
	};
	e.waitUntil(
		self.registration.showNotification("Hello Piksyn Userss",option)
	)
});