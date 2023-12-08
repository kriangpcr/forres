import Header from '../mainpage/headerdashboard'
import './dashboard.css'
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

      <div className="App">
        <div className="dataCard revenueCard">
          <Line
            data={{
              labels: courseData.map((data) => data.label),
              datasets: [
                {
                  label: "premium",
                  data: courseData.map((data) => data.premium),
                  backgroundColor: "#845E00",
                  borderColor: "#845E00",
                },
                {
                  label: "alaska",
                  data: courseData.map((data) => data.alaska),
                  backgroundColor: "#0C6400",
                  borderColor: "#0C6400",
                }, {
                  label: "dimsum",
                  data: courseData.map((data) => data.dimsum),
                  backgroundColor: "#003564",
                  borderColor: "#003564",
                }, {
                  label: "izakaya",
                  data: courseData.map((data) => data.izakaya),
                  backgroundColor: "#3D0064",
                  borderColor: "#3D0064",
                }, {
                  label: "yakiniku",
                  data: courseData.map((data) => data.yakiniku),
                  backgroundColor: "#640043",
                  borderColor: "#640043",
                }, {
                  label: "stir",
                  data: courseData.map((data) => data.stir),
                  backgroundColor: "#640000",
                  borderColor: "#640000",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Monthly Revenue & Cost",
                },
              },
            }}
          />
        </div>

        <div className="dataCard customerCard">
          <Bar
            data={{
              labels: courseData.map((data) => data.label),
              datasets: [
                {
                  label: "premium",
                  data: courseData.map((data) => data.premium),
                  backgroundColor: [
                    '#845E00',
                  ],
                  borderRadius: 5,
                }, {
                  label: "alaska",
                  data: courseData.map((data) => data.alaska),
                  backgroundColor: ['#0C6400',
                  ],
                  borderRadius: 5,
                }, {
                  label: "dimsum",
                  data: courseData.map((data) => data.dimsum),
                  backgroundColor: ['#003564',
                  ],
                  borderRadius: 5,
                }, {
                  label: "izakaya",
                  data: courseData.map((data) => data.izakaya),
                  backgroundColor: ['#3D0064',
                  ],
                  borderRadius: 5,
                }, {
                  label: "yakiniku",
                  data: courseData.map((data) => data.yakiniku),
                  backgroundColor: ['#640043',
                  ],
                  borderRadius: 5,
                }, {
                  label: "stir",
                  data: courseData.map((data) => data.stir),
                  backgroundColor: ['#640000',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Sell each month",
                },
              },
            }}
          />
        </div>

        <div className="dataCard categoryCard">
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    '#845E00',
                    '#0C6400',
                    '#003564',
                    '#3D0064',
                    '#640043',
                    '#640000',
                  ],
                  borderColor: [
                    '#845E00',
                    '#0C6400',
                    '#003564',
                    '#3D0064',
                    '#640043',
                    '#640000',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Sell in 1 year",
                },
              },
            }}
          />
        </div>
      </div>

      <div className='bottom'>
        <div className='bottom_item'>
          Premium <span className='totalsell'>32,123,400</span>
        </div>
        <div className='bottom_item'>
          alaska <span className='totalsell'>28,724,250</span>
        </div>
        <div className='bottom_item'>
          dimsum <span className='totalsell'>25,200,450</span>
        </div>
        <div className='bottom_item'>
          izakaya <span className='totalsell'>34,523,400</span>
        </div>
        <div className='bottom_item'>
          yakiniku <span className='totalsell'>42,700,300</span>
        </div>
        <div className='bottom_item'>
          stir <span className='totalsell'>23,200,125</span>
        </div>
      </div>

    </>
  );
}

