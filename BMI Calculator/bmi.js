
// =====================*Calculate bmi button*===================
let calculateBtn = document.querySelector(".btn");
calculateBtn.addEventListener("click", () =>{
    calculate();
})


// ====================*BMI Calculation*=================
const calculate=() =>{
    let weights = document.getElementById("wt");
    let heights = document.getElementById("ht");
    let bmi = weights.value/(heights.value * heights.value);
    let bmiResult = document.querySelector(".output");
    
    if(bmi<= 18){
        bmiResult.innerHTML = "Your BMI is " + Math.round(bmi) + ", you are Kuposhit";
    }
    else if(bmi > 18 && bmi <= 25){
        bmiResult.innerHTML = "Your BMI is " + Math.round(bmi) + ", i.e., Normal";
    }
    else{
        bmiResult.innerHTML = "Your BMI is " + Math.round(bmi) + ", you are Overweight";
    }
} 

// ================*reset button*===============
let resetBtn = document.querySelector(".btn-reset");
resetBtn.addEventListener("click", ()=>{
    window.location.reload();
})