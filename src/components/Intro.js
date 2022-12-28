import React from 'react'
import img from '../assets/images/profile_photo.png';

export const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro__info">
                <h2>INFROMATION: </h2>
                <p><strong>Name:</strong> <u>José Antunes</u></p>
                <p><strong>DOB:</strong> <u>26/03/2000</u></p>
                <p className="redacted">
                    <strong>Country:</strong>  <u><span>Portugal</span></u>
                </p>
                <p className="redacted">
                    <strong>Native Country:</strong> <u><span>Portugal</span></u>
                </p>
                <p><strong>Pior Occupation:</strong> <u>Student at the University of Coimbra</u></p>
                <p className="redacted"><strong>Summary:</strong>
                    Originaly from <span>Aveiro</span>, this subject as been studying <span>Design and Multimedia</span> at FCTUC,
                    Faculty of Science and Technology of the University of Coimbra.
                    He practiced <span>competitive swimming</span> throughout his life and achieved good results at <span>national</span> level at the peak of his career.
                    During the degree he was part of the core of computer engineering students,
                    where in the third year he was the <span>coordinator of the pedagogy</span> department,
                    and was a member of the junior company <span>jeKnowledge</span>.  In the summer of 2022 he interned at <span>Loop.co</span> where he worked as a <span>fullstack developer</span>.
                    He is at the beginning of his master's degree in Design and Multimedia.
                    He can be found in the <span>Computer Engineering</span> department and he frequents <span>the DEEC café</span> a lot.</p>
            </div>
            <div className="intro__photo">
                <img src={img} alt="profile-img" />
                <p><strong>Name:</strong> José Antunes</p>
                <span className="stamp is-nope">CONFIDENCIAL</span>
            </div>
        </div>
    )
}
