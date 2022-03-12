
// sochik
let minus = document.querySelector(".minus");
let number = document.querySelector(".numbers");
let plus = document.querySelector(".plus");
let concetWallet = document.querySelector(".concet_wallet");
let a = 1;
concetWallet.onclick = () =>{
    a = 1;
    number.innerHTML = a;
    }
minus.onclick = () =>{
    if (a > 1 ){
        a-=1;
        number.innerHTML = a;
    }
    else if (a = 1){
        a = 99;
        number.innerHTML = a;
    }

}
plus.onclick = () =>{
    if (a < 99 ){
        a+=1;
        number.innerHTML = a;
    }
    else if ( a == 99){
        a = 1;
        number.innerHTML = a;
    }
    }
    // slider move ment
    let nextBtn = document.querySelector(".img_next");
    let backBtn = document.querySelector(".img_back");
    let boxSlider = document.querySelector(".sliders_img");
    let b = 0;
    nextBtn.onclick = () =>{
        if ( b == 8800){
            b = 8800;
        }
        else {
            b +=400;
            boxSlider.style.right = b + "px";
            console.log(b)
        }
    }

    backBtn.onclick = () =>{
        if ( b == 0){
            b = 0;
        }
        else {
           b -=400;
        boxSlider.style.right = b + "px";
        console.log(b) 
        }
    }
    // footer input clear
    let input = document.querySelector(".email_address");
    let btnInput = document.querySelector(".btn_input");
    input.onclick = () =>{
        input.value = "";
    }
    btnInput.onfocus = () =>{
        input.value = "";
    }