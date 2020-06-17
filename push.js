var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dka74dlBD2o:APA91bHztK_bEnvDVwf1iS_Yu0L2maX7zxv0nEMpWRZyoZ5vCsZE5og41DC3QnuC-iZCkMlOHa0RU2Y6quY7CkcR2R8taTJ05UDArNNnoihErd2uK4PQTEExUz_03oO7-Jh_zZTGhbpf","expirationTime":null,"keys":{"p256dh":"BCNSOwFDpygTq4Ak4zUiNdZ3y3rbrS6MiZI8zUxyVMHC7vg24_p03vxuZAjYc-AiRgeYohoeAPwE1jjUtJEWpjY","auth":"LumauSIuI8RnU9OjzU2Bfg"}}; 

let pushData = push.sendNotification(sub, 'test message');

console.log(pushData);