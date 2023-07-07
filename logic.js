let btn = document.querySelector('button');

let contentBox = document.getElementById('addContent');

let title = document.getElementById('title');
let desc = document.getElementById('desc');




btn.addEventListener('click',()=>{

    if(title.value == "" || desc.value == ""){
       if(desc.value == ""){
        alert("Description fields are empty!");
       }
       else{
        alert("Title fields are empty!");
       }
    }
    else{
        let box = document.createElement('div');
        let heading = document.createElement('h3');
        let para = document.createElement('p');
    
        createBox(box);
        
        let titleValue = title.value;
        let descValue = desc.value;
    
        heading.innerText = titleValue;
        para.innerText = descValue;
    
        box.appendChild(heading);
        box.appendChild.innerHTML ="<br>";
        box.appendChild(para);
        contentBox.appendChild(box);

        box.setAttribute('class','myBox');
    
        title.value = "";
        desc.value = "";

      
    
    }
    

   
});



function createBox(box){
    box.style.border = "2px solid black";
    box.style.backgroundColor = "rgba(223, 230, 233,0.7)";
    box.style.overflowY = "scroll";
    box.style.overflowX = "hidden";
    box.style.boxSizing = "border-box";
    box.style.padding = "10px 5px";  
    box.style.marginTop = "1rem";
}


