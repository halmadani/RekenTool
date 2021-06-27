
// input selecteren
inptAdd = document.querySelector(".Add");
// bitton selecteren
button =  document.querySelector(".addbtn"); 
// output selecteren
output =  document.querySelector(".x"); 






button.addEventListener("click", function(){
    output.textContent = inptAdd.value/10;

  inptAdd.value = "";
})






