var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fVpmfWazpeI:APA91bH_i6UkRMzj1zbkxfJNo_aUdbaU9uToB4U2KSm2099KfBZu_RyEZN08qDCePND31FD1Q-B0RfmYmO5vUozzl69VPdOFW1CgmxsPyGMFCdjMAQ02gIJn0sqNNOA3sIfbbyxXCdT0",
"expirationTime":null,
"keys":{"p256dh":"BIzclzU7gMIR3SoXjlnAclklOxJTQErnjD2w064b5PTJn26dx3dGX-KptaKxdCSohigKfXQimsEdXqEwct-RvAA",
"auth":"_yHQ_FyNKc2-w4UDlliF9A"}}


push.sendNotification(sub, 'test message');