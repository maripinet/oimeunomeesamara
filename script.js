<form id="numero">
    <input type="text" id="numero">
    <input type="submit" value="Enviar">
</form>

var form = document.getElementById('fname');
var campo = document.getElementById('lname');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);

    // impede o envio do form
    e.preventDefault();
});