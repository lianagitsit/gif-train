$(document).ready(function(){
    console.log("welcome script linked")

    $.ajax({
        url: "/getName",
        method: "GET"
    }).then((response) => {
        console.log("response received")
        console.log(response)
        $("#name").text(response.name)
    })
})