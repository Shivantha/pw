var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABe6XmckJH2GMh3XtWwZZuymjTaCe-5IKf5qug9dDGYPda-kG17L83vwHhpC1EhX5-J6aZMHBUVRrxjU9u-8YL6-bZdst2gah5OQeCVSuasJlcMqdjz_JAv3N6nVlhF5gR1fs3UCnUU29FrcNi3DptHp4cOQoVkDUbytKtXRbite4qvopo","keys":{"auth":"7SpGPq10XE2IMZv7_8SLpA","p256dh":"BKkMG1dc9sOwaBPfTcomctKjRUg4TEJGFtL2AOe7CjZ3SZ_BWAAv8ME26Jo8WVA1NRURL47jFXvGEVcWpEeBSKw"}};

push.sendNotification(sub, 'test message');