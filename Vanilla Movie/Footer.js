import { createElement } from "./main.js";

export function Footer() {

    const div1 = createElement("div", { class: "footer" });
    {
        const div2$1 = createElement("div", { class: "footer_row_1" });
        {
            const div3$1 = createElement("div", { class: "footer_row_1_col_1" });
            {
                const div4 = createElement("div", { class: "footer_row_1_col_1_text" });
                div4.innerHTML = "GET UPDATE SIGN UP NOW !";
                div3$1.append(div4);

            }
            const div3$2 = createElement("div", { class: "footer_row_1_col_2" });
            {
                const input4$1 = createElement("input", { class: "footer_row_1_col_2_input", placeholder: "Enter Your Email" });
                const button4$2 = createElement("button", { class: "footer_row_1_col_2_button" });
                {
                    button4$2.innerHTML = "Submit";
                }
                div3$2.append(input4$1, button4$2);
            }
            div2$1.append(div3$1, div3$2);

        }
        const div2$2 = createElement("div", { class: "footer_row_2" });
        {
            const list = [" English movie", "Tamil movie", "Punjabi Movie", "Hindi movie", "Malyalam movie", " English Action movie", " Hindi Action movie"];
            const footerArr = [{ title: "LANGUAGE MOVIES", list: list }, { title: "LANGUAGE MOVIES", list: list }, { title: "LANGUAGE MOVIES", list: list }];
            footerArr.forEach((ele) => {
                const div3$1 = createElement("div", { class: "footer_row_2_section_1" });
                {
                    const div4 = createElement("div", { class: "footer_row_2_section_1_container" });
                    {
                        const h5$1 = createElement("h3", { class: "footer_row_2_section_1_header" });
                        {
                            h5$1.innerHTML = ele.title;
                        }
                        const ul5$2 = createElement("ul", { class: "footer_row_2_section_1_list" });
                        {
                            ele.list.forEach((title) => {
                                const li6 = createElement("li", { class: "footer_row_2_section_1_list_item" });
                                {
                                    const a7 = createElement("a", { class: "footer_row_2_section_1_list_item_link" });
                                    {
                                        a7.innerHTML = title;

                                    }
                                    li6.append(a7);
                                }

                                ul5$2.append(li6);
                            });
                        }
                        div4.append(h5$1, ul5$2);
                    }
                    div3$1.append(div4);
                }
                div2$2.append(div3$1);

            });
            const div3$1 = createElement("div", { class: "footer_row_2_section_1" });
            {
                const div4 = createElement("div", { class: "footer_row_2_section_1_container" });
                {
                    
                    const h5$1 = createElement("h3", { class: "footer_row_2_section_1_header" });
                    {
                        h5$1.innerHTML = "APP AVAILABLE ON";
                        
                    }
                    const p5$2 = createElement("p", { class: "footer_row_2_section_1_para" });
                    {
                        p5$2.innerHTML = "Download App and Get Free Movie Ticket !";

                    }
                    const ul5$3 = createElement("ul", { class: "footer_row_2_section_1_playstore_list" });
                    {
                        const arr = [{link:"#",img:"images/content/f1.jpg"},{link:"#",img:"images/content/f2.jpg"}];
                        arr.forEach((ele)=>{
                            const li6 = createElement("li",{class:"footer_row_2_section_1_playstore_list_item"});
                            {
                                const a7 = createElement("a",{class:"footer_row_2_section_1_playstore_list_item_link",href:ele.link});
                                {
                                    const img8 = createElement("img",{class:"footer_row_2_section_1_playstore_list_item_link",src:ele.img});
                                    a7.append(img8);
                                }
                                li6.append(a7);
                            }
                            ul5$3.append(li6);
                        });
                    }
                    const h5$4 = createElement("h5", { class: "footer_row_2_section_1_header5" });
                    {
                        const span6$1 = createElement("span",{ class: "footer_row_2_section_1_header5_span_1" });
                        span6$1.innerHTML = "$50";
                        const span6$2 = createElement("span",{ class: "footer_row_2_section_1_header5_span_2" });
                        span6$2.innerHTML = " Payback on App Download";
                        h5$4.append(span6$1,span6$2);
                    }

                    
                    div4.append(h5$1,p5$2,ul5$3,h5$4);
                }
                div3$1.append(div4);
            }
            div2$2.append(div3$1);
            
        }
        const div2$3 = createElement("div", { class: "footer_row_3" });
        {
            const div3 = createElement("div",{class: "footer_row_3_container"});
            {
                const div4$1 = createElement("div",{class: "footer_row_3_container_copyright"});
                {
                    const p5 = createElement("p",{class: "footer_row_3_container_copyright_para"});
                    {
                        const span6$1 = createElement("span",{class: "footer_row_3_container_copyright_para_span_1"});
                        span6$1.innerHTML = "Copyright 2022-23 ";
                        const span6$2 = createElement("span",{class: "footer_row_3_container_copyright_para_span_2"});
                        span6$2.innerHTML = "Newton School ";
                        const span6$3 = createElement("span",{class: "footer_row_3_container_copyright_para_span_3"});
                        span6$3.innerHTML = "All rights reserved - Design by ";
                        const span6$4 = createElement("span",{class: "footer_row_3_container_copyright_para_span_4"});
                        span6$4.innerHTML = "Dilnawaz Ansari ";
                        p5.append(span6$1,span6$2,span6$3,span6$4);
                    }
                    div4$1.append(p5);
                }
                const div4$2 = createElement("div",{class: "footer_row_3_container_social"});
                {
                    const arr = ["fa fa-facebook","fa fa-twitter","fa fa-youtube","fa fa-linkedin"];
                    const ul5 = createElement("ul",{class:"footer_row_3_container_social_list"});
                    {
                        arr.forEach((ele)=>{
                            const li6 = createElement("li",{class:"footer_row_3_container_social_list_item"});
                            {
                                const i7 = createElement("i",{class:ele});
                                li6.append(i7);
                            }
                            ul5.append(li6);

                        });

                    }
                    div4$2.append(ul5);


                }

                div3.append(div4$1,div4$2);

            }
            div2$3.append(div3);

        }
        
        div1.append(div2$1, div2$2,div2$3);
    }

    return div1;

}