$('#buttons .btn').on('click', function (event) {
    var clicked = $(this).find('input').val()
    if (clicked === "off") {
        $.ajax({
            type: 'GET',
            url: "/?state=off",
            success: function(result) {
                $(".gradient-background").css({ "background": "linear-gradient(to top left, powderblue, pink)" })
            }
        })
    }
    if (clicked === "on") {
        $.ajax({
            type: 'GET',
            url: "/?state=on",
            success: function(result) {
                $(".gradient-background").css({ "background": "linear-gradient(to top left, #138D75, #FCF3CF)" })
            }
        })
    }
});
