import React from 'react'
import { EmailFolder } from './EmailFolder'
import { GithubFolder } from './GithubFolder'
import { InstaFolder } from './InstaFolder'

export const WhereToFind = () => {

    const handleClick = (e, numb) => {
        e.preventDefault()
        let elemt = e.target || e.srcElement
        let elemtActive = document.getElementsByClassName('active')
        let content = document.getElementById(numb)
        let contentShowed = document.getElementById(elemtActive[0].value)
        elemtActive[0].className = ""
        elemt.classList.add("active")
        content.classList.toggle('hide')
        contentShowed.classList.toggle("hide")
    }

    return (
        <div className='wheretofind'>
            <h2>WHERE TO FIND: </h2>

            <div id="content">
                <div className="tab-container">
                    <ul className="tabs">
                        <button value="1" onClick={event => handleClick(event, "1")} className="active">Instagram</button>
                        <button value="2" onClick={event => handleClick(event, "2")}>Email</button>
                        <button value="3" onClick={event => handleClick(event, "3")}>GitHub</button>
                    </ul>
                    <div className="tab-content">
                        <div id="1" className=' folder__insta'>
                            <span className="stamp is-draft">
                                <p className="fa fa-instagram"></p>
                            </span>
                            <InstaFolder />
                        </div>
                        <div id="2" className='folder__email hide'>
                            <EmailFolder />
                        </div>
                        <div id="3" className='folder__github hide'>
                            <GithubFolder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
