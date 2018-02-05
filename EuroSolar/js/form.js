$(document).ready(function(){
    $( ".requests" ).click(function() {

        if ($('#private')[0].checked == true) {
            $('#entity_form').css("display", 'none');
            $('#private_form').css("display", "flex");
        }
        else {
            $('#private_form').css("display", "none");
            $('#entity_form').css("display", 'flex');
        }
    });
});
