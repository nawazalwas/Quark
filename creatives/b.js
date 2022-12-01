let add = document.querySelector("#addCreative");
let closebtn = document.querySelector(".closebtn");

let main = document.querySelector(".main");
let drawer = document.querySelector(".drawer");
let btn_primary = document.querySelector(".btn-primary");
let creativeForm = document.querySelector("#creativeForm");

let colors = document.querySelector("#colors");

let progressCount = 0;



function addBtn(){
    //alert();
    //main.style.width = "100%";
    drawer.style.width = "35%";
    add.setAttribute("disabled","") ;  
    btn_primary.setAttribute("disabled","") ;
}

function closeBtn(){
    //alert();
    //main.style.width = "100%";
    drawer.style.width = "0%";
    add.removeAttribute("disabled");   
}


//API handler

let backgroundColor = document.querySelector("#backgroundColor");

const api_url = 
      "https://random-flat-colors.vercel.app/api/random?count=5";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    //console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    
}
// Function to define innerHTML for HTML table
function show(data) {
    
    let list = "<ul>";
    // Loop to access all rows 
    let i = 0;
    for (let r of data.colors) {
        //console.log(r);
        list += `<li><input type="radio"  name="color" value="${r}" required>
        <label for="${i}" style = "background-color:${r}"></label></li>`;
        i++;
    }
    list+="</ul>";
    backgroundColor.insertAdjacentHTML('beforeend', list);
    //backgroundColor.querySelector("input").setAttribute("required","");
}

//let reqFields = document.querySelectorAll("#title,#subtitle");
//let inputReqField = document.getElementsByName('color');
//console.log(creativeForm);
function reqCheck(){
    if(creativeForm.checkValidity()){
        if(!(progressCount >= 5)){
            //btn_primary.setAttribute("disabled","") ;  
            btn_primary.removeAttribute("disabled");
        }
        
    }else{
        btn_primary.setAttribute("disabled","") ;
    } 
    
    
}

function add_Creatives(event){
    
    
    

    let title =  document.querySelector("#title");
    let subtitle =  document.querySelector("#subtitle");
    let creatives = document.querySelector("#creatives");
    let color = document.querySelector('input[name="color"]:checked');
    let colors = document.querySelector("#colors");
    //console.log(color.value);
    
    let creativesAdder = `<div style = "background-color:${color.value};display: none" id="@${color.value}"><div class="forfilter">${title.value}</div><div class="forfilter">${subtitle.value}</div></div>`;
    let filterColors = `<div>
                        <input type="checkbox"  name="colors" value="${color.value}" required>
                        <label for="${color.value}" style = "background-color:${color.value}"></label>
                    </div>`;
    

    
    creatives.insertAdjacentHTML('beforeend', creativesAdder);
    colors.insertAdjacentHTML('beforeend', filterColors);
    event.preventDefault();
    creativeForm.reset();
    btn_primary.setAttribute("disabled","") ;
    closeBtn();
    progressBar();


}
//----------------------------------------------------------
//Progress Bar

function progressBar(){
    progressCount++;
    let progressBar = document.querySelector("#progress-bar");
    let progressAria = document.querySelector("#progressAria");
    progressBar.style.backgroundColor = "blue";
    progressBar.style.width = `${progressCount*20}%`
    progressAria.innerHTML = `${progressCount}/5 Creatives`
    
    

}

//filters-------------------------------
let filtertxt = document.getElementById('filtertxt');

function filterByText(){

    let filter,creativesList,a,i,txtValue;
    
    filter = filtertxt.value.toUpperCase();
    
    creativesList = document.querySelectorAll('.forfilter');
    
    

    

    for (i = 0; i < creativesList.length; i++) {
        
        a = creativesList[i];
        txtValue = a.textContent || a.innerText;   
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            if(a.parentNode.style.display === "none" && filter !== ""){
                continue;
            }
            a.parentNode.style.display = "";
            i++;
            continue;
        } else {
            a.parentNode.style.display = "none";
        }
        
    }
    //console.log(filtercolvalue);
    
}


function filterByColor(event){
    
    let creativesList = document.querySelectorAll('.forfilter');
    console.log(event);
    let temp = document.getElementById(`@${event.target.defaultValue}`);
    if(event.target.checked === true){
        temp.style.display = "";
    }else{
        temp.style.display = "none";
    }
    
}
function noneFilter(){}
add.addEventListener("click",addBtn);
closebtn.addEventListener("click",closeBtn);
btn_primary.addEventListener("click",add_Creatives);
creativeForm.addEventListener("input",reqCheck);
filtertxt.addEventListener("input",filterByText);
colors.addEventListener("input",filterByColor);


document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key == "Escape") {
        //alert('Esc key pressed.');
        closeBtn();
    }
    
};


function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + ", " + +g + ", " + +b + ")";
}


