$( "#open-window" ).dblclick(function() {
    // $(".window").css({'left': "100px",
    //                   'top': "300px"
    //                  });
    $('#window-contact').show();
    $("#window-contact").data({'originalLeft': $("#window-contact").css('left'),
                      'origionalTop': $("#window-contact").css('top')
                     });
});


$( "#close-window" ).click(function() {
    $('#window-contact').hide();
    $("#window-contact").css({'left': $("#window-contact").data('originalLeft'),
                             'top': $("#window-contact").data('origionalTop')}
                             );
});


$( function() {
    $( "#window-contact " ).draggable({
        handle:"#handle",
        cancel: ".modalX",
        containment: '.container'
    });
});

