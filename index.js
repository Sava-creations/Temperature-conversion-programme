const textbox=document.getElementById("textbox");
const toF=document.getElementById("f");
const toC=document.getElementById("c");
const result=document.getElementById("result");


let temp;
function convert(){
    if(toF.checked){
        temp=Number(textbox.value);       // must get the value inside the function cauze it should assign a new value when calling the fucntion again and again
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+'°F' // to the nearest 1 decimal place
        // number+string=string
    }
    else if(toC.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*5/9
        result.textContent=temp.toFixed(1)+'°C'
    }
    else{
        result.textContent="You must select a unit before submitting";
    }
}