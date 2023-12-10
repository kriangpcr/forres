import './balance.css';
import "../components/modal.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from '../../mainpage/header'
export default function Balance() {

  const [top,setTop]=useState(false);

  const toggleModal4 = () => {
    console.log('asd')
    setTop(!top);
  };

  return (
    <><Header /><div className='balance'>
      <div className='boxx'>
        <div className='pay'>
          <div>Your Balance</div>
        </div>

        <div className='pay1'>
          <div>2,000,000 $</div>
          <button className='depo' onClick={() => { toggleModal4(); } }>TOP UP</button>
        </div>
      </div>


      {top && (
        <div className="modal1">

          <div className="overlay"></div>
          <div className="modal-content1" style={{ width: "350px", height: "200px", paddingBottom: "20px", paddingTop: "70px" }}>

            <div className='top'>
              <div className="close-modal"><button onClick={toggleModal4}>
                <FontAwesomeIcon icon={faXmark} />
              </button></div>
              <div style={{ textAlign: "center" }} className='txt1'>ใส่จำนวนเงิน</div>
              <div className='ton'>
                <input className='banshe' type="number" />
                <input className='term1' type="button" value="เติมเงิน" />

              </div>

            </div>
          </div>
        </div>
      )}

      <div className='history'>
        <div className='txt'>History</div>

        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>PaymentId</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='aaa'>
        <a href="/profile">
          <div className='backbutton-container'>
            <button className='backbutton'>
              Back
            </button>
          </div>
        </a>
      </div>

    </div></>
  );
}

