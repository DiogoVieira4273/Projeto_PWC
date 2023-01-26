var value2 = localStorage.getItem("favorite1");


window.onload = function favorito_teste() {

    var temp1_fav = document.querySelector('#temp_fav1');
    var chuva1_fav = document.querySelector('#chuva_fav1');
    var vento1_fav = document.querySelector('#vento_fav1');
    var local1_fav = document.querySelector('#local_fav1');


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ value2 +'&appid=9007a57b713ded2cab57517001962537&units=metric')
        .then(response => response.json())
        .then(data => {

            var tempoValor_fav1 = data['main']['temp'];
            var nameValor_fav1 = data['name'];
            var chuvaValor_fav1 = data['main']['humidity'];
            var ventoValor_fav1 = data['wind']['speed'];
            var nuvemValor_fav1 = data['weather'][0]['icon'];

            local1_fav.innerHTML = nameValor_fav1;
            temp1_fav.innerHTML = tempoValor_fav1 + " ºC";
            chuva1_fav.innerHTML = chuvaValor_fav1 + "%";
            vento1_fav.innerHTML = ventoValor_fav1 + " m/s";
            document.getElementById("nuvens_fav1").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav1 + "@2x.png";

        })
        .catch(err => alert("Erro"));

}

 function remover_favorito1() {

    localStorage.removeItem("favorite1");
    alert("Removido");
    window.location.reload();
    
}
