var container = document.querySelector(".num-holder");
var createBtn = document.querySelector("#create-btn");
var sortBtn = document.querySelector("#sort-btn");
var count = 0;
// Function to generate the array of blocks





function generatearray() {
    container.innerHTML = "";
    let numbersInput = document.querySelector("#numbers_input");
    let arr = numbersInput.value.split(",");
    for (var i = 0; i < arr.length; i++) {
  
        // Return a value from 1 to 100 (both inclusive)
        //var value = Math.ceil(Math.random() * 100);
        var value = Number(arr[i]);
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("num");
        array_ele.setAttribute('id',`num-${i}`);
        array_ele.setAttribute('data-val',`${value}`);
        array_ele.style.order = `${i+1}`;
  
        // Adding style to div
        array_ele.style.height = `${value + 15}px`;
        //array_ele.style.transform = `translate(${i * 30}px)`;
  
        // Creating label element for displaying 
        // size of particular block
        
        array_ele.innerText = value;
  
        // Appending created elements to index.html 
        
        container.appendChild(array_ele);
    }
    container.style.display = "flex";
}
  
// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.order;
        el1.style.order = el2.style.order;
        el2.style.order = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 100);
        });
    });
}
  
// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
    let blocks = document.querySelectorAll(".num");
  
    // BubbleSort Algorithm
    for (let i = count; i < blocks.length; i += 1) {
        for (let j = 0; j < blocks.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.border = "2px solid black";
            blocks[j + 1].style.border = "2px solid black";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("run");
            var value1 = Number(blocks[j].innerHTML);
            var value2 = Number(blocks[j + 1].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".num");
            }
  
            // Changing the color to the previous one
            blocks[j].style.border = "";
            blocks[j + 1].style.border = "";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
        count++;
        break;
    }
    if(count >= blocks.length){
        count = 0;
    }
    
}
createBtn.addEventListener("click",generatearray);
sortBtn.addEventListener("click",BubbleSort);
// Calling generatearray function
//generatearray();
  
// Calling BubbleSort function
//BubbleSort();