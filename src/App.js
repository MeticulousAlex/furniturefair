import './App.scss';
import '@splidejs/react-splide/css';

import stol2 from './stol_1.jpg';
import stol1 from './stol2.jpg';
import divan1 from './divan_1.jpg';
import divan2 from './divan_2.jpg';
import divan3 from './divan_3.jpg';
import rack1 from './rack_1.jpg';
import rack2 from './rack.jpg';
import lamp from './lamp.jpg';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';

function App() {

  const [arrowSetting,setArrowSetting] = React.useState(window.screen.width <= 1279 ? false : true);
  const [picturePadding,setPicturePadding] = React.useState(window.screen.width <= 1279 ? 1 : 0);

  function handleResize(){
    if (window.screen.width <= 1279){
      setArrowSetting(()=> { return false});
      setPicturePadding(()=> { return 1});
      console.log('yes');
    } else {
      setArrowSetting(()=> { return true});
      setPicturePadding(()=> { return 0});
    }
  }

  window.addEventListener('resize', handleResize);


  return (
    <div className="App">
      <header className="App-header">
        <div className='gradient'>Alex's furniture fare</div>
        <h1 className='header'>Alex super store</h1>
        <p className='info'>Here you can find some cheap good-quality furniture which I have to get rid of.</p>
      </header>
      <main className='main'>
        <div className='furniture__container'>
        <div className='card'>
            <div className='caroussel'>
            <Splide options={{gap:'65px', padding:`${picturePadding || 60}px`, arrows:arrowSetting}}>
                <SplideSlide className='slide'>
                  <img className='card__picture stol1' alt='stol1' src={stol1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                <img className='card__picture table-two' alt='stol2' src={stol2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
              <h2 className='card__header'>Table / age - 15months</h2>
              <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi voluptatibus nisi laboriosam sunt voluptate, quae doloremque consequuntur eius cupiditate similique quos cum doloribus inventore nostrum laudantium ipsa commodi saepe?</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel long'>
            <Splide options={{gap:'75px', padding:`${picturePadding || 60}px`, arrows:arrowSetting}}>
                <SplideSlide className='slide'>
                  <img className='card__picture long divan1' alt='divan1' src={divan1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture long divan2' alt='divan2' src={divan2}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                  <img className='card__picture long divan3' alt='divan3' src={divan3}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient short-info'>
              <h2 className='card__header'>Furniture name + Age</h2>
              <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi voluptatibus nisi laboriosam sunt voluptate, quae doloremque consequuntur eius cupiditate similique quos cum doloribus inventore nostrum laudantium ipsa commodi saepe?</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
              <Splide options={{gap:'65px', padding:`${picturePadding || 60}px`, arrows:arrowSetting}}>
              <SplideSlide className='slide'>
                  <img className='card__picture rack-one' alt='rack1' src={rack1}/>
                </SplideSlide>
                <SplideSlide className='slide'>
                <img className='card__picture rack-two' alt='rack2' src={rack2}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
              <h2 className='card__header'>Furniture name + Age</h2>
              <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi voluptatibus nisi laboriosam sunt voluptate, quae doloremque consequuntur eius cupiditate similique quos cum doloribus inventore nostrum laudantium ipsa commodi saepe?</p>
            </div>
          </div>
          <div className='card'>
            <div className='caroussel'>
            <Splide options={{arrows: false}}>
            <SplideSlide className='slide'>
                  <img className='card__picture lamp' alt='lamp' src={lamp}/>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient '>
            <h2 className='card__header'>Furniture name + Age</h2>
              <p className='card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi voluptatibus nisi laboriosam sunt voluptate, quae doloremque consequuntur eius cupiditate similique quos cum doloribus inventore nostrum laudantium ipsa commodi saepe?</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
