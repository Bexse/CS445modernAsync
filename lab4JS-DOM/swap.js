

     let swap = document.getElementById("swap");
     swap.addEventListener("click", swapPictures);
    function swapPictures(){
        let val1 = document.getElementById("img1");
        let val2 = document.getElementById("img2");
        val1.src = "img2.jpeg";
        val2.src = "img1.jpeg";
 
    }

    let btn =  document.getElementById("btn");
    btn.addEventListener("click", sum);

    function sum(){
        let num1 = document.getElementById("num1");
        let num2 = document.getElementById("num2");
        let output = document.getElementById("result");
        let x = num1.value, y = num2.value;
        output.value = Number(x) + Number(y);
        num1.value = "";
        num2.value = "";
   
    }