// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function valida() {
    //--- TODO: escrever o código em falta aqui...
    //--- Se a função retornar true o formulário será enviado; 
    //--- Se a função retornar false, o formulário não será enviado.
}

function limpa() {
    //--- TODO: escrever o código em falta aqui...
}

function setSelect() {
    //--- TODO: escrever o código em falta aqui...
}

function setImage() {
    //--- TODO: escrever o código em falta aqui...
}

// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();     //--- Devolverá 9
// new Date("2019-11-09").getMonth();    //--- Devolverá 11
// new Date("2019-11-09").getFullYear(); //--- Devolverá 2019
// 
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked
// htmlElement.appendChild(new Option('--- Escolha o Avatar', ''));      //--- adiciona um novo elemento a um select
// htmlElement.appendChild(new Option('Texto', 'Valor'));

// AVATARS
//---- Mulheres
// Loira -      https://cutt.ly/9eIsV5B
// Morena -     https://cutt.ly/jeIsBYP
// Muçulmana -  https://cutt.ly/reIsXOJ
// Negra -      https://cutt.ly/KeIsNga
//--- Homens
// Barba -      https://cutt.ly/5eIs6rL
// Bigode -     https://cutt.ly/AeIs6MU
// Loiro -      https://cutt.ly/4eIs4X0
// Negro -      https://cutt.ly/geIdez2