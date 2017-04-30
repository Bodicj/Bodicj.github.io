$(document).ready(function() {
    var click = 0;
    var CurrentLi = null;


    $(".input_field").keyup(function (evt) {
        console.log(evt.keyCode);
        var key = evt.keyCode;
        console.log($(".input_field")[0].value.length);
        $(".answers li").each(function () {
            if(key > 49 && key < 222 && key != 91 && key != 93 || key == 32){
                console.log('sdfdfs');
                if ($(".input_field")[0].value.length != 0) {
                    if ($(this)[0].innerText.indexOf($(".input_field")[0].value) != -1) {
                        $(this).css('display', 'block')
                    }
                    else {
                        $(this).css('display', 'none')
                    }
                }
                else {
                    $('li').css('display', 'none');
                }
            }
        })
    });
    $(".input_field").keydown(function (evt) {
        if(evt.keyCode == 40){
            if(CurrentLi != null && CurrentLi[0].id != $('li').last()[0].id) {
                CurrentLi.css('background-color', 'white');
                CurrentLi.css('color', 'black');
                CurrentLi = CurrentLi.next();
                CurrentLi.css('background-color', 'blue');
                CurrentLi.css('color', 'white');
                $('.input_field')[0].value = CurrentLi[0].innerText;
            }
            else{
                CurrentLi = $('li').first();
                $('li').last().css('background-color', 'white');
                $('li').last().css('color', 'black');
                CurrentLi.css('background-color', 'blue');
                CurrentLi.css('color', 'white');
                $('.input_field')[0].value = CurrentLi[0].innerText;
            }
            console.log(CurrentLi);
        }
        else if(evt.keyCode == 38){
            if(CurrentLi!=null && CurrentLi[0].id != $('li').first()[0].id) {
                CurrentLi.css('background-color', 'white');
                CurrentLi.css('color', 'black');
                CurrentLi = CurrentLi.prev();
                CurrentLi.css('background-color', 'blue');
                CurrentLi.css('color', 'white');
                $('.input_field')[0].value = CurrentLi[0].innerText;
            }
            else{
                CurrentLi = $('li').last();
                CurrentLi.css('background-color', 'blue');
                CurrentLi.css('color', 'white');
                $('.input_field')[0].value = CurrentLi[0].innerText;
                $('li').first().css('background-color', 'white');
                $('li').first().css('color', 'black');
            }
            console.log(CurrentLi);
        }
        else if(evt.keyCode == 13){
            $('li').each($('li').css('display', 'none'));
            $('p').trigger('click');
        }
    });

    $("p").click(function(){
        if(click == 0){
            $("li").css('display', 'block');
            click = 1;
        }else{
            $('li').css('display', 'none');
            click = 0;
        }
    })
});