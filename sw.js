self.addEventListener('push', function(e) {
	var option = {
		body: 'Hi Eveyone, Welcome to Piksyn',
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