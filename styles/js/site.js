// Inicializacao das data tables
$(document).ready(function () {
    $('#WEATHER').DataTable();
});

$(document).ready(function () {
    $('#WEATHER_DETALHES').DataTable();
});

$(document).ready(function () {
    $('#WEATHER_FAVORITOS').DataTable();
});

$(document).ready(function () {
    $('#WEATHER_DETALHES').DataTable();
});

//Funcao para obter a latitude e longitude consoante a nossa localizacao
function buscar_localizacao_atual() {

    var detalhes = document.getElementById("detalhes"); //Obter o elemento pelo id

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrar_dados);    //Se obter a localizacao entao ira chamar a funcao "mostrar_dados"
    } else {
        detalhes.innerHTML = "A Geolocalizacao nao e suportada neste browser."; //Mensagem de erro
    }


    function mostrar_dados(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;      //Receber os dados de latitude e longitude

        var local_detalhado = document.querySelector('#cidade_texto');
        var tempo_detalhado = document.querySelector('#tempo_detalhado');
        var chuva_detalhado = document.querySelector('#chuva_detalhado');       //Id's dos campos da tabela
        var vento_detalhado = document.querySelector('#vento_detalhado');
        var longitude_detalhado = document.querySelector('#longitude');
        var latitude_detalhado = document.querySelector('#latitude');

        //Buscar as informacao na API
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {

                var tempoValor = data['main']['temp'];
                var nameValor = data['name'];
                var chuvaValor = data['main']['humidity'];      //Receber os dados vindo da API
                var ventoValor = data['wind']['speed'];
                var nuvemValor = data['weather'][0]['icon'];

                local_detalhado.innerHTML = nameValor;
                tempo_detalhado.innerHTML = tempoValor + " ºC";
                chuva_detalhado.innerHTML = chuvaValor + "%";       //Passar os dados para a pagina WEB
                vento_detalhado.innerHTML = ventoValor + " m/s";
                latitude_detalhado.innerHTML = latitude;
                longitude_detalhado.innerHTML = longitude;
                document.getElementById("nuvens_detalhado").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";
                localStorage.setItem("Valor", tempoValor);

            })
            .catch(err => alert("Erro"));

        // Tabela de Detalhes
        var tempo_detalhado = document.querySelector('#tempo_detalhado');
        var chuva_detalhado = document.querySelector('#chuva_detalhado');
        var vento_detalhado = document.querySelector('#vento_detalhado');        //Id's dos campos da tabela
        var latitude_detalhado = document.querySelector('#latitude');
        var longitude_detalhado = document.querySelector('#longitude');

        var tempo_forecast = document.querySelector('#tempo_forecast1');
        var chuva_forecast = document.querySelector('#chuva_forecast1');
        var vento_forecast = document.querySelector('#vento_forecast1');
        var dia_forecast = document.querySelector('#dia_forecast1');
        var tempo_forecast2 = document.querySelector('#tempo_forecast2');
        var chuva_forecast2 = document.querySelector('#chuva_forecast2');        //Id's dos campos da tabela
        var vento_forecast2 = document.querySelector('#vento_forecast2');
        var dia_forecast2 = document.querySelector('#dia_forecast2');
        var tempo_forecast3 = document.querySelector('#tempo_forecast3');
        var chuva_forecast3 = document.querySelector('#chuva_forecast3');
        var vento_forecast3 = document.querySelector('#vento_forecast3');
        var dia_forecast3 = document.querySelector('#dia_forecast3');

        var tempo_forecast4 = document.querySelector('#tempo_forecast4');
        var chuva_forecast4 = document.querySelector('#chuva_forecast4');
        var vento_forecast4 = document.querySelector('#vento_forecast4');
        var dia_forecast4 = document.querySelector('#dia_forecast4');
        var tempo_forecast5 = document.querySelector('#tempo_forecast4_1');
        var chuva_forecast5 = document.querySelector('#chuva_forecast4_1');      //Id's dos campos da tabela
        var vento_forecast5 = document.querySelector('#vento_forecast4_1');
        var dia_forecast5 = document.querySelector('#dia_forecast4_1');
        var tempo_forecast6 = document.querySelector('#tempo_forecast4_2');
        var chuva_forecast6 = document.querySelector('#chuva_forecast4_2');
        var vento_forecast6 = document.querySelector('#vento_forecast4_2');
        var dia_forecast6 = document.querySelector('#dia_forecast4_2');
        var tempo_forecast7 = document.querySelector('#tempo_forecast4_3');
        var chuva_forecast7 = document.querySelector('#chuva_forecast4_3');
        var vento_forecast7 = document.querySelector('#vento_forecast4_3');
        var dia_forecast7 = document.querySelector('#dia_forecast4_3');

        var tempo_forecast8 = document.querySelector('#tempo_forecast5');
        var chuva_forecast8 = document.querySelector('#chuva_forecast5');
        var vento_forecast8 = document.querySelector('#vento_forecast5');
        var dia_forecast8 = document.querySelector('#dia_forecast5');
        var tempo_forecast9 = document.querySelector('#tempo_forecast5_1');
        var chuva_forecast9 = document.querySelector('#chuva_forecast5_1');      //Id's dos campos da tabela
        var vento_forecast9 = document.querySelector('#vento_forecast5_1');
        var dia_forecast9 = document.querySelector('#dia_forecast5_1');
        var tempo_forecast10 = document.querySelector('#tempo_forecast5_2');
        var chuva_forecast10 = document.querySelector('#chuva_forecast5_2');
        var vento_forecast10 = document.querySelector('#vento_forecast5_2');
        var dia_forecast10 = document.querySelector('#dia_forecast5_2');
        var tempo_forecast11 = document.querySelector('#tempo_forecast5_3');
        var chuva_forecast11 = document.querySelector('#chuva_forecast5_3');
        var vento_forecast11 = document.querySelector('#vento_forecast5_3');
        var dia_forecast11 = document.querySelector('#dia_forecast5_3');

        var tempo_forecast12 = document.querySelector('#tempo_forecast6');
        var chuva_forecast12 = document.querySelector('#chuva_forecast6');
        var vento_forecast12 = document.querySelector('#vento_forecast6');
        var dia_forecast12 = document.querySelector('#dia_forecast6');
        var tempo_forecast13 = document.querySelector('#tempo_forecast6_1');
        var chuva_forecast13 = document.querySelector('#chuva_forecast6_1');         //Id's dos campos da tabela
        var vento_forecast13 = document.querySelector('#vento_forecast6_1');
        var dia_forecast13 = document.querySelector('#dia_forecast6_1');
        var tempo_forecast14 = document.querySelector('#tempo_forecast6_2');
        var chuva_forecast14 = document.querySelector('#chuva_forecast6_2');
        var vento_forecast14 = document.querySelector('#vento_forecast6_2');
        var dia_forecast14 = document.querySelector('#dia_forecast6_2');
        var tempo_forecast15 = document.querySelector('#tempo_forecast6_3');
        var chuva_forecast15 = document.querySelector('#chuva_forecast6_3');
        var vento_forecast15 = document.querySelector('#vento_forecast6_3');
        var dia_forecast15 = document.querySelector('#dia_forecast6_3');

        var tempo_forecast16 = document.querySelector('#tempo_forecast7');
        var chuva_forecast16 = document.querySelector('#chuva_forecast7');
        var vento_forecast16 = document.querySelector('#vento_forecast7');
        var dia_forecast16 = document.querySelector('#dia_forecast7');
        var tempo_forecast17 = document.querySelector('#tempo_forecast7_1');
        var chuva_forecast17 = document.querySelector('#chuva_forecast7_1');         //Id's dos campos da tabela
        var vento_forecast17 = document.querySelector('#vento_forecast7_1');
        var dia_forecast17 = document.querySelector('#dia_forecast7_1');
        var tempo_forecast18 = document.querySelector('#tempo_forecast7_2');
        var chuva_forecast18 = document.querySelector('#chuva_forecast7_2');
        var vento_forecast18 = document.querySelector('#vento_forecast7_2');
        var dia_forecast18 = document.querySelector('#dia_forecast7_2');
        var tempo_forecast19 = document.querySelector('#tempo_forecast7_3');
        var chuva_forecast19 = document.querySelector('#chuva_forecast7_3');
        var vento_forecast19 = document.querySelector('#vento_forecast7_3');
        var dia_forecast19 = document.querySelector('#dia_forecast7_3');

        //Buscar as informacao na API
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {

                var horaValor = data['list'][0]['dt_txt'];
                var tempoForecast = data['list'][0]['main']['temp'];
                var chuvaForecast = data['list'][0]['main']['humidity'];
                var ventoForecast = data['list'][0]['wind']['speed'];
                var nuvemForecast = data['list'][0]['weather'][0]['icon'];
                var horaValor2 = data['list'][1]['dt_txt'];                     //Receber os dados vindo da API
                var tempoForecast2 = data['list'][1]['main']['temp'];
                var chuvaForecast2 = data['list'][1]['main']['humidity'];
                var ventoForecast2 = data['list'][1]['wind']['speed'];
                var nuvemForecast2 = data['list'][1]['weather'][0]['icon'];
                var horaValor3 = data['list'][2]['dt_txt'];
                var tempoForecast3 = data['list'][2]['main']['temp'];
                var chuvaForecast3 = data['list'][2]['main']['humidity'];
                var ventoForecast3 = data['list'][2]['wind']['speed'];
                var nuvemForecast3 = data['list'][2]['weather'][0]['icon'];

                dia_forecast.innerHTML = horaValor;
                tempo_forecast.innerHTML = tempoForecast + " ºC";
                chuva_forecast.innerHTML = chuvaForecast + "%";
                vento_forecast.innerHTML = ventoForecast + " m/s";
                document.getElementById("nuvens_forecast1").src = "http://openweathermap.org/img/wn/" + nuvemForecast + "@2x.png";
                localStorage.setItem("Forecast1", tempoForecast);

                dia_forecast2.innerHTML = horaValor2;
                tempo_forecast2.innerHTML = tempoForecast2 + " ºC";                                                                         //Passar os dados para a pagina WEB
                chuva_forecast2.innerHTML = chuvaForecast2 + "%";
                vento_forecast2.innerHTML = ventoForecast2 + " m/s";
                document.getElementById("nuvens_forecast2").src = "http://openweathermap.org/img/wn/" + nuvemForecast2 + "@2x.png";
                localStorage.setItem("Forecast2", tempoForecast2);

                dia_forecast3.innerHTML = horaValor3;
                tempo_forecast3.innerHTML = tempoForecast3 + " ºC";
                chuva_forecast3.innerHTML = chuvaForecast3 + "%";
                vento_forecast3.innerHTML = ventoForecast3 + " m/s";
                document.getElementById("nuvens_forecast3").src = "http://openweathermap.org/img/wn/" + nuvemForecast3 + "@2x.png";
                localStorage.setItem("Forecast3", tempoForecast3);


            })
            .catch(err => alert("Erro"));

        //Tabela de forecast

        //Buscar as informacao na API
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {

                var horaValor4 = data['list'][7]['dt_txt'];
                var tempoForecast4 = data['list'][7]['main']['temp'];
                var chuvaForecast4 = data['list'][7]['main']['humidity'];
                var ventoForecast4 = data['list'][7]['wind']['speed'];
                var nuvemForecast4 = data['list'][7]['weather'][0]['icon'];
                var horaValor5 = data['list'][8]['dt_txt'];                         //Receber os dados vindo da API
                var tempoForecast5 = data['list'][8]['main']['temp'];
                var chuvaForecast5 = data['list'][8]['main']['humidity'];
                var ventoForecast5 = data['list'][8]['wind']['speed'];
                var nuvemForecast5 = data['list'][8]['weather'][0]['icon'];
                var horaValor6 = data['list'][9]['dt_txt'];
                var tempoForecast6 = data['list'][9]['main']['temp'];
                var chuvaForecast6 = data['list'][9]['main']['humidity'];
                var ventoForecast6 = data['list'][9]['wind']['speed'];
                var nuvemForecast6 = data['list'][9]['weather'][0]['icon'];
                var horaValor7 = data['list'][10]['dt_txt'];
                var tempoForecast7 = data['list'][10]['main']['temp'];
                var chuvaForecast7 = data['list'][10]['main']['humidity'];
                var ventoForecast7 = data['list'][10]['wind']['speed'];
                var nuvemForecast7 = data['list'][10]['weather'][0]['icon'];

                dia_forecast4.innerHTML = horaValor4;
                tempo_forecast4.innerHTML = tempoForecast4 + " ºC";
                chuva_forecast4.innerHTML = chuvaForecast4 + "%";
                vento_forecast4.innerHTML = ventoForecast4 + " m/s";
                document.getElementById("nuvens_forecast4").src = "http://openweathermap.org/img/wn/" + nuvemForecast4 + "@2x.png";
                localStorage.setItem("Forecast4", tempoForecast4);

                dia_forecast5.innerHTML = horaValor5;                                                                                       //Passar os dados para a pagina WEB
                tempo_forecast5.innerHTML = tempoForecast5 + " ºC";
                chuva_forecast5.innerHTML = chuvaForecast5 + "%";
                vento_forecast5.innerHTML = ventoForecast5 + " m/s";
                document.getElementById("nuvens_forecast4_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast5 + "@2x.png";
                localStorage.setItem("Forecast5", tempoForecast5);

                dia_forecast6.innerHTML = horaValor6;
                tempo_forecast6.innerHTML = tempoForecast6 + " ºC";
                chuva_forecast6.innerHTML = chuvaForecast6 + "%";
                vento_forecast6.innerHTML = ventoForecast6 + " m/s";
                document.getElementById("nuvens_forecast4_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast6 + "@2x.png";
                localStorage.setItem("Forecast6", tempoForecast6);

                dia_forecast7.innerHTML = horaValor7;
                tempo_forecast7.innerHTML = tempoForecast7 + " ºC";
                chuva_forecast7.innerHTML = chuvaForecast7 + "%";
                vento_forecast7.innerHTML = ventoForecast7 + " m/s";
                document.getElementById("nuvens_forecast4_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast7 + "@2x.png";
                localStorage.setItem("Forecast7", tempoForecast7);


            })
            .catch(err => alert("Erro"));

        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {

                var horaValor8 = data['list'][15]['dt_txt'];
                var tempoForecast8 = data['list'][15]['main']['temp'];
                var chuvaForecast8 = data['list'][15]['main']['humidity'];
                var ventoForecast8 = data['list'][15]['wind']['speed'];
                var nuvemForecast8 = data['list'][15]['weather'][0]['icon'];
                var horaValor9 = data['list'][16]['dt_txt'];                        //Receber os dados vindo da API
                var tempoForecast9 = data['list'][16]['main']['temp'];
                var chuvaForecast9 = data['list'][16]['main']['humidity'];
                var ventoForecast9 = data['list'][16]['wind']['speed'];
                var nuvemForecast9 = data['list'][16]['weather'][0]['icon'];
                var horaValor10 = data['list'][17]['dt_txt'];
                var tempoForecast10 = data['list'][17]['main']['temp'];
                var chuvaForecast10 = data['list'][17]['main']['humidity'];
                var ventoForecast10 = data['list'][17]['wind']['speed'];
                var nuvemForecast10 = data['list'][17]['weather'][0]['icon'];
                var horaValor11 = data['list'][18]['dt_txt'];
                var tempoForecast11 = data['list'][18]['main']['temp'];
                var chuvaForecast11 = data['list'][18]['main']['humidity'];
                var ventoForecast11 = data['list'][18]['wind']['speed'];
                var nuvemForecast11 = data['list'][18]['weather'][0]['icon'];

                dia_forecast8.innerHTML = horaValor8;
                tempo_forecast8.innerHTML = tempoForecast8 + " ºC";
                chuva_forecast8.innerHTML = chuvaForecast8 + "%";
                vento_forecast8.innerHTML = ventoForecast8 + " m/s";
                document.getElementById("nuvens_forecast5").src = "http://openweathermap.org/img/wn/" + nuvemForecast8 + "@2x.png";
                localStorage.setItem("Forecast8", tempoForecast8);

                dia_forecast9.innerHTML = horaValor9;                                                                                       //Passar os dados para a pagina WEB
                tempo_forecast9.innerHTML = tempoForecast9 + " ºC";
                chuva_forecast9.innerHTML = chuvaForecast9 + "%";
                vento_forecast9.innerHTML = ventoForecast9 + " m/s";
                document.getElementById("nuvens_forecast5_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast9 + "@2x.png";
                localStorage.setItem("Forecast9", tempoForecast9);

                dia_forecast10.innerHTML = horaValor10;
                tempo_forecast10.innerHTML = tempoForecast10 + " ºC";
                chuva_forecast10.innerHTML = chuvaForecast10 + "%";
                vento_forecast10.innerHTML = ventoForecast10 + " m/s";
                document.getElementById("nuvens_forecast5_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast10 + "@2x.png";
                localStorage.setItem("Forecast10", tempoForecast10);

                dia_forecast11.innerHTML = horaValor11;
                tempo_forecast11.innerHTML = tempoForecast11 + " ºC";
                chuva_forecast11.innerHTML = chuvaForecast11 + "%";
                vento_forecast11.innerHTML = ventoForecast11 + " m/s";
                document.getElementById("nuvens_forecast5_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast11 + "@2x.png";
                localStorage.setItem("Forecast11", tempoForecast11);


            })
            .catch(err => alert("Erro"));

        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {

                var horaValor12 = data['list'][23]['dt_txt'];
                var tempoForecast12 = data['list'][23]['main']['temp'];
                var chuvaForecast12 = data['list'][23]['main']['humidity'];
                var ventoForecast12 = data['list'][23]['wind']['speed'];
                var nuvemForecast12 = data['list'][23]['weather'][0]['icon'];
                var horaValor13 = data['list'][24]['dt_txt'];
                var tempoForecast13 = data['list'][24]['main']['temp'];                     //Receber os dados vindo da API
                var chuvaForecast13 = data['list'][24]['main']['humidity'];
                var ventoForecast13 = data['list'][24]['wind']['speed'];
                var nuvemForecast13 = data['list'][24]['weather'][0]['icon'];
                var horaValor14 = data['list'][25]['dt_txt'];
                var tempoForecast14 = data['list'][25]['main']['temp'];
                var chuvaForecast14 = data['list'][25]['main']['humidity'];
                var ventoForecast14 = data['list'][25]['wind']['speed'];
                var nuvemForecast14 = data['list'][25]['weather'][0]['icon'];
                var horaValor15 = data['list'][26]['dt_txt'];
                var tempoForecast15 = data['list'][26]['main']['temp'];
                var chuvaForecast15 = data['list'][26]['main']['humidity'];
                var ventoForecast15 = data['list'][26]['wind']['speed'];
                var nuvemForecast15 = data['list'][26]['weather'][0]['icon'];

                dia_forecast12.innerHTML = horaValor12;
                tempo_forecast12.innerHTML = tempoForecast12 + " ºC";
                chuva_forecast12.innerHTML = chuvaForecast12 + "%";
                vento_forecast12.innerHTML = ventoForecast12 + " m/s";
                document.getElementById("nuvens_forecast6").src = "http://openweathermap.org/img/wn/" + nuvemForecast12 + "@2x.png";
                localStorage.setItem("Forecast12", tempoForecast12);

                dia_forecast13.innerHTML = horaValor13;                                                                                         //Passar os dados para a pagina WEB
                tempo_forecast13.innerHTML = tempoForecast13 + " ºC";
                chuva_forecast13.innerHTML = chuvaForecast13 + "%";
                vento_forecast13.innerHTML = ventoForecast13 + " m/s";
                document.getElementById("nuvens_forecast6_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast13 + "@2x.png";
                localStorage.setItem("Forecast13", tempoForecast13);

                dia_forecast14.innerHTML = horaValor14;
                tempo_forecast14.innerHTML = tempoForecast14 + " ºC";
                chuva_forecast14.innerHTML = chuvaForecast14 + "%";
                vento_forecast14.innerHTML = ventoForecast14 + " m/s";
                document.getElementById("nuvens_forecast6_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast14 + "@2x.png";
                localStorage.setItem("Forecast14", tempoForecast14);

                dia_forecast15.innerHTML = horaValor15;
                tempo_forecast15.innerHTML = tempoForecast15 + " ºC";
                chuva_forecast15.innerHTML = chuvaForecast15 + "%";
                vento_forecast15.innerHTML = ventoForecast15 + " m/s";
                document.getElementById("nuvens_forecast6_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast15 + "@2x.png";
                localStorage.setItem("Forecast15", tempoForecast15);


            })
            .catch(err => alert("Erro"));

        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {

                var horaValor16 = data['list'][31]['dt_txt'];
                var tempoForecast16 = data['list'][31]['main']['temp'];
                var chuvaForecast16 = data['list'][31]['main']['humidity'];
                var ventoForecast16 = data['list'][31]['wind']['speed'];
                var nuvemForecast16 = data['list'][31]['weather'][0]['icon'];
                var horaValor17 = data['list'][32]['dt_txt'];
                var tempoForecast17 = data['list'][32]['main']['temp'];
                var chuvaForecast17 = data['list'][32]['main']['humidity'];
                var ventoForecast17 = data['list'][32]['wind']['speed'];                //Receber os dados vindo da API
                var nuvemForecast17 = data['list'][32]['weather'][0]['icon'];
                var horaValor18 = data['list'][33]['dt_txt'];
                var tempoForecast18 = data['list'][33]['main']['temp'];
                var chuvaForecast18 = data['list'][33]['main']['humidity'];
                var ventoForecast18 = data['list'][33]['wind']['speed'];
                var nuvemForecast18 = data['list'][33]['weather'][0]['icon'];
                var horaValor19 = data['list'][34]['dt_txt'];
                var tempoForecast19 = data['list'][34]['main']['temp'];
                var chuvaForecast19 = data['list'][34]['main']['humidity'];
                var ventoForecast19 = data['list'][34]['wind']['speed'];
                var nuvemForecast19 = data['list'][34]['weather'][0]['icon'];

                dia_forecast16.innerHTML = horaValor16;
                tempo_forecast16.innerHTML = tempoForecast16 + " ºC";
                chuva_forecast16.innerHTML = chuvaForecast16 + "%";
                vento_forecast16.innerHTML = ventoForecast16 + " m/s";
                document.getElementById("nuvens_forecast7").src = "http://openweathermap.org/img/wn/" + nuvemForecast16 + "@2x.png";
                localStorage.setItem("Forecast16", tempoForecast16);

                dia_forecast17.innerHTML = horaValor17;                                                                                         //Passar os dados para a pagina WEB
                tempo_forecast17.innerHTML = tempoForecast17 + " ºC";
                chuva_forecast17.innerHTML = chuvaForecast17 + "%";
                vento_forecast17.innerHTML = ventoForecast17 + " m/s";
                document.getElementById("nuvens_forecast7_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast17 + "@2x.png";
                localStorage.setItem("Forecast17", tempoForecast17);

                dia_forecast18.innerHTML = horaValor18;
                tempo_forecast18.innerHTML = tempoForecast18 + " ºC";
                chuva_forecast18.innerHTML = chuvaForecast18 + "%";
                vento_forecast18.innerHTML = ventoForecast18 + " m/s";
                document.getElementById("nuvens_forecast7_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast18 + "@2x.png";
                localStorage.setItem("Forecast18", tempoForecast18);

                dia_forecast19.innerHTML = horaValor19;
                tempo_forecast19.innerHTML = tempoForecast19 + " ºC";
                chuva_forecast19.innerHTML = chuvaForecast19 + "%";
                vento_forecast19.innerHTML = ventoForecast19 + " m/s";
                document.getElementById("nuvens_forecast7_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast19 + "@2x.png";
                localStorage.setItem("Forecast19", tempoForecast19);


            })
            .catch(err => alert("Erro"));
    }

}

//Funcao para ir buscar os dados referentes as cidades estaticas da pagina principal
window.onload = function busca_info_estatico() {

    var cidade1 = "Lisboa";
    var cidade2 = "Coimbra";
    var cidade3 = "Leiria";      //Nomes das cidades Estaticas da pagina principal
    var cidade4 = "Berlim";
    var cidade5 = "Ohio";
    var cidade6 = "Torres Vedras";

    var local1 = document.querySelector('#local1');
    var local2 = document.querySelector('#local2');
    var local3 = document.querySelector('#local3');
    var local4 = document.querySelector('#local4');
    var local5 = document.querySelector('#local5');
    var local6 = document.querySelector('#local6');

    var temp1 = document.querySelector('#temp1');
    var temp2 = document.querySelector('#temp2');
    var temp3 = document.querySelector('#temp3');
    var temp4 = document.querySelector('#temp4');
    var temp5 = document.querySelector('#temp5');
    var temp6 = document.querySelector('#temp6');

    var chuva1 = document.querySelector('#chuva1');
    var chuva2 = document.querySelector('#chuva2');
    var chuva3 = document.querySelector('#chuva3');
    var chuva4 = document.querySelector('#chuva4');
    var chuva5 = document.querySelector('#chuva5');
    var chuva6 = document.querySelector('#chuva6');

    var vento1 = document.querySelector('#vento1');
    var vento2 = document.querySelector('#vento2');
    var vento3 = document.querySelector('#vento3');
    var vento4 = document.querySelector('#vento4');
    var vento5 = document.querySelector('#vento5');
    var vento6 = document.querySelector('#vento6');


    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade1 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];          //Receber os dados vindo da API
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];

            local1.innerHTML = nameValor;
            temp1.innerHTML = tempoValor + " ºC";
            chuva1.innerHTML = chuvaValor + "%";                //Passar os dados para a pagina WEB
            vento1.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens1").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";

        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade2 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];          //Receber os dados vindo da API
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];

            local2.innerHTML = nameValor;
            temp2.innerHTML = tempoValor + " ºC";
            chuva2.innerHTML = chuvaValor + "%";                //Passar os dados para a pagina WEB
            vento2.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens2").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";


        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade3 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];      //Receber os dados vindo da API
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];

            local3.innerHTML = nameValor;
            temp3.innerHTML = tempoValor + " ºC";
            chuva3.innerHTML = chuvaValor + "%";            //Passar os dados para a pagina WEB
            vento3.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens3").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";



        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade4 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];      //Receber os dados vindo da API
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];

            local4.innerHTML = nameValor;
            temp4.innerHTML = tempoValor + " ºC";
            chuva4.innerHTML = chuvaValor + "%";            //Passar os dados para a pagina WEB
            vento4.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens4").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";


        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade5 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];      //Receber os dados vindo da API
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];

            local5.innerHTML = nameValor;
            temp5.innerHTML = tempoValor + " ºC";
            chuva5.innerHTML = chuvaValor + "%";            //Passar os dados para a pagina WEB
            vento5.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens5").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";


        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade6 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];      //Receber os dados vindo da API 
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];

            local6.innerHTML = nameValor;
            temp6.innerHTML = tempoValor + " ºC";
            chuva6.innerHTML = chuvaValor + "%";            //Passar os dados para a pagina WEB
            vento6.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens6").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";


        })
        .catch(err => alert("Erro"));

}

//Abrir o botão colapsavel para o forecast
function abrir_forecast() {
    var coll = document.getElementsByClassName("abrir");  //Buscar a classe
    var i;

    for (i = 0; i < coll.length; i++) { // Ciclo for para abrir ou fechar a aba de forecast
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

// Funcao para converter para fahrenheit na pagina principal
function celsius_para_fahrenheit() {

    var cidade1 = "Lisboa";
    var cidade2 = "Coimbra";
    var cidade3 = "Leiria";     // Nomes das cidades Estaticas da pagina principal
    var cidade4 = "Berlim";
    var cidade5 = "Ohio";
    var cidade6 = "Torres Vedras";

    var temp1 = document.querySelector('#temp1');
    var temp2 = document.querySelector('#temp2');
    var temp3 = document.querySelector('#temp3');       //Id's dos campos da tabela
    var temp4 = document.querySelector('#temp4');
    var temp5 = document.querySelector('#temp5');
    var temp6 = document.querySelector('#temp6');

    //Buscar as informacao na API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade1 + '&appid=9007a57b713ded2cab57517001962537&units=imperial')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];          //Receber os dados vindo da API
            temp1.innerHTML = tempoValor + " ºF";           //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade2 + '&appid=9007a57b713ded2cab57517001962537&units=imperial')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];          //Receber os dados vindo da API
            temp2.innerHTML = tempoValor + " ºF";           //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade3 + '&appid=9007a57b713ded2cab57517001962537&units=imperial')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];          //Receber os dados vindo da API
            temp3.innerHTML = tempoValor + " ºF";           //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade4 + '&appid=9007a57b713ded2cab57517001962537&units=imperial')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];          //Receber os dados vindo da API
            temp4.innerHTML = tempoValor + " ºF";           //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade5 + '&appid=9007a57b713ded2cab57517001962537&units=imperial')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp5.innerHTML = tempoValor + " ºF";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade6 + '&appid=9007a57b713ded2cab57517001962537&units=imperial')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp6.innerHTML = tempoValor + " ºF";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

}

// Funcao para converter para celsius na pagina principal
function fahrenheit_para_celsius() {

    var cidade1 = "Lisbon";
    var cidade2 = "Coimbra";
    var cidade3 = "Leiria";     //Nomes das cidades Estaticas da pagina principal
    var cidade4 = "Berlim";
    var cidade5 = "Ohio";
    var cidade6 = "Torres Vedras";

    var temp1 = document.querySelector('#temp1');
    var temp2 = document.querySelector('#temp2');
    var temp3 = document.querySelector('#temp3');           //Id's dos campos da tabela
    var temp4 = document.querySelector('#temp4');
    var temp5 = document.querySelector('#temp5');
    var temp6 = document.querySelector('#temp6');

    //Buscar as informacao na API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade1 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp1.innerHTML = tempoValor + " ºC";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade2 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp2.innerHTML = tempoValor + " ºC";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade3 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp3.innerHTML = tempoValor + " ºC";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade4 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp4.innerHTML = tempoValor + " ºC";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade5 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp5.innerHTML = tempoValor + " ºC";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade6 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];      //Receber os dados vindo da API
            temp6.innerHTML = tempoValor + " ºC";       //Passar os dados para a pagina WEB
        })
        .catch(err => alert("Erro"));
}

//Adicionar a cidade aos favoritos
function favorito1() {
    var cidade_fav1 = document.getElementById("local1").innerText; //Buscar o texto referente ao ID
    localStorage.setItem("favorite1", cidade_fav1); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem

}

function favorito2() {
    var cidade_fav2 = document.getElementById("local2").innerText;  //Buscar o texto referente ao ID
    localStorage.setItem("favorite2", cidade_fav2); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem
}

function favorito3() {
    var cidade_fav3 = document.getElementById("local3").innerText;  //Buscar o texto referente ao ID
    localStorage.setItem("favorite3", cidade_fav3); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem
}

function favorito4() {
    var cidade_fav4 = document.getElementById("local4").innerText;  //Buscar o texto referente ao ID
    localStorage.setItem("favorite4", cidade_fav4); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem
}

function favorito5() {
    var cidade_fav5 = document.getElementById("local5").innerText;  //Buscar o texto referente ao ID
    localStorage.setItem("favorite5", cidade_fav5); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem
}

function favorito6() {
    var cidade_fav6 = document.getElementById("local6").innerText;  //Buscar o texto referente ao ID
    localStorage.setItem("favorite6", cidade_fav6); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem
}

function favorito_detalhe() {
    var cidade_fav_detalhe = document.getElementById("cidade_texto").innerText; //Buscar o texto referente ao ID
    localStorage.setItem("favoritedetalhe", cidade_fav_detalhe); //Guardar o "valor" em LocalStorage
    alert("Adicionado aos favoritos com sucesso!!"); //Mensagem
}