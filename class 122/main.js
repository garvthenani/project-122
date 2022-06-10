x = 0;
y = 0;
draw_circle =""
draw_rect =""

var SpeechRecognition = window.webkitspeechrecognition();

var recognition = new recognition();

function start(){
   document.getElementById("status").innerHTML = "system "
   recognition.start()
}
recognition.onresults() = function(event){
   console.log(event)
   if (content == "circle") 
   {
      x = Math.floor(math.random()  *900);
      y = Math.floor(math.random()  *600);
      document
    }
}


