var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABe6epWRS_aSyV62secLcxB-29OB44M1yikH_opWEpKp84Mlxncy3q4XqdRLm5ffLeZU0Y_Acv_6gw4ML0_Owy-EXh6GFn34bg6p_yLQQ6XlfIr_jlXROsjQxf3S2TsbCnBuM0hxn-YpAlrdk94SWdZwGP8icLvICAZqx1RN8ubFXkJ-Po","keys":{"auth":"LVNnPRZr2kNUBM8S2FWMYA","p256dh":"BCyxuKlbD9ENm1Mt1l6QrIYK_Yy4lkhF060x3mFRxSmBbG2b-gKv0b4Vs1qGU3BV_GH8STPOS9fa3J4VxGorPK4"}};




push.sendNotification(sub);
