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
                <p>NO. 5</p>
                <p>WANTED FOR WORKING</p>
                <p>{date}</p>
            </div>
        </div>
    )
}
