import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import bgMusic from '../assets/sounds/kronos_unveiled.mp3'

export const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div className='header'>
            <div className='header__top'>
                <h1 className='header__title'>WANTED</h1>
                <h4 className='header__subtitle'>COIMBRA POLICE DEPARTMENT</h4>
            </div>
            <div className="header__bottom">
                <ReactAudioPlayer
                    src={bgMusic}
                    loop
                    controls
                    autoPlay
                    controlsList="nodownload noplaybackrate"
                />
                <p>WANTED FOR WORKING</p>
                <p className="header__bottom-date">{date}</p>
            </div>
        </div>
    )
}
