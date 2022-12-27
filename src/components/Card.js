import React from 'react'

export const Card = (card) => {
    const data = card ?? "";
    console.log(data.card.image)
    return (
        <div className='card'>
            <div className="front">
                <p>{data.card.title}</p>
            </div>
            <div className="back">
                <div>
                    <p>{data.card.description}</p>
                </div>
            </div>
        </div>
    )
}
