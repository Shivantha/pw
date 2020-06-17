var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c4sjAxO9veA:APA91bEBncFWf_cshzdoVjTJ-noUGuahmwabROr3Nb7kxzGJhR2Id-V17OI969bqYoeWM2T-UvMoUfemY5fInVQUaPRTi_UOVR5lDqlLrrwFhqVI28IHiWxzgRh8CqSmQvZuitAJ2VY3","expirationTime":null,"keys":{"p256dh":"BHC7D8hJWi2IWNjjPfYTsLZWo6I6KLjhuQq9LrckBqScJRTEm-WyBeiInxtVsLdf0pA9jIXb9c7U-VcALfENJDQ","auth":"PBIBHJUKxowx13xtzP-GSw"}};


push.sendNotification(sub, 'test message');