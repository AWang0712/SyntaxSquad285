import React from 'react'
import './Home.css';
import banner from './images/bannerNew.jpg';
import Product from './Product';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import p6 from './images/p6.png';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img className='home__image' src={banner} alt='' />

            <div className='home__row'>
                <Product
                    id='1'
                    title='Step into a world of magic and wonder with me'
                    price={17.76}
                    rating={5}
                    image={p1}
                />
                <Product
                    id='2'
                    title='Blue-eyes White Dragon, Stay away from my son!'
                    price={66.67}
                    rating={5}
                    image={p2}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='3'
                    title='whatever title'
                    price={6.67}
                    rating={12}
                    image={p3}
                />
                <Product
                    id='4'
                    title='whatever title'
                    price={6.67}
                    rating={10}
                    image={p4}
                />
                <Product
                    id='5'
                    title='whatever title'
                    price={6.67}
                    rating={5}
                    image={p6}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='6'
                    title='whatever title'
                    price={6.67}
                    rating={1}
                    image={p5}
                />
            </div>
        </div>
    </div>
    );
}

export default Home;

