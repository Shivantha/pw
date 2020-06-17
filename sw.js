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
		      	action: 'Home',
		      	title: 'Piksyn Home',
		      	icon: '/images/action1.png'
		    },
		    {
		      	action: 'Login',
		      	title: 'Piksyn Login',
		      	icon: '/images/action2.png'
		    }
  		]
	};
	e.waitUntil(
		self.registration.showNotification("Hello Piksyn Users",option)
	)
});


self.addEventListener('notificationclick', function(event) {
	let clickAction = event.action;
	var url = '';
	
	if (clickAction == 'Home') {
		console.log('home');
		url = 'https://piksyn.com/';
	} else if (clickAction == 'Login') {
		console.log('login')
		url = 'https://piksyn.com/login';
	}

	if (clickAction == 'Home' || clickAction == 'Login') {
		event.notification.close();

	  	event.waitUntil(
		    clients.matchAll({
		        type: 'window'
		    })
		    .then(function(windowClients) {
		        if (clients.openWindow) {
		            return clients.openWindow(url);
		        }
		    })
		);
	}
});