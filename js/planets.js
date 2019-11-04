$(document).ready(function () {
    M.AutoInit();
});

$(".clickable").click(function () {
    let type = $(this).attr("data-type");
    let order = $(this).attr("data-order");
    fetch("/json/data.json")
        .then(response => response.json())
        .then(json => loadData( type == "star" ? json.star[order] : json.planets[order]));
});

function loadData(data) {
    $('.modal-content').animate({scrollTop:0},0);
    $("#name").html(data.name);
    $("#description").html(data.textFlow);
    $("#type").html( "Type: " + data.caracteristics[0].type);
    $("#age").html(data.caracteristics[1].timeTrivia);
}
