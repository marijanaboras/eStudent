import React from 'react';
import eSTUDENT from '../Images/eSTUDENT.jpg';
import './kupi.scss';

export default function Zabava() {
    return ( 
        <>
            <div className='container'>
                <img className='eSTUDENT' src={eSTUDENT} alt='eSTUDENT'></img>
            </div>
        </>
    );
}