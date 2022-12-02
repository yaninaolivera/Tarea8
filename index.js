function validar(e) {
    e.preventDefault()
    $("input").removeClass("is-valid is-invalid")
    $("select").removeClass("is-valid is-invalid")
    let form_valido = true

    let exp_first_name = /^([A-Za-zñÑÁÉÍÓÚáéíóú ]){0,100}$/
    if (exp_first_name.test($("#first_name").val()) && $("#first_name").val() !== "") {
        $("#first_name").addClass("is-valid")
    } else {
        $("#first_name").addClass("is-invalid")
        form_valido = false
    }

    let exp_last_name = /^([A-Za-zñÑÁÉÍÓÚáéíóú ]){0,100}$/
    if (exp_last_name.test($("#last_name").val()) && $("#last_name").val() !== "") {
        $("#last_name").addClass("is-valid")
    } else {
        $("#last_name").addClass("is-invalid")
        form_valido = false
    }

    let exp_email_address = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (exp_email_address.test($("#email_address").val())) {
        $("#email_address").addClass("is-valid")
    } else {
        $("#email_address").addClass("is-invalid")
        form_valido = false
    }

    if ($("#gender").val() !== "") {
        $("#gender").addClass("is-valid")
    } else {
        $("#gender").addClass("is-invalid")
        form_valido = false
    }

    if ($("#birth_date").val() !== "") {
        $("#birth_date").addClass("is-valid")
    } else {
        $("#birth_date").addClass("is-invalid")
        form_valido = false
    }

    let exp_phone = /^9\d{0,8}$/;
    if (exp_phone.test($("#phone").val())) {
        $("#phone").addClass("is-valid")
    } else {
        $("#phone").addClass("is-invalid")
        form_valido = false
    }

    if (form_valido == true) {
        alert(`Los datos del cliente son: \nNombre: ${$("#first_name").val()} \nApellido: ${$("#last_name").val()} \nCorreo: ${$("#email_address").val()} \nGénero: ${$("#gender").val()} \nFecha Nacimiento: ${$("#birth_date").val()} \nCelular: ${$("#phone").val()}`) 
    }
}
