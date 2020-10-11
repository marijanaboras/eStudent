import React from 'react';
import crveni from '../Images/crveni.jpg';
import crni from '../Images/crni.jpg';
import './Home.scss';
import Button from '../Button/Button';

export default function Home() {
    return ( 
        <>
            <div className='crveni-cont'>
                <img className='crveni' src={crveni} alt='Crveni auto' />
                <div>
                    <h3 className='ime-auta'>Model S</h3>
                    <div className='spec-auta'>
                        <h3 className='odd'>2,5 s</h3>
                        <h3 className='odd'>804 litara</h3>
                        <h3 className='odd'>610 km</h3>
                        <h6 className='odd'>Od 0 do 100 km/h</h6>
                        <h6 className='odd'>Najveći prtljažnik u tom razredu</h6>
                        <h6 className='odd'>Doseg (WLTP)</h6>
                <div className='button'>
                    <Button />
                </div>
                </div>
                </div>
            </div>
            <div className='veliki-cont'>
                <div className='crni-cont'>
                    <img className='crni' src={crni} alt='Crni auto' />
                    <div className='crni-p'>
                        <p className='p-naslov'>Specifikacije vozila model S</p>
                        <div className='flex-p'>
                            <p className='p-big'>Baterija</p>
                            <p className='p-big'>Težina</p>
                            <p className='p-big'>Doseg</p>
                            <p className='p-big'>Ubrzavanje</p>
                            <p className='p-small'>Dolg doseg</p>
                            <p className='p-small'>2316 kg</p>
                            <p className='p-small'>593 km (WLTP)</p>
                            <p className='p-small'>2,5s 0-100 km/h</p>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <p>Napravio: Antonio Grigić</p>
                    <p>Sva prava na stranicu sadrži autor</p>
                </div>
            </div>
        </>
    );
}

