window.onload = setSelect();

// Self-executing function
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


// function valida() {
//     //--- TODO: escrever o código em falta aqui...
//     //--- Se a função retornar true o formulário será enviado;
//     //--- Se a função retornar false, o formulário não será enviado.
//     // Example starter JavaScript for disabling form submissions if there are invalid fields
//
//
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
//
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }
//
//                 form.classList.add('was-validated')
//             }, false)
//         })
// }

function limpa() {
    //--- TODO: escrever o código em falta aqui...
    const form = document.getElementById("form_element");
    form.reset();
}

function setSelect() {
    //--- TODO: escrever o código em falta aqui...
    const selectField = document.getElementById("field_4");

    selectField.appendChild(new Option('Loira', 'Loira'));
    selectField.appendChild(new Option('Morena', 'Morena'));
    selectField.appendChild(new Option('Muçulmana', 'Muçulmana'));
    selectField.appendChild(new Option('Negra', 'Negra'));
    selectField.appendChild(new Option('Barba', 'Barba'));
    selectField.appendChild(new Option('Bigode', 'Bigode'));
    selectField.appendChild(new Option('Loiro', 'Loiro'));
    selectField.appendChild(new Option('Negro', 'Negro'));

}

function setImage() {
    //--- TODO: escrever o código em falta aqui...
    switch (event.target.value) {
        case "Loira":
            document.getElementById("avatar").value = "https://cutt.ly/9eIsV5B";
            document.getElementById("avatarImg").src = "https://cutt.ly/9eIsV5B";
            break;
        case "Morena":
            document.getElementById("avatar").value = "https://cutt.ly/jeIsBYP";
            document.getElementById("avatarImg").src = "https://cutt.ly/jeIsBYP";
            break;
        case "Muçulmana":
            document.getElementById("avatar").value = "https://cutt.ly/reIsXOJ";
            document.getElementById("avatarImg").src = "https://cutt.ly/reIsXOJ";
            break;
        case "Negra":
            document.getElementById("avatar").value = "https://cutt.ly/KeIsNga";
            document.getElementById("avatarImg").src = "https://cutt.ly/KeIsNga";
            break;
        case "Barba":
            document.getElementById("avatar").value = "https://cutt.ly/5eIs6rL";
            document.getElementById("avatarImg").src = "https://cutt.ly/5eIs6rL";
            break;
        case "Bigode":
            document.getElementById("avatar").value = "https://cutt.ly/AeIs6MU";
            document.getElementById("avatarImg").src = "https://cutt.ly/AeIs6MU";
            break;
        case "Loiro":
            document.getElementById("avatar").value = "https://cutt.ly/4eIs4X0";
            document.getElementById("avatarImg").src = "https://cutt.ly/4eIs4X0";
            break;
        case "Negro":
            document.getElementById("avatar").value = "https://cutt.ly/geIdez2";
            document.getElementById("avatarImg").src = "https://cutt.ly/geIdez2";
            break;
        default:
            document.getElementById("avatar").value = "";
            document.getElementById("avatarImg").src = "https://cutt.ly/geIdQJZ";
    }
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