import Header from '../mainpage/headeradmin'
import './admin.css'
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "./data/sourceData.json";
import courseData from "./data/courseData.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
export default function App() {
  return (
    <>
      <Header />
      <div className='bigcon'>

        <div className='container1'>
          <div className='alluser'>
            <p className='letter'>ALL USER</p>
            <p className='bignum'>1,000</p>
            <p className='letter'>ALL STAFF</p>
            <p className='bignum'>25</p>
          </div>
          <div className='allincome'>
          <div style={{width:"95%"}} className="dataCard customerCard">
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "premium",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    '#845E00',
                  ],
                  borderRadius: 5,
                }
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: sourceData.map((data) => data.value*data.price).reduce((acc, amount) => acc + amount).toLocaleString(),
                },
              },
            }}
          />
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
