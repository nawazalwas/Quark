import { createElement } from "./main.js";


export function Navigation() {
    const div1 = createElement("div", { class: "navigation" });
    {
        const div2$1 = createElement("div", { class: "navigation_container" });
        {
            const div3$1 = createElement("div", { class: "navigation_container_left" });
            {
                const div4 = createElement("div", { class: "navigation_container_left_logo" });
                {
                    const a5 = createElement("a", { href: "index.html" });
                    {
                        const img6 = createElement("img", { src: "images/header/logo.png", alt: "logo" });
                        a5.append(img6);
                    }
                    div4.append(a5);
                }
                div3$1.append(div4);

            }
            const div3$2 = createElement("div", { class: "navigation_container_right" });
            {
                const div4$1 = createElement("div", { class: "navigation_container_right_sidebar" });
                {
                    const button5 = createElement("button", { class: "navigation_container_right_sidebar_button", type: "button" });
                    {
                        const img6 = createElement("img", { src: "images/header/bars.png", alt: "bar_png" });
                        button5.append(img6);
                    }
                    div4$1.append(button5);

                }
                const div4$2 = createElement("div", { class: "navigation_container_right_login" });
                {
                    const div5 = createElement("div", { class: "navigation_container_right_login_wrapper" });
                    {
                        const ul6 = createElement("ul");
                        {
                            const li7 = createElement("li");
                            {
                                const a8 = createElement("a", { href: "#", class: "navigation_container_right_login_wrapper_link", "data-text": "sign up", "data-toggle": "modal", "data-target": "#myModal" });
                                {
                                    const span9$1 = createElement("span", { class: "navigation_container_right_login_wrapper_link_line1" });
                                    span9$1.innerHTML = "Hello Guest";
                                    const span9$2 = createElement("span", { class: "navigation_container_right_login_wrapper_link_line2" });
                                    span9$2.innerHTML = "sign in";
                                    a8.append(span9$1, span9$2);
                                }
                                li7.append(a8);
                            }
                            ul6.append(li7);
                        }
                        div5.append(ul6);

                    }
                    div4$2.append(div5);
                }
                const div4$3 = createElement("div", { class: "navigation_container_right_search" });
                {
                    const div5 = createElement("div", { class: "navigation_container_right_search_wrapper" });
                    {

                        const div6$1 = createElement("div", { class: "navigation_container_right_search_wrapper_select", tabindex: "0" });
                        {
                            const span7 = createElement("span", { class: "navigation_container_right_search_wrapper_select_option" });
                            span7.innerHTML = "All Categories";
                            div6$1.append(span7);
                        }
                        const input6$2 = createElement("input", { class: "navigation_container_right_search_wrapper_input", type: "text", placeholder: "Search Movie , Video , Music" });
                        {

                        }
                        const button6$3 = createElement("button", { class: "navigation_container_right_search_wrapper_search_button", type: "submit" });
                        {
                            const i7 = createElement("i", { class: "flaticon-tool" });
                            button6$3.append(i7);
                        }
                        div5.append(div6$1, input6$2, button6$3);
                    }
                    div4$3.append(div5);

                }
                div3$2.append(div4$1, div4$2, div4$3);

            }
            const div3$3 = createElement("div", { class: "navigation_container_sidenav", id: "mobile-nav", "data-prevent-default": true, "data-mouse-events": true });
            {

            }

            div2$1.append(div3$1, div3$2, div3$3);
        }

        const div2$2 = createElement("div", { class: "navigation_container_left_menu" });
        {
            const nav3 = createElement("nav", { class: "navigation_container_left_menu_nav" });
            {
                const div4 = createElement("div", { id: "dl-menu", class: "navigation_container_left_menu_nav_wrapper" });
                {
                    const ul5 = createElement("ul", { class: "navigation_container_left_menu_nav_wrapper_ul" });
                    {
                        const listarr = ["Home", "Movie", "Video", "Pages", "Contact"];
                        listarr.forEach((ele) => {
                            const li6 = createElement("li", { class: "navigation_container_left_menu_nav_wrapper_ul_li" });
                            {
                                const a7 = createElement("a", { href: "#" });
                                a7.innerHTML = ele;
                                li6.append(a7);
                            }
                            ul5.append(li6);
                        });


                    }
                    div4.append(ul5);
                }
                nav3.append(div4);
            }
            div2$2.append(nav3);

        }
        div1.append(div2$1, div2$2);
    }



    return div1;
}