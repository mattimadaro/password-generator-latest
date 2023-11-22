const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("pw-el-one")
let passwordElTwo = document.getElementById("pw-el-two")
let passwordBtn = document.getElementById("pw-btn")
let passwordLenghtEl = document.getElementById("pw-length-el")

// Generate Passwords
function generatePasswords(){
    let passwordOne = ""
    let passwordTwo = ""
        
    for (let i = 0; i < passwordLenghtEl.value; i++){
        let randomIndexOne = Math.floor(Math.random()*characters.length)
        let randomIndexTwo = Math.floor(Math.random()*characters.length)  
        passwordOne += characters[randomIndexOne]
        passwordTwo += characters[randomIndexTwo] 
    }
        passwordElOne.textContent = passwordOne
        passwordElTwo.textContent = passwordTwo
}

// Copy password to clipboard
// Copied from https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
function copyPwOne() {
    let range = document.createRange();
    range.selectNode(document.getElementById("pw-el-one"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Password Copied to Clipboard")
}

function copyPwTwo() {
    let range = document.createRange();
    range.selectNode(document.getElementById("pw-el-two"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Password Copied to Clipboard")
}