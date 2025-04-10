fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

function appendData(data) {
    let mainContainer = document.getElementById("bar-container");
    let biggest = 0;
    let biggestAmount = 0;
    data.forEach(element => {
        // check is this amount is bigger than the previous biggest amount
        if (biggestAmount < element.amount) {
            biggest = data.indexOf(element);
            biggestAmount = element.amount;
        }

        // creates the wrapper for each day
        let dayWrapper = document.createElement("div");
        dayWrapper.setAttribute("id", element.day);
        dayWrapper.classList.add("dayWrapper");
        
        // names the day
        let day = document.createElement("div");
        day.innerHTML = element.day;
        
        // creates the bar and sets the height of it
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.setProperty("height", `${element.amount}%`);
        
        // creates the tooltip that appears with hover
        let tooltip = document.createElement("div");
        tooltip.classList.add("tooltiptext");
        tooltip.innerHTML = `$${element.amount}`;

        // does all the necessary appends
        bar.appendChild(tooltip)
        dayWrapper.appendChild(bar);
        dayWrapper.appendChild(day);
        mainContainer.appendChild(dayWrapper);
        
    });
    // gives extra styling to the day with the biggest amount
    document.getElementById(data[biggest].day).classList.add("highest-day");
}