import { createElement } from "./main.js";


export function Carousel(title,imageArr = [], autoplay = false, infintyloop = false) {
    //webdevsimplifited;
    let handle;
    let index = 0, item_per_screen = 5;
    let arrLength = imageArr.length;
    let bars = Math.ceil(arrLength/item_per_screen);
    let arrOfBarNodes = [];

    let slider;

    const div1 = createElement("div", { class: "row" });
    {
        const div2$1 = createElement("div", { class: "header" });
        {
            const h3$1 = createElement("h3", { class: "title" });
            h3$1.innerHTML = title;
            const div3$2 = createElement("div", { class: "progress-bar" });
            {
                Array(bars).fill(-1).forEach((ele,idx)=>{
                    const div4 = createElement("div",{class:"progress-item"});
                    if(idx == 0){
                        div4.classList.add("active");
                    }
                    arrOfBarNodes[idx] = div4;
                    div3$2.append(div4);
                });

            }
            div2$1.append(h3$1, div3$2);
        }

        const div2$2 = createElement("div", { class: "container" });
        {
            const button3$1 = createElement("div", { class: "handle left-handle" });
            {
                const div4 = createElement("div");
                button3$1.append(div4);

            }
            const div3$2 = slider = createElement("div", { class: "slider" });
            {
                /* --items - per - screen: 4;
                --slider - index: 0; */
                div3$2.style.setProperty('--items-per-screen', item_per_screen);
                div3$2.style.setProperty('--slider-index', index);
                imageArr.forEach((url,idx) => {
                    const img4 = createElement("img", { src: url,id:idx});
                    div3$2.append(img4);
                    
                });
            }
            const button3$3 = createElement("div", { class: "handle right-handle" });
            {
                const div4 = createElement("div");
                button3$3.append(div4);
            }
            div2$2.append(button3$1, div3$2, button3$3);
        }
        const div2$3 = createElement("div", {});
        div1.append(div2$1, div2$2, div2$3);
    }

    div1.addEventListener("click", (e) => {
        if (e.target.matches(".handle")) {
            handle = e.target
        } else {
            handle = e.target.closest(".handle")
        }
        if (handle != null) {
            index = onHandleClick(handle, slider,arrOfBarNodes, index, item_per_screen, arrLength)
        }

    });

    return div1;


}


function onHandleClick(handle, slider,arrOfBarNodes, index, item_per_screen, length) {
    let lastIndex = Math.ceil(length/item_per_screen)-1;
    arrOfBarNodes[index].classList.remove("active");


    if (handle.classList.contains("left-handle")) {
        if(index <= 0){
            slider.style.setProperty('--slider-index',lastIndex);
            arrOfBarNodes[lastIndex].classList.add("active");
            return lastIndex;
        }
        slider.style.setProperty('--slider-index', index-1);
        arrOfBarNodes[index-1].classList.add("active");
        return index-1;
    }

    if (handle.classList.contains("right-handle")) {
        if(index >= lastIndex){
            slider.style.setProperty('--slider-index',0);
            arrOfBarNodes[0].classList.add("active");
            return 0;
        }
        slider.style.setProperty('--slider-index', index+1);
        arrOfBarNodes[index+1].classList.add("active");
        return index+1;
    }
}