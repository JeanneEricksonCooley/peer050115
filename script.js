var apiKey =

$(document).ready(function() {
    $.ajax ({
        type: 'GET',
        url: "https://api.github.com/users/mc-funk",
        crossDomain: true,
        dataType: 'json',
        complete: function(data) {
            console.log('ajax complete');
        },
        success: function(result) {
            console.log(result);
        },
        error: function(xhr, status) {
            console.log("There was an error: " + status);
        }
    });
});