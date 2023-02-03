//Create chart container, heading and wrapper
const createChart = (title, percentages, containerId) => {
  const chartContainer = document.getElementById(containerId);
  const heading = document.createElement("h5");
  const chart = document.createElement("div");
  heading.innerHTML = title;
  chart.classList.add("chart");

  //Apply percentage data to bars and bar tooltips & populate elements
  percentages.forEach((percentage) => {
    const bar = document.createElement("div");
    bar.classList.add("bar", "tooltip");
    bar.setAttribute("data-tooltip", `${percentage}%`);
    bar.style.flexBasis = `${percentage}%`;
    chart.appendChild(bar);
  });
  chartContainer.appendChild(chart);
  chartContainer.prepend(heading);
};

//Dummy data
const data1 = [20, 30, 25, 10, 10, 5];
const data2 = [20, 30, 20, 5, 5, 20];
const data3 = [15, 25, 20, 20, 15, 5];
const data4 = [43, 22, 15, 5, 5, 10];

//Function calls
createChart("Avg. all", data1, "chartContainer1");
createChart("Cautious", data2, "chartContainer2");
createChart("Complaint", data3, "chartContainer3");
createChart("Confident", data4, "chartContainer4");
