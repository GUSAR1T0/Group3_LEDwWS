$(document).ready(function () {
    var autorefresh = $.ajax({
        type: 'GET',
        url: '/refresh',
        success: function (data) {
            if (data["state"] === "on") {
                $('input:radio[name="options"][value="on"]').click();
                $(".gradient-background").css({ "background": "linear-gradient(to top left, #138D75, #FCF3CF)" })
            } else if (data["state"] === "off") {
                $('input:radio[name="options"][value="off"]').click();
                $(".gradient-background").css({ "background": "linear-gradient(to top left, powderblue, pink)" })
            }
        }
    });
    setInterval(autorefresh, 1000);
});