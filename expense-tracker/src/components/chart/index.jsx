import Chart from "react-apexcharts";
export default function TransactionChartSummary({
  expense = 100,
  income = 100,
}) {
  const options = {
    labels: ["Expense", "Income"],
    color: ["#FD5E53", "#2173bf"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#FD5E53", "#2173bf"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };
  return (
    <Chart
      options={options}
      series={[expense, income]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
