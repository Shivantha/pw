let isSubscribed = false;
let swRegistration = null;
let applicationKey = "BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE";


// Url Encription
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Installing service worker
if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');
        alert('okkkk');

        navigator.serviceWorker.register('./sw.js')
        .then(function (swReg) {
            
            swRegistration = swReg;

            swRegistration.pushManager.getSubscription()
                .then(function (subscription) {
                    isSubscribed = !(subscription === null);

                    console.log(isSubscribed);

                    if (isSubscribed) {
                        console.log('User already allowed for notification');
                        //registerServiceWorker();
                    } else {
                        getAthenticationDetails();  
                        console.log('still not allowed');
                           
                    }
                })
        })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });


} else {
    alert('not working');
    console.warn('Service Worker and Push are not supported');
}


function getAthenticationDetails() {
    navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array('BDNL8-x4orwEk6E1W11_Kggw7onYkfnGe-dIlUA49LKa8oYkKEo_GYEBKye6-APUjPu3-yVQ8hcttZ1FDHjMDCE')
            };

    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
        console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
        return pushSubscription;
  });

}