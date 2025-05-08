let counter=0;
  
function updateCounter() {
  document.getElementById("number").innerHTML = counter;
}

function text(){
counter=0;
updateCounter() 


}
function button(){
counter++;
updateCounter() 
if(counter%100==0){
  alert("Mashallax")
  
  
  
  }

}


