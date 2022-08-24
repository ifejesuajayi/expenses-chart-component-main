let charts = document.getElementById("myChart").getContext("2d");

let barChart = new Chart(charts, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "$",
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        borderRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          borderColor: "hsl(33, 100%, 98%)",
        },
        ticks: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
          borderColor: "hsl(33, 100%, 98%)",
        },
      },
    },
  },
});
