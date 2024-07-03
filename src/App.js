import './App.scss';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import stol2 from './stol_1.jpg';
import stol1 from './stol2.jpg';
import divan1 from './divan_1.jpg';
import divan2 from './divan_2.jpg';
import divan3 from './divan_3.jpg';
import rack1 from './rack_1.jpg';
import rack2 from './rack.jpg';
import lamp1 from './lamp.jpg';
import lamp2 from './lamp2.jpg';
import fridge1 from './fridge1.jpg';
import fridge2 from './fridge2.jpg';
import fridge3 from './fridge3.jpg';
import fridge4 from './frige4.jpg';
import kettle1 from './kettle1.jpg';
import kettle2 from './kettle2.jpg';
import kettle3 from './kettle3.jpg'
import clocks from './clocks.jpg'
import bed1 from './bed1.jpg'
import bed2 from './bed2.jpg'
import bed3 from './bed3.jpg'
import bed4 from './bed4.jpg'
import bootrack1 from './bootrack1.jpg'
import bootrack2 from './bootrack2.jpg'
import fryingpan1 from './frying_pan1.jpg'
import fryingpan2 from './frying_pan3.jpg'
import fryingpan3 from './frying_pan4.jpg'
import fryingpan4 from './frying_pan5.jpg'
import fryingpan5 from './frying_pan6.jpg'
import fryingpan6 from './frying_pan7.jpg'

import doublepan1 from './double_pan1.jpg'
import doublepan2 from './double_pan2.jpg'
import doublepan3 from './double_pan3.jpg'
import doublepan4 from './double_pan4.jpg'
import doublepan5 from './double_pan5.jpg'

import handledpan1 from './handled_pan1.jpg'
import handledpan2 from './handled_pan5.jpg'
import handledpan3 from './handled_pan2.jpg'
import handledpan4 from './handled_pan4_square.jpg'
import handledpan5 from './handled_pan6.jpg'

import plates1 from './plates1.jpg'
import plates2 from './plates3.jpg'
import plates3 from './plates4.jpg'
import plates4 from './plates5.jpg'

import bowls1 from './bowls1.jpg'
import bowls2 from './bowls2.jpg'

import cutlery1 from './cutlery1.jpg'
import cutlery2 from './cutlery2.jpg'

import scoops1 from './scoops1.jpg'

import chair1 from './chair1.jpg'

import dryer1 from './dryer1.jpg'
import dryer2 from './dryer2.jpg'

import React from 'react';
import HowToBuy from './HowToBuy/HowToBuy';
import Scroller from './Scroller/Scroller';

function App() {

  const [arrowSetting,setArrowSetting] = React.useState(window.innerWidth <= 1010 ? false : true);
  const [picturePadding,setPicturePadding] = React.useState(window.innerWidth <= 1010 ? 1 : 67);
  const [perPage,setPerPage] = React.useState((window.innerWidth <= 1010 && window.innerWidth > 500) ? 2 : 1);
  const [pictureGap,setPictureGap] = React.useState(window.innerWidth <= 1010 ? 1 : 80);
  const [isPagination,setIsPagination] = React.useState((window.innerWidth <= 1010 && window.innerWidth > 500) ? false : true);
  const [isBreakLine, setIsBreakLine] = React.useState((window.innerWidth <= 500) ? <br/> : '');

  React.useEffect(() => {
    function handleResizeWindow(){

      if (window.innerWidth <= 500 ){
        setArrowSetting(()=> { return false});
        setPicturePadding(()=> { return 1});
        setPerPage(()=>{return 1});
        setPictureGap(()=>{return 1})
        setIsPagination(()=>{return true})
        setIsBreakLine(()=>{return <br/>})
      } else if (window.innerWidth <= 1010){
        setIsBreakLine(()=>{return ''})
        setArrowSetting(()=> { return false});
        setPicturePadding(()=> { return 1});
        setPerPage(()=>{return 2});
        setPictureGap(()=>{return 1})
        setIsPagination(()=>{return false})
      } else {
        setIsBreakLine(()=>{return ''})
        setArrowSetting(()=> { return true});
        setPicturePadding(()=> { return 67});
        setPerPage(()=>{return 1});
        setPictureGap(()=>{return 80})
        setIsPagination(()=>{return true})
      }
    }
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
  
  React.useEffect(()=>{
    const soldItems = document.querySelectorAll(".card__price_sold");
    soldItems.forEach((item) => {
    item.textContent = 'SOLD';
  });
  },[])


  return (
    <div className="App">
      <header className="header">
        <div className='header__gradient'></div>
        <h1 className='header__title'>✨ Furniture fair ✨</h1>
        <p className='header__info'>Here you can find some cheap good-quality furniture which I have to get rid of.</p>
      </header>
      <main className='main'>
      <a className='link-anchor' href='#how-to-buy'>How to buy?</a>

        <Scroller word='items' direction='left'/>
        {/* <p className='announcement angled-borders'>Next update {isBreakLine} 13 April, 10pm</p> */}
        <div className='furniture__container'>
        <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage, pagination: isPagination}}>
                <SplideSlide className='slide'>
                  <img className='card__picture card__picture_table1' alt='stol1' src={stol1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                <img className='card__picture card__picture_table2' alt='stol2' src={stol2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
              <h2 className='card__header'>Office table</h2>
              <p className='card__description'>Super regular office table. You can eat, work and even sleep at this.<br/><br/> Size:<br/> 75 × 120 × 73.5cm</p>
              <p className='card__price card__price_sold'>15€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:false, perPage:1}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='chair1' src={chair1}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Chair</h2>
              <p className='card__description'>Fancy office chair of textile texture.<br/>As black as night!<br/><br/>Goes best with the table from above</p>
              <p className='card__price card__price_cost'>12€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel long'>
            <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture long divan1 big' alt='divan1' src={divan1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture long divan2 big' alt='divan2' src={divan2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture long divan3 big' alt='divan3' src={divan3}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient short-info'>
              <h2 className='card__header'>Old sofa</h2>
              <p className='card__description'>Old cheesy shabby sofa. It's not even mine!<br/><br/> Size:<br/> 210 × 94cm </p>
              <p className='card__price card__price_cost'>40€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
              <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage, pagination: isPagination}}>
              <SplideSlide className='slide'>
                  <img className='card__picture rack-one' alt='rack1' src={rack1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                <img className='card__picture rack-two' alt='rack2' src={rack2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
              <h2 className='card__header'>Wooden rack</h2>
              <p className='card__description'>Wooden rack made of some bars and planks myself<br/>(of course, I'm an engineer)<br/><br/> Size:<br/>Total: &nbsp;&nbsp;40 × 30 × 127cm <br/>Shelf size: &nbsp;&nbsp;40 × 20cm</p>
              <p className='card__price card__price_cost'>12€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
              <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture fridge-one' alt='fridge1' src={fridge1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                <img className='card__picture fridge-two' alt='fridge2' src={fridge2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture fridge-three' alt='fridge3' src={fridge3}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                <img className='card__picture fridge-four' alt='fridge4' src={fridge4}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
              <h2 className='card__header'>Re*cringe*rator</h2>
              <p className='card__description'>Pretty nice fridge which I stickerbombed and painted when I was bored. <br/> In duty for 2 years but looks new. <br/><br/>cool <br/><br/> Size: &nbsp;&nbsp;54 × 56 × 82.5cm </p>
              <p className='card__price card__price_cost'>80€</p>
            </div>
            
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage, pagination: isPagination}}>
                <SplideSlide className='slide'>
                  <img className='card__picture lamp-one' alt='lamp' src={lamp1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture lamp-two' alt='lamp' src={lamp2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>IKEA lamp</h2>
              <p className='card__description'>Regular IKEA <i>"Lauters"</i> lamp<br/>Looks new<br/><br/>Feature: &nbsp;&nbsp; Adjustable height</p>
              <p className='card__price card__price_cost'>30€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture lamp-one' alt='lamp' src={kettle1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture lamp-two' alt='lamp' src={kettle2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture lamp-two' alt='lamp' src={kettle3}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Scarlett kettle</h2>
              <p className='card__description'>Scientific community estimates over 1000 cups of tea and coffee brewed using this kettle<br/><br/>Feature: &nbsp;&nbsp; Does &nbsp;*fhfhfhf*</p>
              <p className='card__price card__price_cost'>13€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:false, perPage:1}}>
                <SplideSlide className='slide'>
                  <img className='card__picture' alt='clocks' src={clocks}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Cozy clocks</h2>
              <p className='card__description'>Wood imitating clocks <br/><br/>Does 86 400 ticks per day <br/>(I swear)</p>
              <p className='card__price card__price_cost'>6€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture bed' alt='bed1' src={bed1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture bed' alt='bed2' src={bed2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture bed' alt='bed3' src={bed3}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture bed' alt='bed4' src={bed4}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Bed</h2>
              <p className='card__description'>Gunmetal colored bed* of 1.5 size <br/>Can be bought with a 5cm thick matress (+24€)<br/><br/> Couldn't be softer!<br/><br/>Size: 120 × 200 × 45cm</p>
              <p className='card__price card__price_sold'>100€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${pictureGap}px`, padding:`${picturePadding}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture' alt='bootrack1' src={bootrack1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture' alt='bootrack2' src={bootrack2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Bootrack</h2>
              <p className='card__description'>Fancy rack for your sneakers or boots<br/>Fits up to 6 shoe pairs<br/><br/>Capacious!</p>
              <p className='card__price card__price_cost'>13€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='dryer1' src={dryer1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='dryer2' src={dryer2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Dryer rack</h2>
              <p className='card__description'>Magically evaporates water from whatever you hang on it<br/>(takes 4 - 12hr)<br/><br/>Size: 54 × 100cm</p>
              <p className='card__price card__price_cost'>6€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='frying-pan1' src={fryingpan1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='frying-pan2' src={fryingpan2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='frying-pan3' src={fryingpan3}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='frying-pan4' src={fryingpan4}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='frying-pan5' src={fryingpan5}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='frying-pan6' src={fryingpan6}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Tefal Frying pan</h2>
              <p className='card__description'>Splendid 28⌀cm frying pan for ingenious cooks!<br/>Non-stick coating is not damaged.<br/><br/>Price includes a 3-step lid and a silicone spatula.</p>
              <p className='card__price card__price_cost'>27€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='double-pan1' src={doublepan1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='double-pan2' src={doublepan2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='double-pan3' src={doublepan3}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='double-pan4' src={doublepan4}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='double-pan5' src={doublepan5}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Double-handled pan</h2>
              <p className='card__description'>Shiny Kökskungen pan. Usen only twice!<br/>Holds 2L of water or milk or yogurt ... whatever</p>
              <p className='card__price card__price_cost'>6.5€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='handled-pan1' src={handledpan1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='handled-pan2' src={handledpan2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='handled-pan3' src={handledpan3}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='handled-pan4' src={handledpan4}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='handled-pan5' src={handledpan5}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Long-handled pan</h2>
              <p className='card__description'>The same as pan above but with a looong handle!<br/>(perfect for cooking and cruel negotiations).<br/><br/>Ridiculous!</p>
              <p className='card__price card__price_cost'>6.5€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='plates1' src={plates1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='plates2' src={plates2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='plates3' src={plates3}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='plates4' src={plates4}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Plates</h2>
              <p className='card__description'>Plates of three sizes, I have 2pcs of each.<br/>One big and one small plate have little unpleasant cracks.<br/><br/>Sizes: 15⌀cm | 20.5⌀cm | 26⌀cm</p>
              <p className='card__price card__price_cost'>6€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='bowls1' src={bowls1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='bowls2' src={bowls2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Bowls</h2>
              <p className='card__description'>Three deep soup bowls for your cereals, soups, porridges<br/>Size: 15⌀cm<br/><br/>Bowls</p>
              <p className='card__price card__price_cost'>4€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:arrowSetting, perPage:perPage}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='cutlery1' src={cutlery1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='cutlery2' src={cutlery2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
            <h2 className='card__header'>Cutlery</h2>
              <p className='card__description'>Two forks, three spoons<br/>-end of description-<br/><br/>*you also can buy them separately for 0.5€ per unit*</p>
              <p className='card__price card__price_cost'>2.5€</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:`${37}px`, padding:`${20}px`, arrows:false, perPage:1}}>
                <SplideSlide className='slide'>
                  <img className='card__picture pan' alt='scoops1' src={scoops1}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient last-info'>
            <h2 className='card__header'>Teaspoons</h2>
              <p className='card__description'>Teaspoons! Swirl and stir! Rip and destroy! <br/> Tea and coffee!<br/></p>
              <p className='card__price card__price_cost'>1€</p>
            </div>
          </div>
        </div>
        <Scroller word='How to buy' direction='right'/>
        <HowToBuy/>
      </main>
    </div>
  );
}

export default App;
