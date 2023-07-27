$(document).ready(function () {
    $(".chkGroup").on("change", function () {
        var inputField = $(this).siblings("input[type='text']");
        if ($(this).prop("checked")) {
            inputField.prop("disabled", false);
        } else {
            inputField.prop("disabled", true);
            inputField.val(""); // Clear the text when the checkbox is unchecked
        }
    });
});