import { Link } from "react-router-dom";
import React from "react";
import "./Main.style.css";
import gymptilogo from "../../src/img/gymptilogo.svg";
import ApexCharts from 'apexcharts'

function Main() {
  var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  return (
    <div>
      <div>메인일뻔;;</div>
    </div>
  );
}

export default Main;
