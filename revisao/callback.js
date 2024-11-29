function anotherAddEventListener(typeOfEvent, callback) {
    let eventHappened = {
        eventType: 'keypress',
        key: 'a',
        durationOfKey: 2
    }
    if(eventHappened.eventType === typeOfEvent) {
        console.log(eventHappened)    
    }
}