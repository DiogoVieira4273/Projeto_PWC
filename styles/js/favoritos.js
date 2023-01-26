var value = localStorage.getItem("favorite1");
var value2 = localStorage.getItem("favorite2");
var value3 = localStorage.getItem("favorite3");
var value4 = localStorage.getItem("favorite4");         //Recebe o nome das cidades pelo local storage
var value5 = localStorage.getItem("favorite5");
var value6 = localStorage.getItem("favorite6");
var value7 = localStorage.getItem("favoritedetalhe");


window.onload = function favoritos() {

    var temp1_fav = document.querySelector('#temp_fav1');
    var chuva1_fav = document.querySelector('#chuva_fav1');
    var vento1_fav = document.querySelector('#vento_fav1');
    var local1_fav = document.querySelector('#local_fav1');
    var temp2_fav = document.querySelector('#temp_fav2');
    var chuva2_fav = document.querySelector('#chuva_fav2');
    var vento2_fav = document.querySelector('#vento_fav2');
    var local2_fav = document.querySelector('#local_fav2');
    var temp3_fav = document.querySelector('#temp_fav3');
    var chuva3_fav = document.querySelector('#chuva_fav3');
    var vento3_fav = document.querySelector('#vento_fav3');
    var local3_fav = document.querySelector('#local_fav3');
    var temp4_fav = document.querySelector('#temp_fav4');           //Id's dos campos da tabela
    var chuva4_fav = document.querySelector('#chuva_fav4');
    var vento4_fav = document.querySelector('#vento_fav4');
    var local4_fav = document.querySelector('#local_fav4');
    var temp5_fav = document.querySelector('#temp_fav5');
    var chuva5_fav = document.querySelector('#chuva_fav5');
    var vento5_fav = document.querySelector('#vento_fav5');
    var local5_fav = document.querySelector('#local_fav5');
    var temp6_fav = document.querySelector('#temp_fav6');
    var chuva6_fav = document.querySelector('#chuva_fav6');
    var vento6_fav = document.querySelector('#vento_fav6');
    var local6_fav = document.querySelector('#local_fav6');
    var temp7_fav = document.querySelector('#temp_fav7');
    var chuva7_fav = document.querySelector('#chuva_fav7');
    var vento7_fav = document.querySelector('#vento_fav7');
    var local7_fav = document.querySelector('#local_fav7');


    if (value7 == value || value7 == value2 || value7 == value3 || value7 == value4 || value7 == value5 || value7 == value6) {
        if (value7 != null && (value7 == value || value7 == value2 || value7 == value3 || value7 == value4 || value7 == value5 || value7 == value6)) {  //Caso a cidade de pesquisa adicionada aos favoritos for igual a uma das estaticas ja adicionada, não é adicionada aos favoritos 
            alert("Esta cidade já está adicionada aos favoritos!!");
            value7 == null;
            localStorage.removeItem("favoritedetalhe");
        }

        if (value7 == value) {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
                .then(response => response.json())
                .then(data => {
                    var tempoValor_fav1 = data['main']['temp'];
                    var nameValor_fav1 = data['name'];
                    var chuvaValor_fav1 = data['main']['humidity'];     //Receber os dados vindo da API
                    var ventoValor_fav1 = data['wind']['speed'];
                    var nuvemValor_fav1 = data['weather'][0]['icon'];

                    local1_fav.innerHTML = nameValor_fav1;
                    temp1_fav.innerHTML = tempoValor_fav1 + " ºC";
                    chuva1_fav.innerHTML = chuvaValor_fav1 + "%";           //Passar os dados para a pagina WEB
                    vento1_fav.innerHTML = ventoValor_fav1 + " m/s";
                    document.getElementById("nuvens_fav1").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav1 + "@2x.png";
                    if (tempoValor_fav1 != null)
                        ocalStorage.setItem("Valor1", tempoValor_fav1);                                                                                     //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
                })
                .catch();
        }
        else
            if (value7 == value2) {
                fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value2 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
                    .then(response => response.json())
                    .then(data => {
                        var tempoValor_fav2 = data['main']['temp'];
                        var nameValor_fav2 = data['name'];
                        var chuvaValor_fav2 = data['main']['humidity'];     //Receber os dados vindo da API
                        var ventoValor_fav2 = data['wind']['speed'];
                        var nuvemValor_fav2 = data['weather'][0]['icon'];

                        local2_fav.innerHTML = nameValor_fav2;
                        temp2_fav.innerHTML = tempoValor_fav2 + " ºC";
                        chuva2_fav.innerHTML = chuvaValor_fav2 + "%";       //Passar os dados para a pagina WEB
                        vento2_fav.innerHTML = ventoValor_fav2 + " m/s";
                        document.getElementById("nuvens_fav2").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav2 + "@2x.png";
                        if (tempoValor_fav2 != null)
                            localStorage.setItem("Valor2", tempoValor_fav2);                                                                                                    //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
                    })
                    .catch();
            }
            else
                if (value7 == value3) {
                    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value3 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
                        .then(response => response.json())
                        .then(data => {
                            var tempoValor_fav3 = data['main']['temp'];
                            var nameValor_fav3 = data['name'];
                            var chuvaValor_fav3 = data['main']['humidity'];     //Receber os dados vindo da API
                            var ventoValor_fav3 = data['wind']['speed'];
                            var nuvemValor_fav3 = data['weather'][0]['icon'];

                            local3_fav.innerHTML = nameValor_fav3;
                            temp3_fav.innerHTML = tempoValor_fav3 + " ºC";
                            chuva3_fav.innerHTML = chuvaValor_fav3 + "%";       //Passar os dados para a pagina WEB
                            vento3_fav.innerHTML = ventoValor_fav3 + " m/s";
                            document.getElementById("nuvens_fav3").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav3 + "@2x.png";
                            if (tempoValor_fav3 != null)
                                localStorage.setItem("Valor3", tempoValor_fav3);                                                                                                //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
                        })
                        .catch();
                }
                else
                    if (value7 == value4) {
                        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value4 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
                            .then(response => response.json())
                            .then(data => {
                                var tempoValor_fav4 = data['main']['temp'];
                                var nameValor_fav4 = data['name'];
                                var chuvaValor_fav4 = data['main']['humidity'];     //Receber os dados vindo da API
                                var ventoValor_fav4 = data['wind']['speed'];
                                var nuvemValor_fav4 = data['weather'][0]['icon'];

                                local4_fav.innerHTML = nameValor_fav4;
                                temp4_fav.innerHTML = tempoValor_fav4 + " ºC";
                                chuva4_fav.innerHTML = chuvaValor_fav4 + "%";       //Passar os dados para a pagina WEB
                                vento4_fav.innerHTML = ventoValor_fav4 + " m/s";
                                document.getElementById("nuvens_fav4").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav4 + "@2x.png";
                                if (tempoValor_fav4 != null)
                                    localStorage.setItem("Valor4", tempoValor_fav4);                                                                                            //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
                            })
                            .catch();
                    }
                    else
                        if (value7 == value5) {
                            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value5 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
                                .then(response => response.json())
                                .then(data => {
                                    var tempoValor_fav5 = data['main']['temp'];
                                    var nameValor_fav5 = data['name'];
                                    var chuvaValor_fav5 = data['main']['humidity'];     //Receber os dados vindo da API
                                    var ventoValor_fav5 = data['wind']['speed'];
                                    var nuvemValor_fav5 = data['weather'][0]['icon'];

                                    local5_fav.innerHTML = nameValor_fav5;
                                    temp5_fav.innerHTML = tempoValor_fav5 + " ºC";
                                    chuva5_fav.innerHTML = chuvaValor_fav5 + "%";       //Passar os dados para a pagina WEB
                                    vento5_fav.innerHTML = ventoValor_fav5 + " m/s";
                                    document.getElementById("nuvens_fav5").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav5 + "@2x.png";
                                    if (tempoValor_fav5 != null)
                                        localStorage.setItem("Valor5", tempoValor_fav5);                                                                                        //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
                                })
                                .catch();
                        }
                        else
                            if (value7 == value6) {
                                fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value6 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
                                    .then(response => response.json())
                                    .then(data => {
                                        var tempoValor_fav6 = data['main']['temp'];
                                        var nameValor_fav6 = data['name'];
                                        var chuvaValor_fav6 = data['main']['humidity'];     //Receber os dados vindo da API
                                        var ventoValor_fav6 = data['wind']['speed'];
                                        var nuvemValor_fav6 = data['weather'][0]['icon'];

                                        local6_fav.innerHTML = nameValor_fav6;
                                        temp6_fav.innerHTML = tempoValor_fav6 + " ºC";
                                        chuva6_fav.innerHTML = chuvaValor_fav6 + "%";       //Passar os dados para a pagina WEB
                                        vento6_fav.innerHTML = ventoValor_fav6 + " m/s";
                                        document.getElementById("nuvens_fav6").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav6 + "@2x.png";
                                        if (tempoValor_fav6 != null)
                                            localStorage.setItem("Valor6", tempoValor_fav6);                                                                                    //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
                                    })
                                    .catch();
                            }

    }
    else {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value7 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            .then(response => response.json())
            .then(data => {
                var tempoValor_fav7 = data['main']['temp'];
                var nameValor_fav7 = data['name'];
                var chuvaValor_fav7 = data['main']['humidity'];     //Receber os dados vindo da API
                var ventoValor_fav7 = data['wind']['speed'];
                var nuvemValor_fav7 = data['weather'][0]['icon'];

                local7_fav.innerHTML = nameValor_fav7;
                temp7_fav.innerHTML = tempoValor_fav7 + " ºC";
                chuva7_fav.innerHTML = chuvaValor_fav7 + "%";       //Passar os dados para a pagina WEB
                vento7_fav.innerHTML = ventoValor_fav7 + " m/s";
                document.getElementById("nuvens_fav7").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav7 + "@2x.png";
                if (tempoValor_fav7 != null)
                    localStorage.setItem("Valor7", tempoValor_fav7);
            })
            .catch();
    }

    //Buscar as informacao na API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor_fav1 = data['main']['temp'];
            var nameValor_fav1 = data['name'];
            var chuvaValor_fav1 = data['main']['humidity'];     //Receber os dados vindo da API
            var ventoValor_fav1 = data['wind']['speed'];
            var nuvemValor_fav1 = data['weather'][0]['icon'];

            local1_fav.innerHTML = nameValor_fav1;
            temp1_fav.innerHTML = tempoValor_fav1 + " ºC";
            chuva1_fav.innerHTML = chuvaValor_fav1 + "%";       //Passar os dados para a pagina WEB
            vento1_fav.innerHTML = ventoValor_fav1 + " m/s";
            document.getElementById("nuvens_fav1").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav1 + "@2x.png";
            if (tempoValor_fav1 != null)
                localStorage.setItem("Valor1", tempoValor_fav1);
        })
        .catch();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value2 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor_fav2 = data['main']['temp'];
            var nameValor_fav2 = data['name'];
            var chuvaValor_fav2 = data['main']['humidity'];     //Receber os dados vindo da API
            var ventoValor_fav2 = data['wind']['speed'];
            var nuvemValor_fav2 = data['weather'][0]['icon'];

            local2_fav.innerHTML = nameValor_fav2;
            temp2_fav.innerHTML = tempoValor_fav2 + " ºC";
            chuva2_fav.innerHTML = chuvaValor_fav2 + "%";       //Passar os dados para a pagina WEB
            vento2_fav.innerHTML = ventoValor_fav2 + " m/s";
            document.getElementById("nuvens_fav2").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav2 + "@2x.png";
            if (tempoValor_fav2 != null)
                localStorage.setItem("Valor2", tempoValor_fav2);                                                                                //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
        })
        .catch();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value3 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor_fav3 = data['main']['temp'];
            var nameValor_fav3 = data['name'];
            var chuvaValor_fav3 = data['main']['humidity'];     //Receber os dados vindo da API
            var ventoValor_fav3 = data['wind']['speed'];
            var nuvemValor_fav3 = data['weather'][0]['icon'];

            local3_fav.innerHTML = nameValor_fav3;
            temp3_fav.innerHTML = tempoValor_fav3 + " ºC";
            chuva3_fav.innerHTML = chuvaValor_fav3 + "%";       //Passar os dados para a pagina WEB
            vento3_fav.innerHTML = ventoValor_fav3 + " m/s";
            document.getElementById("nuvens_fav3").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav3 + "@2x.png";
            if (tempoValor_fav3 != null)
                localStorage.setItem("Valor3", tempoValor_fav3);                                                                               //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
        })
        .catch();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value4 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor_fav4 = data['main']['temp'];
            var nameValor_fav4 = data['name'];
            var chuvaValor_fav4 = data['main']['humidity'];     //Receber os dados vindo da API
            var ventoValor_fav4 = data['wind']['speed'];
            var nuvemValor_fav4 = data['weather'][0]['icon'];

            local4_fav.innerHTML = nameValor_fav4;
            temp4_fav.innerHTML = tempoValor_fav4 + " ºC";
            chuva4_fav.innerHTML = chuvaValor_fav4 + "%";       //Passar os dados para a pagina WEB
            vento4_fav.innerHTML = ventoValor_fav4 + " m/s";
            document.getElementById("nuvens_fav4").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav4 + "@2x.png";
            if (tempoValor_fav4 != null)
                localStorage.setItem("Valor4", tempoValor_fav4);                                                                                //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
        })
        .catch();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value5 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor_fav5 = data['main']['temp'];
            var nameValor_fav5 = data['name'];
            var chuvaValor_fav5 = data['main']['humidity'];     //Receber os dados vindo da API
            var ventoValor_fav5 = data['wind']['speed'];
            var nuvemValor_fav5 = data['weather'][0]['icon'];

            local5_fav.innerHTML = nameValor_fav5;
            temp5_fav.innerHTML = tempoValor_fav5 + " ºC";
            chuva5_fav.innerHTML = chuvaValor_fav5 + "%";       //Passar os dados para a pagina WEB
            vento5_fav.innerHTML = ventoValor_fav5 + " m/s";
            document.getElementById("nuvens_fav5").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav5 + "@2x.png";
            if (tempoValor_fav5 != null)
                localStorage.setItem("Valor5", tempoValor_fav5);                                                                                //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
        })
        .catch();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value6 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempoValor_fav6 = data['main']['temp'];
            var nameValor_fav6 = data['name'];
            var ventoValor_fav6 = data['wind']['speed'];        //Receber os dados vindo da API
            var nuvemValor_fav6 = data['weather'][0]['icon'];
            var chuvaValor_fav6 = data['main']['humidity'];

            local6_fav.innerHTML = nameValor_fav6;
            temp6_fav.innerHTML = tempoValor_fav6 + " ºC";
            chuva6_fav.innerHTML = chuvaValor_fav6 + "%";       //Passar os dados para a pagina WEB
            vento6_fav.innerHTML = ventoValor_fav6 + " m/s";
            document.getElementById("nuvens_fav6").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav6 + "@2x.png";
            if (tempoValor_fav6 != null)
                localStorage.setItem("Valor6", tempoValor_fav6);                                                                                //Guarda na localstorage ao valor obtido para uso na conversão para metrico ou imperial
        })
        .catch();
}

function remover_favorito1() {

    localStorage.removeItem("favorite1");
    localStorage.removeItem("Valor1");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();

}

function remover_favorito2() {

    localStorage.removeItem("favorite2");
    localStorage.removeItem("Valor2");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();

}

function remover_favorito3() {
    localStorage.removeItem("favorite3");
    localStorage.removeItem("Valor3");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();

}

function remover_favorito4() {
    localStorage.removeItem("favorite4");
    localStorage.removeItem("Valor4");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();

}

function remover_favorito5() {

    localStorage.removeItem("favorite5");
    localStorage.removeItem("Valor5");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();

}

function remover_favorito6() {
    localStorage.removeItem("favorite6");
    localStorage.removeItem("Valor6");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();

}

function remover_favorito7() {
    localStorage.removeItem("favoritedetalhe");
    localStorage.removeItem("Valor7");
    alert("A cidade foi removida com sucesso!");        //Remove favoritos, retira do local storage e recarrega a página
    window.location.reload();
}

// Funcao para converter para fahrenheit na pagina favoritos
function celsius_para_fahrenheit_favoritos() {
    let temperatura_fav = localStorage.getItem("Valor1");
    let temperatura_fav2 = localStorage.getItem("Valor2");
    let temperatura_fav3 = localStorage.getItem("Valor3");
    let temperatura_fav4 = localStorage.getItem("Valor4");
    let temperatura_fav5 = localStorage.getItem("Valor5");      //Recebe os valores no localstorage
    let temperatura_fav6 = localStorage.getItem("Valor6");
    let temperatura_fav7 = localStorage.getItem("Valor7");

    let temp_fav1 = document.querySelector("#temp_fav1");
    let temp_fav2 = document.querySelector("#temp_fav2");
    let temp_fav3 = document.querySelector("#temp_fav3");
    let temp_fav4 = document.querySelector("#temp_fav4");       //Id's dos campos da tabela
    let temp_fav5 = document.querySelector("#temp_fav5");
    let temp_fav6 = document.querySelector("#temp_fav6");
    let temp_fav7 = document.querySelector("#temp_fav7");

    if (temperatura_fav != null) {
        var conversao = (temperatura_fav * 1.8) + 32;
        conversao = conversao.toFixed(2);                               //Se o dado obtido não é null, é feita a conversão com .2 de casas decimais
        temp_fav1.innerHTML = conversao + " ºF";
    }
    if (temperatura_fav2 != null) {
        var conversao2 = (temperatura_fav2 * 1.8) + 32;
        conversao2 = conversao2.toFixed(2);
        temp_fav2.innerHTML = conversao2 + " ºF";
    }
    if (temperatura_fav3 != null) {
        var conversao3 = (temperatura_fav3 * 1.8) + 32;
        conversao3 = conversao3.toFixed(2);
        temp_fav3.innerHTML = conversao3 + " ºF";
    }
    if (temperatura_fav4 != null) {
        var conversao4 = (temperatura_fav4 * 1.8) + 32;
        conversao4 = conversao4.toFixed(2);
        temp_fav4.innerHTML = conversao4 + " ºF";
    }
    if (temperatura_fav5 != null) {
        var conversao5 = (temperatura_fav5 * 1.8) + 32;
        conversao5 = conversao5.toFixed(2);
        temp_fav5.innerHTML = conversao5 + " ºF";
    }
    if (temperatura_fav6 != null) {
        var conversao6 = (temperatura_fav6 * 1.8) + 32;
        conversao6 = conversao6.toFixed(2);
        temp_fav6.innerHTML = conversao6 + " ºF";
    }
    if (temperatura_fav7 != null) {
        var conversao7 = (temperatura_fav7 * 1.8) + 32;
        conversao7 = conversao7.toFixed(2);
        temp_fav7.innerHTML = conversao7 + " ºF";
    }
}

// Funcao para converter para celsius na pagina favoritos
function fahrenheit_para_celsius_favoritos() {
    let temperatura_fav = localStorage.getItem("Valor1");
    let temperatura_fav2 = localStorage.getItem("Valor2");
    let temperatura_fav3 = localStorage.getItem("Valor3");
    let temperatura_fav4 = localStorage.getItem("Valor4");                      //Recebe os valores no localstorage
    let temperatura_fav5 = localStorage.getItem("Valor5");
    let temperatura_fav6 = localStorage.getItem("Valor6");
    let temperatura_fav7 = localStorage.getItem("Valor7");

    let temp_fav1 = document.querySelector("#temp_fav1");
    let temp_fav2 = document.querySelector("#temp_fav2");
    let temp_fav3 = document.querySelector("#temp_fav3");
    let temp_fav4 = document.querySelector("#temp_fav4");                    //Id's dos campos da tabela
    let temp_fav5 = document.querySelector("#temp_fav5");
    let temp_fav6 = document.querySelector("#temp_fav6");
    let temp_fav7 = document.querySelector("#temp_fav7");

    if (temperatura_fav != null)
        temp_fav1.innerHTML = temperatura_fav + " ºC";
    if (temperatura_fav2 != null)
        temp_fav2.innerHTML = temperatura_fav2 + " ºC";
    if (temperatura_fav3 != null)
        temp_fav3.innerHTML = temperatura_fav3 + " ºC";                             //Se o dado obito não é null, é obitdo o valor obtido inicialmente
    if (temperatura_fav4 != null)
        temp_fav4.innerHTML = temperatura_fav4 + " ºC";
    if (temperatura_fav5 != null)
        temp_fav5.innerHTML = temperatura_fav5 + " ºC";
    if (temperatura_fav6 != null)
        temp_fav6.innerHTML = temperatura_fav6 + " ºC";
    if (temperatura_fav7 != null)
        temp_fav7.innerHTML = temperatura_fav7 + " ºC";

}