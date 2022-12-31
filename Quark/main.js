import createElement from './createElement.js';
import render from './render.js';
import insertElement from './insert.js';
import diff from './diff.js';

let myElement = createElement('div', {
    attrs: { class: 'container'},
    children: [createElement('img', {
        attrs: { id: 'img', src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--wZRwgDoY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/simonpaix/images/blob/main/blog/Flexbox_CheatSheet_LearnPine.png%3Fraw%3Dtrue' },
        children: []
    })]
})


let element = render(myElement);
let rootElemet = insertElement(element, document.querySelector('#root'));

let count = 0;

setInterval(()=> {
    count += 1;
    let myVirtualElemet = createElement('div', {
        attrs: { class: 'img'},
        children: [createElement('img', {
            attrs: { id: 'img', src: `https://res.cloudinary.com/practicaldev/image/fetch/s--wZRwgDoY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/simonpaix/images/blob/main/blog/Flexbox_CheatSheet_LearnPine.png%3Fraw%3Dtrue` },
            children: []
        })]
    })

    const patch = diff(myElement, myVirtualElemet);

    rootElemet = patch(rootElemet);


    myElement = myVirtualElemet;

}, 1000);