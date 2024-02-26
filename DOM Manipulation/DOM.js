// 4 Pillars og DOM

// 1. Selection of an Elements
// 2 Changing HTML
// 3 Changing CSS
// 4 Event Listner

//Selection of an Elements
var a=document.querySelector("h1") //HTML ke andr ka element select krna
console.log(a); //Variable mse store ho gya
//suppose mene id banai hai box nam  se to kese select krenge
//document.querySelector("#box")

//suppose mene Class banai hai box nam  se to kese select krenge
//document.querySelector(".box")




//Changing HTML
// a.innerHTML="I Changed The Dom (h1)"


//Changing CSS

a.style.color="red"; //I Changed The Color of h1 
//javascript DOM me CamelCase follow hota hai bich me - nahi laga skte
a.style.backgroundColor="black";


//css me es hota hai background-Color
//a.style.background-Color="black";


//Event Listner

a.addEventListener("click",function(){
    //console.log( "h1 pr Click Ho gya hai ")
    a.innerHTML="Tum Badal Chuke Ho "
    a.style.color="Yellow";
    a.style.backgroundColor="black"

})

// ---------------------------bulb On/Off----------------------------

var bulb=document.querySelector('#bulb')
var btn = document.querySelector("button")
var flag = 0;

btn.addEventListener("click",function()
{
    if(flag==0)
    {
        bulb.style.backgroundColor="yellow";
        a.innerHTML="Tum Badal Chuke Ho  "
    a.style.color="Yellow";
    a.style.backgroundColor="black"
        
        flag=1;
    }
    else
    {
        bulb.style.backgroundColor="transparent";
        a.style.backgroundColor="black";
        a.innerHTML="Light Gyi"
        a.style.color="red";
        flag=0;
    }
    
})


// Selecting Multiple Elements at a same time

var bh = document.querySelectorAll("h1");
// NodeList me dikhenge

bh.forEach(function(e)
{
    console.log(e);
})

// Id se uthana ho to
// document.getElementById("Id")

// Class ke Name se uthana ho to
// document.getElementsByClassName("ClassName")



// -----------------------TextContent-----------------------------------

// Difference Between TextContent and inerHTML

//bulb.innerHTML="<h1> Hello</h1>"
//Isme "Hello" add ho jayega


//bulb.TextContent="<h1> Hello</h1>"
//Isme "<h1> Hello</h1>" add ho jayega h1 Tag ke saath







