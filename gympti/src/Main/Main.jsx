import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Main.style.css";
import gymptilogo from "../../src/img/gymptilogo.svg";
import ReactApexCharts from "react-apexcharts";

function Main() {
  const [chartOptions] = useState({
    series: [
      {
        name: "파란색",
        data: [40, 29, 33, 36, 32, 32, 33, 40, 29, 33, 36, 32],
      },
      {
        name: "검은색",
        data: [12, 11, 14, 18, 17, 13, 13, 14, 18, 17, 13, 13],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "달달 무슨달 쟁반같이 둥근 달",
      align: "center",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      title: {
        text: "월",
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: false,
      offsetY: -25,
      offsetX: -5,
    },
  });

  return (
    <div>
      <ReactApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Main;
