var oAuth = "?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d";
var user = "mc-funk";

function search(query) {
    //do a search function here
}

$(document).ready(function() {
        $(".searchBtn").on('click', function(){
            getSearch($("#searchField").val());
        });

        $('#searchField').keyup(function(e){ //"e" is the keystroke being sent to system
            console.log("Keyup worked at all");
            if(e.keyCode == 13) //13 is "enter"
            {
                getSearch($("#searchField").val());
            }
        });

        function getSearch(query) {
            $("#searchField").val(''); //Clear search field after retrieving search term
            search(query); //execute search function on query
        }
function search(query) {
    $.ajax ({
        type: 'GET',
        url: "https://api.github.com/users/" + query + oAuth,
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
}

});