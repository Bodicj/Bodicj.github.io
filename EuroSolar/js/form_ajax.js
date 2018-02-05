function SendForm()
{
    if ($('#private')[0].checked) var type = $('#private_label')[0].innerText;
    if ($('#entity')[0].checked) var type = $('#entity_label')[0].innerText;
    if ($('#developer')[0].checked) var type = $('#developer_label')[0].innerText;

    if($('#private_form')[0].elements[0].value.length>0)
    {
        var data={
            "name" : $('#private_form')[0].elements[0].value,
            "phone" : $('#private_form')[0].elements[1].value,
            "type" : type,
        };

    }else {

        var data={
            "name" : $('#entity_form')[0].elements[0].value,
            "phone" : $('#entity_form')[0].elements[1].value,
            "company" : $('#entity_form')[0].elements[2].value,
            "type" : type,
        };
    };
    console.log(data);
    $.ajax({
        type: 'POST',
        url: '/',
        data: data,
    }).done(function() {
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
    //отмена действия по умолчанию для кнопки submit
   
}