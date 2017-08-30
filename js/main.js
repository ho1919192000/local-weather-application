$.ajaxSetup({
    cache: false
});
if (navigator.geolocation) { //Access our user's current location. 
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        $.getJSON(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, function (json) {
            $("#location").html(json.name + ", " + json.sys.country);
            $("#temp").html(json.main.temp);
            $("#weather").html(json.weather[0].main);
            $("#icon").html(`<img src="${json.weather[0].icon}"></img>`);
            $("#tranfer").on("click", tempUnit);

        });
    });
}

function tempUnit() {
    if ($("#tempUnit").html() === "C") {
        let f = Number($("#temp").html()) * 1.8 + 32;
        $("#temp").html(f.toFixed(2));
        $("#tempUnit").html("F");
    } else {
        let c = (Number($("#temp").html()) - 32) / 1.8;
        $("#temp").html(c.toFixed(2));
        $("#tempUnit").html("C");
    }
}