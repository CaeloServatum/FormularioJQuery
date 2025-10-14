$(document).ready(function() {
  $("#formulario").on("submit", function(event) {
    event.preventDefault(); 

    $(".error").text("");
    $("input").removeClass("input-error");

    let valido = true;

    const nombre = $("#nombre").val().trim();
    const apellido = $("#apellido").val().trim();
    const cedula = $("#cedula").val().trim();
    const email = $("#email").val().trim();
    const tyc = $("input[name='tyc']:checked").val();

    if (nombre.length < 5) {
      $("#error-nombre").text("El nombre debe tener al menos 5 caracteres.");
      $("#nombre").addClass("input-error");
      valido = false;
    }

    if (apellido.length < 5) {
      $("#error-apellido").text("El apellido debe tener al menos 5 caracteres.");
      $("#apellido").addClass("input-error");
      valido = false;
    }

    if (!/^\d+$/.test(cedula)) {
      $("#error-cedula").text("La cédula debe contener solo números (sin puntos ni comas).");
      $("#cedula").addClass("input-error");
      valido = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#error-email").text("Ingrese un correo válido (ejemplo: nombre@dominio.com).");
      $("#email").addClass("input-error");
      valido = false;
    }


    if (!tyc) {
      $("#error-tyc").text("Debe seleccionar una opción en términos y condiciones.");
      valido = false;
    }

    if (valido) {
      alert("Formulario enviado correctamente ✅");
      this.submit();
    }
  });

  $("input").on("input change", function() {
    if ($(this).val().trim() !== "") {
      $(this).removeClass("input-error");
      $(this).siblings(".error").text(""); 
    }
  });
});
