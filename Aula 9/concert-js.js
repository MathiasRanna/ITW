const form = document.getElementById("mainForm");
const checkboxes = document.getElementsByName("ticket-class");
let checkboxCount = 0;
let ticketsValue = 0;


$(document).ready(function () {
    form.addEventListener('submit', function (event) {

        // Count how many checkboxes have been checked
        checkboxes.forEach(function (checkbox) {
            checkboxCount += checkbox.checked ? 1 : 0;
        })

        // Validate checkboxes depending on how many are checked
        if (checkboxCount < 2) {
            checkboxes.forEach(function (checkbox) {
                checkbox.required = true;
            })
        } else {
            checkboxes.forEach(function (checkbox) {
                checkbox.required = false;
            })
        }

        // check main validation of forms
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    })
})

$('input[type=checkbox]').change(function (event) {
    if (event.target.checked) {
        ticketsValue += parseInt(event.target.value);
    } else {
        ticketsValue -= parseInt(event.target.value);
    }

    if (ticketsValue === 0) {
        $('#totalValue').val("");
    }
    $('#totalValue').val(ticketsValue.toString() + "€");
})

