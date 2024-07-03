import './HowToBuy.scss';
import React from 'react';
import Scroller from '../Scroller/Scroller';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export default function HowToBuy(){

    const position = [62.79065, 22.81205];

    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
        scrollers.forEach((scroller) => {
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
        <>
        <div className='how-to-buy' id='how-to-buy'>
            <p className='how-to-buy__description'> <b className='how-to-buy__description_bold'>Really, how?</b> <br/><br/>If a sympathetic spark has flown through your heart when you saw my stuff, this info is for you. </p>
            <div className='table rounded-border-gradient rounded-border-gradient_info'>
                <div className='table__cell'>
                    <h4 className='table__title'>Where to write?</h4>
                    <div className='table__cell-content'>
                        <p className='table__about-me'>I'm only accessible in Whatsapp and Telegram.</p>
                        <ul className='how-to-buy__instruction-list'>
                            <li className='how-to-buy__instruction'>Drop me a line in <a className='how-to-buy__link how-to-buy__link_whatsapp'href='https://wa.link/g8x7d8'>WhatsApp</a></li>
                            <li className='how-to-buy__art-marker'>✱</li>
                            <li className='how-to-buy__instruction'>Message me in <a className='how-to-buy__link how-to-buy__link_telegram'href='https://t.me/Sas_not_gay'>Telegram</a></li>
                        </ul>
                    </div>
                </div>
                <div className='table__cell'>
                    <h4 className='table__title'>What to write?</h4>
                    <div className='table__cell-content'>
                        <ul className='how-to-buy__instruction-list'>
                        <li className='how-to-buy__instruction'>Name of chosen item(s)</li>
                        <li className='how-to-buy__art-marker'>✱</li>
                        <li className='how-to-buy__instruction'>When you would like to come</li>
                        </ul>
                    </div>
                </div>
                <div className='table__cell'>
                    <h4 className='table__title'>Where to go?</h4>
                    <div className='contacts__map'>
                        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                            <Popup>
                                Larvakuja 5B
                            </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className='contacts__location'>
                        <p>Location: Larvakuja 5B, apartment 6</p>
                        <p>Time: Mon-Fr 16-21 | Sat-Sun 11-21 </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}