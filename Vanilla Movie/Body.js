import { createElement } from "./main.js";
import { database } from "./api.js";
import { Carousel } from "./Carousel.js";




export function Body() {
    const movieArr = [];

    function api() {
        database.forEach((ele) => {
            movieArr.push(ele.imgUrl);
        });

    }
    api();
    const div1 = createElement("div", { class: "body" });
    {
        const div2$1 = createElement("div", { class: "banner" });
        {
            const div3 = createElement("div",{class:"banner_container"});
            {
                const img4 = createElement("img",{class:"banner_container_img",src:"images/banner/Marvels-Avengers.webp"});
                div3.append(img4);
            }
            div2$1.append(div3);

        }
        const div2$2 = createElement("div", { class: "catalog" });
        {
            let bannerArr = [{ title: "Trending", moviesList: movieArr }, { title: "Upcoming", moviesList: movieArr }, { title: "Romantic", moviesList: movieArr }, { title: "Thrilling", moviesList: movieArr }, { title: "Horror", moviesList: movieArr }, { title: "Action", moviesList: movieArr }, { title: "South Action", moviesList: movieArr }, { title: "Bhojpuri", moviesList: movieArr }];
            bannerArr.forEach((ele) => {
                const div3 = createElement("div", { class: "catalog_wrapper" });
                {
                    div3.append(Carousel(ele.title, ele.moviesList));
                }
                div2$2.append(div3);

            });
        }
        div1.append(div2$1,div2$2);


    }
    return div1;
}