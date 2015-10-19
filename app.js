var sequence = []
var randomizer = function(){
    sequence.push(Math.floor(Math.random()*4)+1);
}

var fillSequence = function(){
    randomizer();
    console.log(sequence);     
}

var playSequence = function(){
    for(var i=0; i < sequence.length; i++){
            if(sequence[i]===1){
            $("#green").css({ "background-color": "#ADEBAD" })
            setTimeout(function() {
                $("#green").css({ "background-color": "#33CC33" })
              }, 500)
            window.setInterval(function(i){i+=1}, 500)
        }
        else if(sequence[i]===2){
            $("#red").css({ "background-color": "#FFB2B2" })
            setTimeout(function() {
                $("#red").css({ "background-color": "#FF0000" })
              }, 500)
            window.setInterval(function(i){i+=1}, 500)
        }
        else if(sequence[i]===3){
            $("#yellow").css({ "background-color": "#FFFFB2" })
            setTimeout(function() {
                $("#yellow").css({ "background-color": "#FFFF00" })
              }, 500)
            window.setInterval(function(i){i+=1}, 500)
        }
        else if(sequence[i]===4){
            $("#blue").css({ "background-color": "#B2D1FF" })
            setTimeout(function() {
                $("#blue").css({ "background-color": "#0066FF" })
              }, 500)
            window.setInterval(function(i){i+=1}, 500)
        } 
    }  
}

$('document').ready(function(){
    $('button').on("click", function(){
        fillSequence();
        playSequence();
    })
})



