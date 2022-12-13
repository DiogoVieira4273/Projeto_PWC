// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#WEATHER').DataTable();
});
function converter_graus()
{
     
}

function favorito() {
    var img = document.getElementById("star");
    if (img.style.visibility === "hidden") 
    {
        img.style.visibility = "visible";
    } 
    else 
    {
        img.style.visibility = "hidden";
    }
}