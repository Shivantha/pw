var push = require('web-push');

let vapIdKeys =  { 
	publicKey: 'BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE',
  	privateKey: 'G0qSljtJyhJSYn8y7UMlk0VDpUz3jr-M7JFju5UIO70' }


push.setVapidDetails('mailto:lakmal@applimundo.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABe6ajF9du4_PK_WQUPSR8jG8de70k1Vp86SJHL7aAy4Le-mG6W-bh6NUozQy6FqYy0pb5eaFxkaAj4wCxZv9e67kml_VRiJ33u4pRySZaMGW7ys2dVsiqbY0Q92TIy9-YHt8snzI8-fiLEpInWLveP5EAKaUazHp4LJ2YtnBNEDf-w5mY","keys":{"auth":"cT67YTk3WOwcClvEIE7s7g","p256dh":"BO6JUaT3KlwfM1_fQFinRcCpLLO4ShiZD6TPsGLrgVLHIBeU9WmLZqR7gGNzJJHfohZdLo9-J1edLppd3VUmiRY"}};


push.sendNotification(sub, 'test message');