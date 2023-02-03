//DONUT

//CHARTS
const createChart = (percentages, containerId) => {
  const chartContainer = document.getElementById(containerId);
  const chart = document.createElement("div");
  chart.classList.add("chart");

  percentages.forEach((percentage) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.setAttribute("data-tooltip", `${percentage}%`);
    bar.style.flexBasis = `${percentage}%`;
    chart.appendChild(bar);
  });

  chartContainer.appendChild(chart);
};

//Dummy data
const data1 = [20, 30, 25, 10, 10, 5];
const data2 = [40, 30, 20, 5, 5, 0];
const data3 = [15, 25, 20, 20, 15, 5];
const data4 = [50, 25, 15, 5, 5, 0];

//Invocations
createChart(data1, "chartContainer1");
createChart(data2, "chartContainer2");
createChart(data3, "chartContainer3");
createChart(data4, "chartContainer4");
