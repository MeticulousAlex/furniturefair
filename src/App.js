import './App.scss';
import '@splidejs/react-splide/css';
import silly from'./silly_staring_cat.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';

function App() {
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
            <Splide options={{gap:'65px', padding:'60px'}}>
                <SplideSlide>
                <div className='card__picture'>

                </div>
                </SplideSlide>
                <SplideSlide>
                <div className='card__picture'>

                </div>
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
            <Splide options={{gap:'65px', padding:'60px'}}>
                <SplideSlide>
                <div className='card__picture'>

                </div>
                </SplideSlide>
                <SplideSlide>
                <div className='card__picture'>

                </div>
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
              <Splide options={{gap:'65px', padding:'60px'}}>
                <SplideSlide>
                <div className='card__picture'>

                </div>
                </SplideSlide>
                <SplideSlide>
                <div className='card__picture'>

                </div>
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
            <Splide options={{gap:'65px', padding:'60px'}}>
                <SplideSlide>
                <div className='card__picture'>

                </div>
                </SplideSlide>
                <SplideSlide>
                <div className='card__picture'>

                </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className='card__info rounded-border-gradient'>
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
