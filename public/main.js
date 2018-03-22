$(document).ready(function(){
    console.log("script linked")

    $.ajax({
        url: "/counter",
        method: "GET"
    }).then((response) => {
        console.log(response)
        $("#counter").text(response.counter)
    })
})