document.addEventListener("DOMContentLoaded", function() {
  var forms = document.querySelectorAll('form[data-netlify="true"]');

  if (!forms.length) return;

  window.dataLayer = window.dataLayer || [];

  forms.forEach(function(form) {
    form.addEventListener("submit", function() {
      var hiddenNameField = form.querySelector('input[name="form-name"]');
      var formName = form.getAttribute("name") || (hiddenNameField && hiddenNameField.value) || "unknown-form";

      window.dataLayer.push({
        event: "form_submit",
        form_name: formName,
        form_id: form.id || "",
        form_path: window.location.pathname
      });
    });
  });
});
