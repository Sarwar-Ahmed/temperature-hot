const apiKey = 'c0ef18e3b4bf4dad7b24e689f99c3a68';
const search = document.getElementById("searchResult");
search.addEventListener("click", () => {
    const searchLocation = document.getElementById("search").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("weatherImg").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        document.getElementById("location").innerText = data.name || "Cannot find location";
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("weather").innerText = data.weather[0].main;
        document.getElementById("search").value = '';
    })
});