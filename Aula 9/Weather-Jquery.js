$(document).ready(function () {
    $("#citySelector").change(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {
                q: $('#citySelector').val(),
                appid: 'b2b1df463182c3cca5276e9d3267cc95'
            },
            success: function (data) {
                if (data.name) {
                    $('table').removeClass('d-none');
                    $('#cityName').html(data.name + "/" + data.sys.country);
                    $('#coordinates').html('Lon (º): ' + data.coord.lon + ' / Lat (º):' + data.coord.lat);
                    $('#weather').html(data.weather[0].description);
                    $('#temperature').html(data.main.temp.toString() + 'ºK / ' + Math.round((data.main.temp - 273.15)).toString() + "Cº");
                    $('#airPressure').html(data.main.pressure);
                    $('#allData').html(JSON.stringify(data))
                } else {
                    alert('Could retrive information through http://api.openweathermap.org/data/2.5/weather API');
                }

            }
        })
    })
})