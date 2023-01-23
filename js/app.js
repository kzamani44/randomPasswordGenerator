const btn = document.getElementById("btn"); // Get button element
let passDisplay = document.getElementById("display"); 


/* Add event to the button to detect if its Clicked */
btn.addEventListener("click",() =>{

    let char = '0123456789abcdefghijklmnopqrstuvwxyz@#$%&!ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ranChar = [];

    // Loop through the Char String and pass random Characters
    // to the ranChar[] array
    for (let i = 0; i < 10; i++) {
        ranChar.push(char[Math.floor(Math.random()*char.length)])
    }

    // Display the random characters Generated
    passDisplay.innerText = ranChar.join('');
    
});

