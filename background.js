let default_intervalminutes = 60;

chrome.runtime.onMessage.addListener(
function (request, sender, sendResponse) {
        console.log(request);
        default_intervalminutes = request.minutes * 1.0;
        create_alarm();
        sendResponse({ success: true });
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
    console.log(alarm);
    if (alarm.name === "remind-alarm") {
    chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: 'star.jpg',
            title: 'Water Reminder',
            message: 'Go Drink water',
            priority: 2
            }, function(notificationId) {
            console.log(notificationId);
            });
        }
    });
    
var alarmName = 'remind-alarm';
function create_alarm(){
        chrome.alarms.create(alarmName, {delayInMinutes: 1, periodInMinutes: default_intervalminutes});
        console.log(default_intervalminutes);
}

