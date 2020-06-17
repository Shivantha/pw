var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dJubM3xfLa8:APA91bEMPJcratqwHDvfxQB1PwogBEtAY9RTueoq88f_b2Lme-2Kgvfz4rVz_KpXTOyU-ixbNst_W3q1W-E2Rl5aUMLbLPMjm9_3OrmFMPKNwBdDWR0CgN-QBIo1U26jysUPE_b8ryci",
  "expirationTime": null,
  "keys": {
    "p256dh": "BFkT0JbmHYuYarIm8f67TjmIri3ekopkPFXHgsew6zxc9OrXehZx7yx9Xto4d08I1fKrFnuNQTQtsIh42RSbakw",
    "auth": "GqZPuaJc6Qzk-h5JB8BVJA"
  }
}


push.sendNotification(sub,'test')
	.catch((err) => {
        console.log(err); 
    })
    .then(function(success) {
    	if (success.statusCode === 201) {
    		console.log('sent push successfully.');
        	console.log(success.statusCode);
    	}
        
    });

