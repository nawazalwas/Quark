import { Body } from "./Body.js";
import { Footer } from "./Footer.js";
import { Navigation } from "./Navigation.js";

const root = document.getElementById("root");

function Details(){
    const div1 = createElement("div",{class:"details"});
    {
        const div2$1 = createElement("div",{class:"details_banner"});
        {
            const div3 = createElement("div",{class:"details_banner_wrapper"});
            {
                const img4 = createElement("img",{class:"details_banner_wrapper_image",src:"images/Poster/FirstlookoftheupcomingfilmIndianaJones5PhotoYouTube.avif"});
                div3.append(img4);
            }
            div2$1.append(div3);
        }
        const div2$2 = createElement("div",{class:"details_info"});
        {
            const div3 = createElement("div",{class:"details_info_container"});
            {
                const div4$1 = createElement("div",{class:"details_info_container_description"});
                {

                }
                const div4$2 = createElement("div",{class:"details_info_container_rating"});
            }
            div2$2.append(div3);
        }
        div1.append(div2$1,div2$2);
    }

    return div1;
}



root.append(Navigation(), Body(), Footer());

export function createElement(tag, attr = {}) {
    const ele = document.createElement(tag);
    for (const key in attr) {
        if (key === "className") {
            ele.setAttribute("class", attr[key]);
            continue;
        }
        ele.setAttribute(key, attr[key]);
    }

    return ele;
}

console.log(Navigation());