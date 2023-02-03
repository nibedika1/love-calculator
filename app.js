// console.log("Hello World");
// alert("Virus hoss ta!!");
//  prompt("What is your name??"); //input ni lina milcha
  //variable ma store hune
// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = "Hello from you";
// let response = prompt("What is your name?");
// alert("Hello "+ response);

let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let singlePeople=['rupesh', 'shyam', 'hari'];

function calculate(){
    let name1 = yourName.value;
    let name2 = theirName.value;
    if(name1.length==0  || name2.length==0){
        // console.log("Please enter the name");
        output.innerText = "Oops! You forgot to enter your name";
    }
    else{
        let lovePercent = parseInt(Math.random() * 100);
        console.log(name1, name2);
        if((name1.toLowerCase() == "nibedika" || name1.toLowerCase()== "sanzu") && (name2.toLowerCase()== "nibedika" || name2.toLowerCase()== "sanzu")){
            lovePercent = 100
            theirName.value = " ";
       yourName.value = " ";
        }
        else if(singlePeople.includes(name1.toLowerCase() ) || singlePeople.includes(name2.toLowerCase() )){
            output.innerText= "Single forever!!";
            theirName.value = " ";
            yourName.value = " ";
            
        }
        
        else{
            output.innerText = name1 + " " + name2 + " are " + lovePercent + "% in love."
        theirName.value = " ";
        yourName.value = " ";
        }
        output.innerText = name1 + " " + name2 + " are " + lovePercent + "% in love <3."
    }
}


