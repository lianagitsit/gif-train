$(document).ready(function(){
    console.log("display script linked")

    $.ajax({
        url: "/results",
        method: "GET"
    }).then((response) => {
        const parsedRes = JSON.parse(response)
        console.log(parsedRes)
        for (let i = 0; i < parsedRes.data.length; i++){
            const gifImg = $("<img>")
            $(gifImg).attr("src", parsedRes.data[i].images.fixed_height_small.url)
            $("#resultsDisplay").append(gifImg)
        }
    })
})