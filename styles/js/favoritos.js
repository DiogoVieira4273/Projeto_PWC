value = localStorage.getItem("favorite1");
value2 = localStorage.getItem("favorite2");
value3 = localStorage.getItem("favorite3");
value4 = localStorage.getItem("favorite4");
value5 = localStorage.getItem("favorite5");
value6 = localStorage.getItem("favorite6");
contador_detalhe = localStorage.getItem("contador_detalhe");
contador = localStorage.getItem("contador");
 
console.log(value);
var cidades = [];
cidades[0] = value;
cidades[1] = value2;
cidades[2] = value3;
cidades[3] = value4;
cidades[4] = value5;
cidades[5] = value6;
var value7 = [];
for (var i=6, j = 0; i < contador_detalhe; i++)
{
    value7[j] = localStorage.getItem("favoritedetalhe");
    cidades[i] = value7[j];
}
    

//window.onload = function favorito_teste() {

   // var temp1_fav = document.querySelector('#temp_fav1');
  // var chuva1_fav = document.querySelector('#chuva_fav1');
   // var vento1_fav = document.querySelector('#vento_fav1');
    //var local1_fav = document.querySelector('#local_fav1');
    //var temp2_fav = document.querySelector('#temp_fav2');
    //var chuva2_fav = document.querySelector('#chuva_fav2');
    //var vento2_fav = document.querySelector('#vento_fav2');
    //var local2_fav = document.querySelector('#local_fav2');
    //var temp3_fav = document.querySelector('#temp_fav3');
    //var chuva3_fav = document.querySelector('#chuva_fav3');
    //var vento3_fav = document.querySelector('#vento_fav3');
    //var local3_fav = document.querySelector('#local_fav3');
    //var temp4_fav = document.querySelector('#temp_fav4');
    //var chuva4_fav = document.querySelector('#chuva_fav4');
    //var vento4_fav = document.querySelector('#vento_fav4');
    //var local4_fav = document.querySelector('#local_fav4');
    //var temp5_fav = document.querySelector('#temp_fav5');
    //var chuva5_fav = document.querySelector('#chuva_fav5');
    //var vento5_fav = document.querySelector('#vento_fav5');
    //var local5_fav = document.querySelector('#local_fav5');
    //var temp6_fav = document.querySelector('#temp_fav6');
    //var chuva6_fav = document.querySelector('#chuva_fav6');
    //var vento6_fav = document.querySelector('#vento_fav6');
    //var local6_fav = document.querySelector('#local_fav6');

 
      //  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=9007a57b713ded2cab57517001962537&units=metric')
        //    .then(response => response.json())
          //  .then(data => {
            //    var tempoValor_fav1 = data['main']['temp'];
              //  var nameValor_fav1 = data['name'];
                //var chuvaValor_fav1 = data['main']['humidity'];
                //var ventoValor_fav1 = data['wind']['speed'];
                //var nuvemValor_fav1 = data['weather'][0]['icon'];

                //local1_fav.innerHTML = nameValor_fav1;
                //temp1_fav.innerHTML = tempoValor_fav1 + " ºC";
                //chuva1_fav.innerHTML = chuvaValor_fav1 + "%";
                //vento1_fav.innerHTML = ventoValor_fav1 + " m/s";
              //  document.getElementById("nuvens_fav1").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav1 + "@2x.png";

            //})
            //.catch();

            //fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value7 + '&appid=9007a57b713ded2cab57517001962537&units=metric')
            //.then(response => response.json())
            //.then(data => {
                //var tempoValor_fav2 = data['main']['temp'];
                //var nameValor_fav2 = data['name'];
              //  var chuvaValor_fav2 = data['main']['humidity'];
            //    var ventoValor_fav2 = data['wind']['speed'];
          //      var nuvemValor_fav2 = data['weather'][0]['icon'];

        //        local2_fav.innerHTML = nameValor_fav2;
      //          temp2_fav.innerHTML = tempoValor_fav2 + " ºC";
    //            chuva2_fav.innerHTML = chuvaValor_fav2 + "%";
  //              vento2_fav.innerHTML = ventoValor_fav2 + " m/s";
//                document.getElementById("nuvens_fav2").src = "http://openweathermap.org/img/wn/" + nuvemValor_fav2 + "@2x.png";

       //     })
     //       .catch();
   // }
    
    //localStorage.setItem("contador", contador);




window.onload = function faz_table() {
    var contador_detalhes_tabela = (parseInt(localStorage.getItem("contador_detalhe")) || 0);
    var contador_tabela = (parseInt(localStorage.getItem("contador")) || 0);
    var contador_sporting = contador_tabela + contador_detalhes_tabela;
    let table = document.getElementById("WEATHER_FAVORITOS");
    let linha = document.createElement("TR");
    var data = document.createElement("TD");   

    for (let i = 0; i < contador_sporting; i++) {       
                    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cidades[i]+"&appid=9007a57b713ded2cab57517001962537&units=metric")
                    .then(response => response.json())
                    .then(data => {
                        var tempo = data['main']['temp'];
                        var nome = data['name'];
                        var chuva = data['main']['humidity'];
                        var vento = data['wind']['speed'];
                        var nuvem = data['weather'][0]['icon'];
                        var array = [];
                        if(i == 0)
                        {
                             array = { nome :[nome, tempo, chuva, vento, nuvem]};
                             var arraystring = JSON.stringify(array);
                             var fs = require('fs');
                             fs.writeFile("data.json", arraystring, function(err, result) {
                                if(err) console.log('error', err);
                            });
                        }
                        else 
                            {
                                array.push([nome, tempo, chuva, vento, nuvem] );
                            }
                       
                            console.log(array);
                    });
                 
    }
};


function remover_favorito1() {

    localStorage.removeItem("favorite1");
    localStorage.removeItem("favorite2");
    localStorage.removeItem("favorite3");
    localStorage.removeItem("favorite4");
    localStorage.removeItem("favorite5");
    localStorage.removeItem("favorite6");
    localStorage.removeItem("favoritedetalhe");
    localStorage.removeItem("contador");
    localStorage.removeItem("contador_detalhes");
    alert("A cidade foi removida com sucesso!");
    window.location.reload();

}
