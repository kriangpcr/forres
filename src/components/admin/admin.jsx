import Header from '../mainpage/headeradmin'
import './admin.css'
export default function App() {
  return (
    <>
      <Header />
      <div>

        <div className='container1'>
          <div className='alluser'>
            <p className='letter'>ALL USER</p>
            <p className='bignum'>1,000</p>
            <p className='letter'>ALL STAFF</p>
            <p className='bignum'>25</p>
          </div>
          <div className='allincome'>
            <div>
              <p className='letter'>TOTAL INCOME</p>
              <p className='letter'>286,233,400</p>
            </div>
          </div>
        </div>

        <table className='mytable'>
          <th>NAME</th>
          <th>ROLE</th>
          <th>SALARY</th>
          <th>STATUS</th>
          <tr>
            <td>pachara</td>
            <td>chef</td>
            <td>200,000</td>
            <td>ONLINE</td>
          </tr>
          <tr>
            <td>Lock</td>
            <td>chef</td>
            <td>100,000</td>
            <td>ONLINE</td>
          </tr>
          <tr>
            <td>Mile</td>
            <td>Cashier</td>
            <td>300,000</td>
            <td>OFFLINE</td>
          </tr>
        </table>

      </div>
    </>
  );
}
