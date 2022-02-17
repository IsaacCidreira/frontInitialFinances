import Chart from 'react-apexcharts';

const Dashboard = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    grid: {
      show: false,
    },
    fill: {
      colors: ['#00ff00', '#00ff7f', '#ff0000', '#ff4040'],
    },
    stroke: {
      colors: ['#00ff00', '#00ff7f', '#ff4040', '#ff4040'],
    },
  };

  const series = [
    {
      name: 'Recebido',
      type: 'area',
      data: [1200, 1000, 900, 1434],
    },
    {
      name: 'A receber',
      type: 'area',
      data: [300, 623, 333.1, 834],
    },
    {
      name: 'Pago',
      type: 'area',
      data: [1300, 623, 333.1, 1234],
    },
    {
      name: 'A Pagar',
      type: 'area',
      data: [300, 223, 133.1, 534],
    },
  ];
  return (
    <div>
      <Chart
        options={options}
        type="area"
        series={series}
        width={300}
        height={200}
      />
    </div>
  );
};

export default Dashboard;
