import Header from '../mainpage/headerstaff'
import "./menu.css";

export default function App() {
    return (
        <>
            <Header />
            <div className='nametable'> Table 1 : Premium Courses</div>
            <div className='showdetail'>
                <img style={{ width: "150px", borderRadius: "20px" }} src="../src/assets/white.png" alt="" />
                <div className='textdetail'>
                    <p>Current menu  :  PAN SEARED SEA BASS</p>
                    <p>Chef  :  Pachara Phetshee</p>
                    <p>Kitchen  :  Station 2</p>
                    <p>Customer Name  :  Wannaporn  Taechabunnaput</p>
                </div>
            </div>
            <div>
                <div className='detailofcourse'>1 </div>
                <div className='detailofcourse'>2 </div>
                <div className='detailofcourse'>3 </div>
                <div className='detailofcourse'>4 </div>
                <div className='detailofcourse'>5 </div>
                <div className='detailofcourse'>6 </div>
                <div className='detailofcourse'>7 </div>
                <div className='detailofcourse'>8 </div>
                <div className='detailofcourse'>9 </div>

            </div>

        </>
    );
}
