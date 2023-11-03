const unitSelect = document.getElementById('temp_diff');
const tempInp    = document.getElementById('temp');
const resultBox  = document.getElementById('result_box')
const calculateTemp=()=>{

    const valueTemp = tempInp.value
    const valueUnit = unitSelect.value
    var result;

    if(valueTemp){ 

        if (valueUnit =='fah'){
            result = ((valueTemp-32)*(5/9)).toFixed(2)
            resultBox.innerHTML= `= ${result} °Celsius`

        }

        else{
            result = ((valueTemp*1.8)+32).toFixed(2);
            resultBox.innerHTML= `= ${result} °Fahrenheit `
        }
    }

    else{
        resultBox.innerHTML= 'Enter the value to calculate'
    }
}

unitSelect.addEventListener('change',()=>{
    resultBox.innerHTML=''
})
tempInp.addEventListener('change',()=>{
    resultBox.innerHTML=''
})


// all of the timeout APIs will be called immediately and their respective callback functions will be made in
// web browser which will be sent in task queue one by one
const therm= document.querySelector('.therm');


loading();
setInterval(loading,5000)

function loading(){

//---------------------rasiing---------------// 
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-empty fa-2xl" style="color:white;" ></i>';

},500)
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-quarter fa-2xl" style="color:#fce303;" ></i>';

},1000)
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-half fa-2xl" style="color:#fca203;" ></i>';

},1500)
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-three-quarters fa-2xl" style="color:#fc5603;" ></i> ';
 
},2000)
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-full fa-2xl" style="color:#fc0303"></i>';

},2500)

//--------------------falling---------------//
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-full fa-2xl" style="color:#fc0303"></i>';
    
},3000)    
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-three-quarters fa-2xl" style="color:#fc5603;"></i>';

},3500)
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-half fa-2xl" style="color:#fca103;"></i>';

},4000)
setTimeout(()=>{ 
    therm.innerHTML='<i class="fa-solid fa-temperature-quarter fa-2xl" style="color:#fce303;" ></i>';

},4500)
setTimeout(()=>{
    therm.innerHTML='<i class="fa-solid fa-temperature-empty fa-2xl" style="color:white;"></i>';

},5000)


}    

