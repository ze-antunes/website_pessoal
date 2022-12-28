import React from 'react'

export const Card = (card) => {
    const data = card;
    return (
        <div className='card'>
            <div className="front" style={{ backgroundImage: `url(${data.card.image})` }}>
                <p>{data.card.title}</p>
            </div>
            <div className="back">
                <p>{data.card.description}</p>
                {/* <a href={`${data.card.link}`} rel="noreferrer" target="_blank">Do you want to <br /> know more about <br /> this project?</a> */}
                <a href={`${data.card.link}`} rel="noreferrer" target="_blank">Click for more info+</a>
            </div>
        </div>
    )
}
