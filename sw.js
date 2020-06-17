self.addEventListener('push', function(e) {
	var option = {
		body: 'Hi Eveyone, Welcome to Piksyn',
		icon: 'images/piksyn.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		click_action : "https://www.google.com"
		// actions: [
		// 	{action: 'explore', title: 'Explore this world'},
		// 	{action: 'close', title: 'Close'}
		// ]
	};
	e.waitUntil(
		self.registration.showNotification("Hello Piksyn",option)
	)
});