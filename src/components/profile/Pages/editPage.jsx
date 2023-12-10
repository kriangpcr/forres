import './editPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserPen,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Header from '../../mainpage/header'
function edit(){
    return(
        <><Header /><div className='edit'>

            <div><img className='Profile1' src='../src/components/images/Profile.png' /></div>
            <div><button className='Change'> CHANGE     <FontAwesomeIcon icon={faUserPen} /></button></div>
            <div className='name'> Wannaporn TeachaBunnaput </div>

            <div className='keepbox'>

                <div className='box'>
                    <div className='letter'> NAME </div>
                    <input className='namebox' type="text" placeholder='Name'/>

                    <div className='letter'> SURNAME </div>
                    <input className='namebox' type="text" placeholder='Surname' />
                </div>

                <div className='box'>
                    <div className='letter'> EMAIL </div>
                    <input className='namebox' type="text"  placeholder='Email'/>

                    <div className='letter'> MOBLIE </div>
                    <input className='namebox' type="text" placeholder='Mobile' />
                </div>

            </div>

            <div>
                <a href="/profile"><button className='savebut'>
                    SAVE
                </button></a>
            </div>
        </div>
        <form action="">
            <input className='asd' type="text" value="asd" id="" />
        </form>
        </>
    );
}

export default edit