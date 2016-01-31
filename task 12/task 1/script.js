$(document).ready(function() {
    var add_button = $('#add_skill');
    $(add_button).click(function(e){ 
        e.preventDefault();
            $('#form').append('<br><input type="text" name="skill"/>');
    });
});