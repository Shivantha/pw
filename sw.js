self.addEventListener('push', function(e) {
	var option = {
		body: 'Hi Eveyone, Welcome to Piksyn',
		icon: 'images/piksyn.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		// actions: [
		// 	{action: 'explore', title: 'Explore this world'},
		// 	{action: 'close', title: 'Close'}
		// ]
		actions: [{action: "https://www.google.com", title: "Read Now"}]
	};
	e.waitUntil(
		self.registration.showNotification("Hello Piksyn",option)
	)
});