let btns = document.querySelectorAll(".bn");
let inputplate = document.querySelector(".inpt");

let result = "";

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

        if(e.target.innerHTML=='='){

            if(result==""){
                result="";
                inputplate.value=result;
            }

            else{
                result=eval(result);
                inputplate.value=result;
            }

        }
        else if(e.target.innerHTML=='C' || e.target.innerHTML=='RESET'){
            result="";
            inputplate.value=result;
        }
        else if(e.target.innerHTML=='x'){
            result+='*';
            inputplate.value=result;
        }
        else{
            result = result + (e.target.innerHTML);
            inputplate.value=result;
        }
    })
})