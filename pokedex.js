let img = document.querySelector(".pokimg img")
let ipt=document.querySelector(".box")
let btn=document.querySelector(".getinfo")
let name=document.querySelector(".a1") 
let height=document.querySelector(".a2") 
let weight=document.querySelector(".a3") 
let type=document.querySelector(".a4") 
let health=document.querySelector(".a5") 
let toggle=document.querySelector(".toggle")
let main = document.querySelector(".mainrhs");
let outer = document.querySelector(".outermain");
let divisions = document.querySelectorAll(".division");
let textboxes = document.querySelectorAll(".textbox");
let box= document.querySelector(".box")



 const drklgt = ()=>{
     if (toggle.innerText === "Light") {
        main.classList.add("light");
        main.classList.remove("dark");

        box.classList.add("lightwb");
        box.classList.remove("darkwb");

        outer.classList.add("light");
        outer.classList.remove("dark");
        toggle.innerText="Dark"
        toggle.classList.add("btn-dark")
        toggle.classList.remove("btn-light")
        divisions.forEach(div => {
            div.classList.add("fntdark");
            div.classList.remove("fntlight");
        });
        textboxes.forEach(textbox => {
            textbox.classList.add("fntdark");
            textbox.classList.remove("fntlight");
            
        });





    } else {
        main.classList.add("dark");
        main.classList.remove("light");

        box.classList.add("darkwb");
        box.classList.remove("lightwb");


        outer.classList.add("dark");
        outer.classList.remove("light");
        toggle.innerText="Light"
        toggle.classList.add("btn-light")
        toggle.classList.remove("btn-dark")
          divisions.forEach(div => {
            div.classList.remove("fntdark");  
            div.classList.add("fntlight");
        });
        textboxes.forEach(textbox => {
            textbox.classList.add("fntlight");
            textbox.classList.remove("fntdark");
            
        });
    }
     


}

const findpokemon=async()=>{
    let pokemon=ipt.value.toLowerCase()
    let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(!response.ok){
        alert("NOT A POKEMON")

    }
    else{
        const data= await response.json()
        img.classList.remove("hide")
        img.src=data.sprites.front_default
        name.innerText = data.name;         
        height.innerText = data.height;     
        weight.innerText = data.weight;     
        type.innerText = data.types[0].type.name; 
        health.innerText = data.stats[0].base_stat; 

    }



}




btn.addEventListener("click", findpokemon)
toggle.addEventListener("click",drklgt)