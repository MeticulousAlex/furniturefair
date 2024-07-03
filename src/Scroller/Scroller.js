import './Scroller.scss'
import React from 'react';

export default function Scroller({word, direction}){

    let key = 1;

    const scroller = document.querySelectorAll(".scroller");
    const rawWords= Array(40).fill(word);
    let newWords = Array(40);
    for (let i = 0; i < rawWords.length; i++) {
        if (i % 2 === 0) {
            newWords[i] = "✱";
        } else {
            newWords[i] = rawWords[i];
        }
    }
    const readyWords=newWords.map((rawWord)=>{
        key+=1;
        return <li key={key+1}>{rawWord}</li>
    })


    function addAnimation() {
        scroller.forEach((scroller) => {
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            
            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    React.useEffect(() => {
        addAnimation();
    },[])

    return(
        <div className="scroller" data-animated='true' data-speed="fast" data-direction={direction}>
            <ul className="tag-list scroller__inner">{readyWords}</ul>
        </div>
    )
}