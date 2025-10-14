$(document).ready(function() {
  $("#formulario").on("submit", function(event) {
    event.preventDefault(); // evita el envío automático del formulario

    // Limpiar errores previos
    $(".error").text("");
    $("input").removeClass("input-error"); // elimina el borde rojo anterior

    let valido = true;

    // Obtener valores
    const nombre = $("#nombre").val().trim();
    const apellido = $("#apellido").val().trim();
    const cedula = $("#cedula").val().trim();
    const email = $("#email").val().trim();
    const tyc = $("input[name='tyc']:checked").val();

    // Validar nombre
    if (nombre.length < 5) {
      $("#error-nombre").text("El nombre debe tener al menos 5 caracteres.");
      $("#nombre").addClass("input-error");
      valido = false;
    }

    // Validar apellido
    if (apellido.length < 5) {
      $("#error-apellido").text("El apellido debe tener al menos 5 caracteres.");
      $("#apellido").addClass("input-error");
      valido = false;
    }

    // Validar cédula (solo números, sin puntos ni comas)
    if (!/^\d+$/.test(cedula)) {
      $("#error-cedula").text("La cédula debe contener solo números (sin puntos ni comas).");
      $("#cedula").addClass("input-error");
      valido = false;
    }

    // Validar correo electrónico (estructura básica: texto@texto.ext)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#error-email").text("Ingrese un correo válido (ejemplo: nombre@dominio.com).");
      $("#email").addClass("input-error");
      valido = false;
    }

    // Validar términos y condiciones
    if (!tyc) {
      $("#error-tyc").text("Debe seleccionar una opción en términos y condiciones.");
      valido = false;
    }

    // Si todo está bien
    if (valido) {
      alert("Formulario enviado correctamente ✅");
      this.submit();
    }
  });

  // Escuchar cambios en los inputs para eliminar el error si se corrige
  $("input").on("input change", function() {
    if ($(this).val().trim() !== "") {
      $(this).removeClass("input-error");
      $(this).siblings(".error").text(""); // limpia el mensaje si aplica
    }
  });
});
