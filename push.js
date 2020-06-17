var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = 	{"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABe6XFVKZA9egJvxOde_VxIjSI1L18YavQnah-hqdo9ZqqLKadkzMShROtO8m-mmCrG4knwdxsYjvy__6ByV45mK1NVi2oN6ABvo3I7QWgqXeM554Cx_jiHrcL-3NzK_1N7UjbjToMAV4pEBpamntHNbR68H2nnADXjActluMPxa6qiwZY",
		   		"keys":{
		   			"auth":"39ptTq-nfGhkleCAgDndsw",
		   			"p256dh":"BB_2t4Jn6wQqz25u0gHWdsjyYt0wlJtP3UbvZsE0VfOpzJV7mwHxrV41gclAbJeQCZOOjTt5YpSF5TXaoX-yTLE"
		   		}
		   	};

push.sendNotification(sub, 'test message');