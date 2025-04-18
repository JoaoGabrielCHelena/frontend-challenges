swap("weekly", "Last Week")

function swap(option, phrase) {
    fetch('data.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    appendData(data, option, phrase);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                });
            }
            
function appendData(data, option, phrase) {
    data.forEach(element => {
        let hours = document.querySelector(`#${[element.title]} .hours`);
        let previous = document.querySelector(`#${[element.title]} .previous`);
        previous.innerHTML = `${phrase} - ${[element.timeframes[option].previous]}${plural([element.timeframes[option].previous])}`;
        hours.innerHTML = `${[element.timeframes[option].current]}${plural([element.timeframes[option].current])}`;
    })
}
            
function plural(time) {
    return (time > 1 || time == 0) ? "hrs" : "hr"  
}