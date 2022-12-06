$(document).ready(function (){
    function MyWeatherModel(){
        var self = this;
        self.selectedCity = ko.observable();
        self.error = ko.observable();
        self.weatherInfo = ko.observable();

        // API call
        self.cityChanged = function () {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather",
                data: {
                    q: $('#selectedCity').val(),
                    appid: 'b2b1df463182c3cca5276e9d3267cc95'
                },
                success: function (data) {
                    if (data.name) {
                        self.weatherInfo(data);
                    } else {
                        alert('Could retrive information through http://api.openweathermap.org/data/2.5/weather API');
                    }

                }
            })
        }
    }
    ko.applyBindings(new MyWeatherModel());
})


