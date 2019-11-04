$(document).ready(function () {
    (2000);
    $.ajax({
        type: "GET",
        url: "https://api.nasa.gov/planetary/apod?api_key=RcqfeXacsqWFLGfYlwqJyyVjHY1Wo7cvdvfNqPEF",
        success: function (response) {
            showPicOfDay(response);
        }
    });
});

function showPicOfDay(data) {
    $("#page").fadeIn(3000);
    $("#date").html(data.date);
    $("#title").html(data.title);
    $("#picture img").attr("src", data.url);
    $("#picture img").attr("alt", data.title)
    $("#description").html(data.explanation);

}