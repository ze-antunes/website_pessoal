import React, { useState } from 'react'
import { cardsData } from '../cardsData/cardsData'
import { Card } from './Card';

export const PreviousWork = () => {
    let [data, setData] = useState(cardsData);
    return (
        <div className='previousWork'>
            <h2>PREVIOUS WORK:</h2>
            <div className='previousWork__display'>
                {data.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </div>
        </div>
    )
}
