$(document).ready(function () {
    var totChecks = 0;
    $(".chkGroup").on("change", function () {
        if ($(this).prop("checked") == true) {
            if (totChecks >=
                2) { // Updated condition to check if it's greater than or equal to 2
                /*cancel your action*/
                console.log("too many checks!");
                $(this).prop("checked", false); // Uncheck the checkbox that exceeds the limit
                return false;
            }
            /*otherwise, proceed*/
            totChecks = totChecks + 1;
        } else {
            totChecks = totChecks - 1;
        }
    });
});