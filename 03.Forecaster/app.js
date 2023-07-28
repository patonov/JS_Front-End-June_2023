function attachEvents() {
    document.querySelector("#submit").addEventListener("click", getWeatherDataForLocation)
}

    weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }

    async function getWeatherDataForLocation(){
        const locationName = document.querySelector("#location").value;

        let responseForLocation = await (
            await fetch("http://localhost:3030/jsonstore/forecaster/locations")
            ).json();
                
        let location = responseForLocation.find((loc) => loc.name === locationName);
        
        let currentConditionResponse = await (
            await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
        ).json();
        
        let threeDayForecastResponse = await (
            await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
            ).json();
    
        
        const forecastContainer = document.querySelector("#forecast");
        forecastContainer.style.display = "block";

        const currentWeatherContainer = document.createElement("div");
        currentWeatherContainer.classList.add("forecasts");

        const weatherSymbol = document.createElement("span");
        weatherSymbol.classList.add("condition", "symbol");
        weatherSymbol.textContent = weatherSymbols[currentConditionResponse.forecast.condition];
        
        const dataHolder = document.createElement("span");
        dataHolder.classList.add("condition");
        
        const name = document.createElement("span");
        name.classList.add("forecast-data");
        name.textContent = currentConditionResponse.name;
        dataHolder.appendChild(name);

        const temp = document.createElement("span");
        temp.classList.add("forecast-data");
        temp.textContent = `${currentConditionResponse.forecast.low}°/${currentConditionResponse.forecast.high}°`;
        dataHolder.appendChild(temp);

        const condition = document.createElement("span");
        condition.classList.add("forecast-data");
        condition.textContent = currentConditionResponse.forecast.condition;
        dataHolder.appendChild(condition);

        currentWeatherContainer.appendChild(weatherSymbol)
        currentWeatherContainer.appendChild(dataHolder);

        document.querySelector("#current").appendChild(currentWeatherContainer);
        
        
        const threeDayContainer = document.createElement("div");
        threeDayContainer.classList.add("forecast-info"); 

        const firstDayHolder = document.createElement("span");
        firstDayHolder.classList.add("upcoming");
        
        const symbol = document.createElement("span");
        symbol.classList.add("symbol");
        symbol.textContent = weatherSymbols[threeDayForecastResponse.forecast[0].condition];
        firstDayHolder.appendChild(symbol);

        const firstDayTemp = document.createElement("span");
        firstDayTemp.classList.add("forecast-data");
        firstDayTemp.textContent = `${threeDayForecastResponse.forecast[0].low}°/${threeDayForecastResponse.forecast[0].high}°`;
        firstDayHolder.appendChild(firstDayTemp);

        const firstDayCondition = document.createElement("span");
        firstDayCondition.classList.add("forecast-data");
        firstDayCondition.textContent = threeDayForecastResponse.forecast[0].condition;
        firstDayHolder.appendChild(firstDayCondition);

        
        const secondDayHolder = document.createElement("span");
        secondDayHolder.classList.add("upcoming");
        
        const symbol2 = document.createElement("span");
        symbol2.classList.add("symbol");
        symbol2.textContent = weatherSymbols[threeDayForecastResponse.forecast[1].condition];
        secondDayHolder.appendChild(symbol2);

        const secondtDayTemp = document.createElement("span");
        secondtDayTemp.classList.add("forecast-data");
        secondtDayTemp.textContent = `${threeDayForecastResponse.forecast[1].low}°/${threeDayForecastResponse.forecast[1].high}°`;
        secondDayHolder.appendChild(secondtDayTemp);

        const secondDayCondition = document.createElement("span");
        secondDayCondition.classList.add("forecast-data");
        secondDayCondition.textContent = threeDayForecastResponse.forecast[1].condition;
        secondDayHolder.appendChild(secondDayCondition);
        

        const thirdDayHolder = document.createElement("span");
        thirdDayHolder.classList.add("upcoming");
        
        const symbol3 = document.createElement("span");
        symbol3.classList.add("symbol");
        symbol3.textContent = weatherSymbols[threeDayForecastResponse.forecast[2].condition];
        thirdDayHolder.appendChild(symbol3);

        const thirdDayTemp = document.createElement("span");
        thirdDayTemp.classList.add("forecast-data");
        thirdDayTemp.textContent = `${threeDayForecastResponse.forecast[2].low}°/${threeDayForecastResponse.forecast[2].high}°`;
        thirdDayHolder.appendChild(thirdDayTemp);

        const thirdDayCondition = document.createElement("span");
        thirdDayCondition.classList.add("forecast-data");
        thirdDayCondition.textContent = threeDayForecastResponse.forecast[2].condition;
        thirdDayHolder.appendChild(thirdDayCondition);

        threeDayContainer.appendChild(firstDayHolder);
        threeDayContainer.appendChild(secondDayHolder);
        threeDayContainer.appendChild(thirdDayHolder);
        document.querySelector("#upcoming").appendChild(threeDayContainer);


}

attachEvents();