localStorage.getItem("cidade_pesquisa");
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),                    //Receber o nome da cidade pelo LocalStorage insirada na pagina detalhes
});
let value = params.cidade_pesquisa;

//Funcao para obter os dados pela cidade pretendida
window.onload = function busca_info_pesquisa() {

    var tempo_detalhado = document.querySelector('#tempo_detalhado');
    var chuva_detalhado = document.querySelector('#chuva_detalhado');
    var vento_detalhado = document.querySelector('#vento_detalhado');        //Id's dos campos da tabela
    var latitude_detalhado = document.querySelector('#latitude');
    var longitude_detalhado = document.querySelector('#longitude');
    var texto = document.querySelector('#cidade_texto');

    var tempo_forecast = document.querySelector('#tempo_forecast1');
    var chuva_forecast = document.querySelector('#chuva_forecast1');
    var vento_forecast = document.querySelector('#vento_forecast1');
    var dia_forecast = document.querySelector('#dia_forecast1');
    var tempo_forecast2 = document.querySelector('#tempo_forecast2');        //Id's dos campos da tabela
    var chuva_forecast2 = document.querySelector('#chuva_forecast2');
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
    var tempo_forecast5 = document.querySelector('#tempo_forecast4_1');      //Id's dos campos da tabela
    var chuva_forecast5 = document.querySelector('#chuva_forecast4_1');
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
    var chuva_forecast9 = document.querySelector('#chuva_forecast5_1');
    var vento_forecast9 = document.querySelector('#vento_forecast5_1');     //Id's dos campos da tabela
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
    var tempo_forecast13 = document.querySelector('#tempo_forecast6_1');       //Id's dos campos da tabela
    var chuva_forecast13 = document.querySelector('#chuva_forecast6_1');
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
    var tempo_forecast17 = document.querySelector('#tempo_forecast7_1');    //Id's dos campos da tabela
    var chuva_forecast17 = document.querySelector('#chuva_forecast7_1');
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
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor = data['main']['temp'];
            var nameValor = data['name'];
            var chuvaValor = data['main']['humidity'];      //Receber os dados vindo da API
            var ventoValor = data['wind']['speed'];
            var nuvemValor = data['weather'][0]['icon'];
            var latitudeValor = data['coord']['lat'];
            var longitudeValor = data['coord']['lon'];

            tempo_detalhado.innerHTML = tempoValor + " ºC";
            chuva_detalhado.innerHTML = chuvaValor + "%";       //Passar os dados para a pagina WEB
            vento_detalhado.innerHTML = ventoValor + " m/s";
            document.getElementById("nuvens_detalhado").src = "http://openweathermap.org/img/wn/" + nuvemValor + "@2x.png";
            latitude_detalhado.innerHTML = latitudeValor;
            longitude_detalhado.innerHTML = longitudeValor;
            texto.innerHTML = nameValor;
            localStorage.setItem("Valor", tempoValor);
        })
        .catch(err => alert("Erro"));
    // Tabela DETALHADO

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var horaValor = data['list'][0]['dt_txt'];
            var tempoForecast = data['list'][0]['main']['temp'];
            var chuvaForecast = data['list'][0]['main']['humidity'];
            var ventoForecast = data['list'][0]['wind']['speed'];
            var nuvemForecast = data['list'][0]['weather'][0]['icon'];          //Receber os dados vindo da API
            var horaValor2 = data['list'][1]['dt_txt'];
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
            chuva_forecast.innerHTML = chuvaForecast + "%";         //Passar os dados para a pagina WEB
            vento_forecast.innerHTML = ventoForecast + " m/s";
            document.getElementById("nuvens_forecast1").src = "http://openweathermap.org/img/wn/" + nuvemForecast + "@2x.png";
            localStorage.setItem("Forecast1", tempoForecast);

            dia_forecast2.innerHTML = horaValor2;
            tempo_forecast2.innerHTML = tempoForecast2 + " ºC";
            chuva_forecast2.innerHTML = chuvaForecast2 + "%";       //Passar os dados para a pagina WEB
            vento_forecast2.innerHTML = ventoForecast2 + " m/s";
            document.getElementById("nuvens_forecast2").src = "http://openweathermap.org/img/wn/" + nuvemForecast2 + "@2x.png";
            localStorage.setItem("Forecast2", tempoForecast2);

            dia_forecast3.innerHTML = horaValor3;
            tempo_forecast3.innerHTML = tempoForecast3 + " ºC";
            chuva_forecast3.innerHTML = chuvaForecast3 + "%";       //Passar os dados para a pagina WEB
            vento_forecast3.innerHTML = ventoForecast3 + " m/s";
            document.getElementById("nuvens_forecast3").src = "http://openweathermap.org/img/wn/" + nuvemForecast3 + "@2x.png";
            localStorage.setItem("Forecast3", tempoForecast3);


        })
        .catch(err => alert("Erro"));
    //TABELA FORECAST
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var horaValor4 = data['list'][7]['dt_txt'];
            var tempoForecast4 = data['list'][7]['main']['temp'];
            var chuvaForecast4 = data['list'][7]['main']['humidity'];
            var ventoForecast4 = data['list'][7]['wind']['speed'];
            var nuvemForecast4 = data['list'][7]['weather'][0]['icon'];         //Receber os dados vindo da API
            var horaValor5 = data['list'][8]['dt_txt'];
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
            chuva_forecast4.innerHTML = chuvaForecast4 + "%";       //Passar os dados para a pagina WEB
            vento_forecast4.innerHTML = ventoForecast4 + " m/s";
            document.getElementById("nuvens_forecast4").src = "http://openweathermap.org/img/wn/" + nuvemForecast4 + "@2x.png";
            localStorage.setItem("Forecast4", tempoForecast4);

            dia_forecast5.innerHTML = horaValor5;
            tempo_forecast5.innerHTML = tempoForecast5 + " ºC";
            chuva_forecast5.innerHTML = chuvaForecast5 + "%";       //Passar os dados para a pagina WEB  
            vento_forecast5.innerHTML = ventoForecast5 + " m/s";
            document.getElementById("nuvens_forecast4_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast5 + "@2x.png";
            localStorage.setItem("Forecast5", tempoForecast5);

            dia_forecast6.innerHTML = horaValor6;
            tempo_forecast6.innerHTML = tempoForecast6 + " ºC";
            chuva_forecast6.innerHTML = chuvaForecast6 + "%";       //Passar os dados para a pagina WEB
            vento_forecast6.innerHTML = ventoForecast6 + " m/s";
            document.getElementById("nuvens_forecast4_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast6 + "@2x.png";
            localStorage.setItem("Forecast6", tempoForecast6);

            dia_forecast7.innerHTML = horaValor7;
            tempo_forecast7.innerHTML = tempoForecast7 + " ºC";
            chuva_forecast7.innerHTML = chuvaForecast7 + "%";       //Passar os dados para a pagina WEB
            vento_forecast7.innerHTML = ventoForecast7 + " m/s";
            document.getElementById("nuvens_forecast4_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast7 + "@2x.png";
            localStorage.setItem("Forecast7", tempoForecast7);


        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var horaValor8 = data['list'][15]['dt_txt'];
            var tempoForecast8 = data['list'][15]['main']['temp'];
            var chuvaForecast8 = data['list'][15]['main']['humidity'];
            var ventoForecast8 = data['list'][15]['wind']['speed'];
            var nuvemForecast8 = data['list'][15]['weather'][0]['icon'];           //Receber os dados vindo da API
            var horaValor9 = data['list'][16]['dt_txt'];
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
            chuva_forecast8.innerHTML = chuvaForecast8 + "%";       //Passar os dados para a pagina WEB
            vento_forecast8.innerHTML = ventoForecast8 + " m/s";
            document.getElementById("nuvens_forecast5").src = "http://openweathermap.org/img/wn/" + nuvemForecast8 + "@2x.png";
            localStorage.setItem("Forecast8", tempoForecast8);

            dia_forecast9.innerHTML = horaValor9;
            tempo_forecast9.innerHTML = tempoForecast9 + " ºC";
            chuva_forecast9.innerHTML = chuvaForecast9 + "%";       //Passar os dados para a pagina WEB
            vento_forecast9.innerHTML = ventoForecast9 + " m/s";
            document.getElementById("nuvens_forecast5_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast9 + "@2x.png";
            localStorage.setItem("Forecast9", tempoForecast9);

            dia_forecast10.innerHTML = horaValor10;
            tempo_forecast10.innerHTML = tempoForecast10 + " ºC";
            chuva_forecast10.innerHTML = chuvaForecast10 + "%";     //Passar os dados para a pagina WEB
            vento_forecast10.innerHTML = ventoForecast10 + " m/s";
            document.getElementById("nuvens_forecast5_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast10 + "@2x.png";
            localStorage.setItem("Forecast10", tempoForecast10);

            dia_forecast11.innerHTML = horaValor11;
            tempo_forecast11.innerHTML = tempoForecast11 + " ºC";
            chuva_forecast11.innerHTML = chuvaForecast11 + "%";     //Passar os dados para a pagina WEB
            vento_forecast11.innerHTML = ventoForecast11 + " m/s";
            document.getElementById("nuvens_forecast5_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast11 + "@2x.png";
            localStorage.setItem("Forecast11", tempoForecast11);


        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var horaValor12 = data['list'][23]['dt_txt'];
            var tempoForecast12 = data['list'][23]['main']['temp'];
            var chuvaForecast12 = data['list'][23]['main']['humidity'];
            var ventoForecast12 = data['list'][23]['wind']['speed'];
            var nuvemForecast12 = data['list'][23]['weather'][0]['icon'];       //Receber os dados vindo da API
            var horaValor13 = data['list'][24]['dt_txt'];
            var tempoForecast13 = data['list'][24]['main']['temp'];
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
            chuva_forecast12.innerHTML = chuvaForecast12 + "%";     //Passar os dados para a pagina WEB
            vento_forecast12.innerHTML = ventoForecast12 + " m/s";
            document.getElementById("nuvens_forecast6").src = "http://openweathermap.org/img/wn/" + nuvemForecast12 + "@2x.png";
            localStorage.setItem("Forecast12", tempoForecast12);

            dia_forecast13.innerHTML = horaValor13;
            tempo_forecast13.innerHTML = tempoForecast13 + " ºC";
            chuva_forecast13.innerHTML = chuvaForecast13 + "%";     //Passar os dados para a pagina WEB
            vento_forecast13.innerHTML = ventoForecast13 + " m/s";
            document.getElementById("nuvens_forecast6_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast13 + "@2x.png";
            localStorage.setItem("Forecast13", tempoForecast13);

            dia_forecast14.innerHTML = horaValor14;
            tempo_forecast14.innerHTML = tempoForecast14 + " ºC";
            chuva_forecast14.innerHTML = chuvaForecast14 + "%";     //Passar os dados para a pagina WEB
            vento_forecast14.innerHTML = ventoForecast14 + " m/s";
            document.getElementById("nuvens_forecast6_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast14 + "@2x.png";
            localStorage.setItem("Forecast14", tempoForecast14);

            dia_forecast15.innerHTML = horaValor15;
            tempo_forecast15.innerHTML = tempoForecast15 + " ºC";
            chuva_forecast15.innerHTML = chuvaForecast15 + "%";     //Passar os dados para a pagina WEB
            vento_forecast15.innerHTML = ventoForecast15 + " m/s";
            document.getElementById("nuvens_forecast6_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast15 + "@2x.png";
            localStorage.setItem("Forecast15", tempoForecast15);


        })
        .catch(err => alert("Erro"));

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var horaValor16 = data['list'][31]['dt_txt'];
            var tempoForecast16 = data['list'][31]['main']['temp'];
            var chuvaForecast16 = data['list'][31]['main']['humidity'];
            var ventoForecast16 = data['list'][31]['wind']['speed'];
            var nuvemForecast16 = data['list'][31]['weather'][0]['icon'];       //Receber os dados vindo da API
            var horaValor17 = data['list'][32]['dt_txt'];
            var tempoForecast17 = data['list'][32]['main']['temp'];
            var chuvaForecast17 = data['list'][32]['main']['humidity'];
            var ventoForecast17 = data['list'][32]['wind']['speed'];
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
            chuva_forecast16.innerHTML = chuvaForecast16 + "%";     //Passar os dados para a pagina WEB
            vento_forecast16.innerHTML = ventoForecast16 + " m/s";
            document.getElementById("nuvens_forecast7").src = "http://openweathermap.org/img/wn/" + nuvemForecast16 + "@2x.png";
            localStorage.setItem("Forecast16", tempoForecast16);

            dia_forecast17.innerHTML = horaValor17;
            tempo_forecast17.innerHTML = tempoForecast17 + " ºC";
            chuva_forecast17.innerHTML = chuvaForecast17 + "%";     //Passar os dados para a pagina WEB
            vento_forecast17.innerHTML = ventoForecast17 + " m/s";
            document.getElementById("nuvens_forecast7_1").src = "http://openweathermap.org/img/wn/" + nuvemForecast17 + "@2x.png";
            localStorage.setItem("Forecast17", tempoForecast17);

            dia_forecast18.innerHTML = horaValor18;
            tempo_forecast18.innerHTML = tempoForecast18 + " ºC";
            chuva_forecast18.innerHTML = chuvaForecast18 + "%";     //Passar os dados para a pagina WEB
            vento_forecast18.innerHTML = ventoForecast18 + " m/s";
            document.getElementById("nuvens_forecast7_2").src = "http://openweathermap.org/img/wn/" + nuvemForecast18 + "@2x.png";
            localStorage.setItem("Forecast18", tempoForecast18);

            dia_forecast19.innerHTML = horaValor19;
            tempo_forecast19.innerHTML = tempoForecast19 + " ºC";
            chuva_forecast19.innerHTML = chuvaForecast19 + "%";     //Passar os dados para a pagina WEB
            vento_forecast19.innerHTML = ventoForecast19 + " m/s";
            document.getElementById("nuvens_forecast7_3").src = "http://openweathermap.org/img/wn/" + nuvemForecast19 + "@2x.png";
            localStorage.setItem("Forecast19", tempoForecast19);


        })
        .catch(err => alert("Erro"));
}

// Funcao para converter para fahrenheit na pagina detalhes
function celsius_para_fahrenheit_detalhes() {
    let temperatura = localStorage.getItem("Valor");
    let temperatura_forecast = localStorage.getItem("Forecast1");
    let temperatura_forecast2 = localStorage.getItem("Forecast2");
    let temperatura_forecast3 = localStorage.getItem("Forecast3");
    let temperatura_forecast4 = localStorage.getItem("Forecast4");
    let temperatura_forecast5 = localStorage.getItem("Forecast5");
    let temperatura_forecast6 = localStorage.getItem("Forecast6");          //Recebe os valores no localstorage
    let temperatura_forecast7 = localStorage.getItem("Forecast7");
    let temperatura_forecast8 = localStorage.getItem("Forecast8");
    let temperatura_forecast9 = localStorage.getItem("Forecast9");
    let temperatura_forecast10 = localStorage.getItem("Forecast10");
    let temperatura_forecast11 = localStorage.getItem("Forecast11");
    let temperatura_forecast12 = localStorage.getItem("Forecast12");
    let temperatura_forecast13 = localStorage.getItem("Forecast13");
    let temperatura_forecast14 = localStorage.getItem("Forecast14");
    let temperatura_forecast15 = localStorage.getItem("Forecast15");
    let temperatura_forecast16 = localStorage.getItem("Forecast16");
    let temperatura_forecast17 = localStorage.getItem("Forecast17");
    let temperatura_forecast18 = localStorage.getItem("Forecast18");
    let temperatura_forecast19 = localStorage.getItem("Forecast19");

    var tempo_detalhado = document.querySelector('#tempo_detalhado');
    var tempo_detalhado2 = document.querySelector('#tempo_forecast1');
    var tempo_detalhado3 = document.querySelector('#tempo_forecast2');
    var tempo_detalhado4 = document.querySelector('#tempo_forecast3');
    var tempo_detalhado5 = document.querySelector('#tempo_forecast4');
    var tempo_detalhado6 = document.querySelector('#tempo_forecast4_1');
    var tempo_detalhado7 = document.querySelector('#tempo_forecast4_2');        //Id's dos campos da tabela
    var tempo_detalhado8 = document.querySelector('#tempo_forecast4_3');
    var tempo_detalhado9 = document.querySelector('#tempo_forecast5');
    var tempo_detalhado10 = document.querySelector('#tempo_forecast5_1');
    var tempo_detalhado11 = document.querySelector('#tempo_forecast5_2');
    var tempo_detalhado12 = document.querySelector('#tempo_forecast5_3');
    var tempo_detalhado13 = document.querySelector('#tempo_forecast6');
    var tempo_detalhado14 = document.querySelector('#tempo_forecast6_1');
    var tempo_detalhado15 = document.querySelector('#tempo_forecast6_2');
    var tempo_detalhado16 = document.querySelector('#tempo_forecast6_3');
    var tempo_detalhado17 = document.querySelector('#tempo_forecast7');
    var tempo_detalhado18 = document.querySelector('#tempo_forecast7_1');
    var tempo_detalhado19 = document.querySelector('#tempo_forecast7_2');
    var tempo_detalhado20 = document.querySelector('#tempo_forecast7_3');


    var conversao = (temperatura * 1.8) + 32;
    conversao = conversao.toFixed(2);
    var conversao2 = (temperatura_forecast * 1.8) + 32;
    conversao2 = conversao2.toFixed(2);
    var conversao3 = (temperatura_forecast2 * 1.8) + 32;
    conversao3 = conversao3.toFixed(2);
    var conversao4 = (temperatura_forecast3 * 1.8) + 32;
    conversao4 = conversao4.toFixed(2);
    var conversao5 = (temperatura_forecast4 * 1.8) + 32;        //Conta para converter de celsius para fahrenheit
    conversao5 = conversao5.toFixed(2);
    var conversao6 = (temperatura_forecast5 * 1.8) + 32;
    conversao6 = conversao6.toFixed(2);
    var conversao7 = (temperatura_forecast6 * 1.8) + 32;
    conversao7 = conversao7.toFixed(2);
    var conversao8 = (temperatura_forecast7 * 1.8) + 32;
    conversao8 = conversao8.toFixed(2);
    var conversao9 = (temperatura_forecast8 * 1.8) + 32;
    conversao9 = conversao9.toFixed(2);
    var conversao10 = (temperatura_forecast9 * 1.8) + 32;
    conversao10 = conversao10.toFixed(2);
    var conversao11 = (temperatura_forecast10 * 1.8) + 32;
    conversao11 = conversao11.toFixed(2);
    var conversao12 = (temperatura_forecast11 * 1.8) + 32;
    conversao12 = conversao12.toFixed(2);
    var conversao13 = (temperatura_forecast12 * 1.8) + 32;
    conversao13 = conversao13.toFixed(2);
    var conversao14 = (temperatura_forecast13 * 1.8) + 32;
    conversao14 = conversao14.toFixed(2);
    var conversao15 = (temperatura_forecast14 * 1.8) + 32;
    conversao15 = conversao15.toFixed(2);
    var conversao16 = (temperatura_forecast15 * 1.8) + 32;
    conversao16 = conversao16.toFixed(2);
    var conversao17 = (temperatura_forecast16 * 1.8) + 32;
    conversao17 = conversao17.toFixed(2);
    var conversao18 = (temperatura_forecast17 * 1.8) + 32;
    conversao18 = conversao18.toFixed(2);
    var conversao19 = (temperatura_forecast18 * 1.8) + 32;
    conversao19 = conversao19.toFixed(2);
    var conversao20 = (temperatura_forecast19 * 1.8) + 32;
    conversao20 = conversao20.toFixed(2);

    tempo_detalhado.innerHTML = conversao + " ºF";
    tempo_detalhado2.innerHTML = conversao2 + " ºF";
    tempo_detalhado3.innerHTML = conversao3 + " ºF";
    tempo_detalhado4.innerHTML = conversao4 + " ºF";
    tempo_detalhado5.innerHTML = conversao5 + " ºF";
    tempo_detalhado6.innerHTML = conversao6 + " ºF";
    tempo_detalhado7.innerHTML = conversao7 + " ºF";
    tempo_detalhado8.innerHTML = conversao8 + " ºF";
    tempo_detalhado9.innerHTML = conversao9 + " ºF";
    tempo_detalhado10.innerHTML = conversao10 + " ºF";
    tempo_detalhado11.innerHTML = conversao11 + " ºF";              //Passar os dados para a pagina WEB
    tempo_detalhado12.innerHTML = conversao12 + " ºF";
    tempo_detalhado13.innerHTML = conversao13 + " ºF";
    tempo_detalhado14.innerHTML = conversao14 + " ºF";
    tempo_detalhado15.innerHTML = conversao15 + " ºF";
    tempo_detalhado16.innerHTML = conversao16 + " ºF";
    tempo_detalhado17.innerHTML = conversao17 + " ºF";
    tempo_detalhado18.innerHTML = conversao18 + " ºF";
    tempo_detalhado19.innerHTML = conversao19 + " ºF";
    tempo_detalhado20.innerHTML = conversao20 + " ºF";
}

// Funcao para converter para celsius na pagina detalhes
function fahrenheit_para_celsius_detalhes() {
    let temperatura = localStorage.getItem("Valor");
    let temperatura_forecast = localStorage.getItem("Forecast1");
    let temperatura_forecast2 = localStorage.getItem("Forecast2");
    let temperatura_forecast3 = localStorage.getItem("Forecast3");
    let temperatura_forecast4 = localStorage.getItem("Forecast4");
    let temperatura_forecast5 = localStorage.getItem("Forecast5");
    let temperatura_forecast6 = localStorage.getItem("Forecast6");           //Recebe os valores no localstorage
    let temperatura_forecast7 = localStorage.getItem("Forecast7");
    let temperatura_forecast8 = localStorage.getItem("Forecast8");
    let temperatura_forecast9 = localStorage.getItem("Forecast9");
    let temperatura_forecast10 = localStorage.getItem("Forecast10");
    let temperatura_forecast11 = localStorage.getItem("Forecast11");
    let temperatura_forecast12 = localStorage.getItem("Forecast12");
    let temperatura_forecast13 = localStorage.getItem("Forecast13");
    let temperatura_forecast14 = localStorage.getItem("Forecast14");
    let temperatura_forecast15 = localStorage.getItem("Forecast15");
    let temperatura_forecast16 = localStorage.getItem("Forecast16");
    let temperatura_forecast17 = localStorage.getItem("Forecast17");
    let temperatura_forecast18 = localStorage.getItem("Forecast18");
    let temperatura_forecast19 = localStorage.getItem("Forecast19");

    var tempo_detalhado = document.querySelector('#tempo_detalhado');
    var tempo_detalhado2 = document.querySelector('#tempo_forecast1');
    var tempo_detalhado3 = document.querySelector('#tempo_forecast2');
    var tempo_detalhado4 = document.querySelector('#tempo_forecast3');
    var tempo_detalhado5 = document.querySelector('#tempo_forecast4');
    var tempo_detalhado6 = document.querySelector('#tempo_forecast4_1');
    var tempo_detalhado7 = document.querySelector('#tempo_forecast4_2');
    var tempo_detalhado8 = document.querySelector('#tempo_forecast4_3');
    var tempo_detalhado9 = document.querySelector('#tempo_forecast5');              //Id's dos campos da tabela
    var tempo_detalhado10 = document.querySelector('#tempo_forecast5_1');
    var tempo_detalhado11 = document.querySelector('#tempo_forecast5_2');
    var tempo_detalhado12 = document.querySelector('#tempo_forecast5_3');
    var tempo_detalhado13 = document.querySelector('#tempo_forecast6');
    var tempo_detalhado14 = document.querySelector('#tempo_forecast6_1');
    var tempo_detalhado15 = document.querySelector('#tempo_forecast6_2');
    var tempo_detalhado16 = document.querySelector('#tempo_forecast6_3');
    var tempo_detalhado17 = document.querySelector('#tempo_forecast7');
    var tempo_detalhado18 = document.querySelector('#tempo_forecast7_1');
    var tempo_detalhado19 = document.querySelector('#tempo_forecast7_2');
    var tempo_detalhado20 = document.querySelector('#tempo_forecast7_3');


    tempo_detalhado.innerHTML = temperatura + " ºC";
    tempo_detalhado2.innerHTML = temperatura_forecast + " ºC";
    tempo_detalhado3.innerHTML = temperatura_forecast2 + " ºC";
    tempo_detalhado4.innerHTML = temperatura_forecast3 + " ºC";
    tempo_detalhado5.innerHTML = temperatura_forecast4 + " ºC";
    tempo_detalhado6.innerHTML = temperatura_forecast5 + " ºC";
    tempo_detalhado7.innerHTML = temperatura_forecast6 + " ºC";
    tempo_detalhado8.innerHTML = temperatura_forecast7 + " ºC";
    tempo_detalhado9.innerHTML = temperatura_forecast8 + " ºC";
    tempo_detalhado10.innerHTML = temperatura_forecast9 + " ºC";            //Passar os dados para a pagina WEB
    tempo_detalhado11.innerHTML = temperatura_forecast10 + " ºC";
    tempo_detalhado12.innerHTML = temperatura_forecast11 + " ºC";
    tempo_detalhado13.innerHTML = temperatura_forecast12 + " ºC";
    tempo_detalhado14.innerHTML = temperatura_forecast13 + " ºC";
    tempo_detalhado15.innerHTML = temperatura_forecast14 + " ºC";
    tempo_detalhado16.innerHTML = temperatura_forecast15 + " ºC";
    tempo_detalhado17.innerHTML = temperatura_forecast16 + " ºC";
    tempo_detalhado18.innerHTML = temperatura_forecast17 + " ºC";
    tempo_detalhado19.innerHTML = temperatura_forecast18 + " ºC";
    tempo_detalhado20.innerHTML = temperatura_forecast19 + " ºC";
}