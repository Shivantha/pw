var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fSrk425h9X4:APA91bHSIhLURnN8aKiN2YeEEju2A4UYrv8VoSqtzZ7Meo9MbQZ7cyxMiigrpRGfIUpOvPAO7d7ugtgSKp6CVQviXSi5ayFY0kZRuhG15baB7372fh3y-I2W3qDkUOsCJA99ZnWYldjk"};

push.sendNotification(sub, 'test message');