var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d6ptvNCywqI:APA91bE6xeADYctserEHTKXhZ3shTAiNzS9groiQ_TZNApGdVlygIlg8gOoINAT26YA4LeOGiY_Wzn19BBK21c1AjCX1MAevi0YTRXWQnVWSRr7RM3Zj1rqR0nmiG0g1JUp-EL3PV5fv","expirationTime":null,"keys":{"p256dh":"BI36SHXloNjRce9qVjene3Yd2K5IxPLS1DmkQ358v8ayEqwJFnaphPNkIZY_PjD2UpahJHADlg0tFuE-ugdPd9U","auth":"wjsT6qwV987JOlTYrjN7Ig"}};


push.sendNotification(sub,'test')
	.catch((err) => {
        console.log(err); 
    })
    .then(function(success) {
    	if (success.statusCode === 201) {
    		console.log('sent push successfully.');
        	console.log(success.statusCode);
    	} else {
    		console.log(success);
    	}
        
    });

