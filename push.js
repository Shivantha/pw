var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eYL6TffEJpI:APA91bGpBqWJitjtgTxVS_kPXr_xqJuWD5KPIlLMeYwWYMpDeZI1dSCN24d005Pju3GtZvm2pH2UV1rVWt6lH_6jhWAmGk2zasLb22qrTzVhDSZRWE58tWBNxymuwcRwvoa9bHqK-aEM","expirationTime":null,"keys":{"p256dh":"BKz2ItcZNDm0UAW-5VKqwarEyfCjkHLGxCdHdmQHrHxQKvicPiAFxMNXn1T2S0Zq8vKX-cdYNOqnU6nFNOXDMLA","auth":"734nO6_aESr-k5TdZHAb4g"}};

let pushData = push.sendNotification(sub, 'test message');

console.log(pushData);