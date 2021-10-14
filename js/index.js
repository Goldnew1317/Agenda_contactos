function getcontactos(){
    var divContacto = document.getElementById("divContacto");
    fetch("http://raydelto.org/agenda.php").then(function(datos){
        return datos.json();
    }).then(function(listado){
        var cadenalistado = "";
        for(contacto of listado){
            cadenalistado += "-" + contacto.nombre + " " + contacto.apellido + " " + contacto.telefono + "</br>";
            divContacto.innerHTML = cadenalistado;
        }
    });
}


var button = document.getElementById('button')
var nom = document.getElementById("nom")
var last = document.getElementById("last")
var tel = document.getElementById("tel")


    button.addEventListener("click", () => {
        var newPost = {
            nombre: nom.value,    
            apellido: last.value,
            telefono: tel.value,   
        }
        
        fetch("http://raydelto.org/agenda.php", {
            method: 'POST',
            body: JSON.stringify(newPost),
        })
        nom.value = "";
        last.value = "";
        tel.value = "";
        alert("Contacto agregado")
        location.reload()
    });
