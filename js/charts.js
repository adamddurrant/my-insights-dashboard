//Event listeners
const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", reload);

//reload
function reload() {
  refreshButton.style.transform = "rotate(360deg)";
  setTimeout(() => {
    window.location.reload(true);
  }, 1000);
}

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

//Random bar chart data generator on load
const generateRandomData = () => {
  const arr = [];
  let total = 100;
  const numBars = 6;
  for (let i = 0; i < numBars - 1; i++) {
    const randomValue = Math.floor(Math.random() * total);
    total -= randomValue;
    arr.push(randomValue);
  }
  arr.push(total);
  return arr;
};

//Random bar chart dummy data
const data1 = generateRandomData();
const data2 = generateRandomData();
const data3 = generateRandomData();
const data4 = generateRandomData();

//Function calls
createChart("Avg. all", data1, "chartContainer1");
createChart("Cautious", data2, "chartContainer2");
createChart("Complaint", data3, "chartContainer3");
createChart("Confident", data4, "chartContainer4");
