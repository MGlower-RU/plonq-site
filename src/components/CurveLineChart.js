import { Line } from 'react-chartjs-2';

const data = {
  labels: [0, 10, 20, 30, 40, 50, 60, 70],
  datasets: [
    {
      label: 'Nicotine therapy',
      data: [90, 76, 64, 57, 53, 50, 48, 46],
      fill: false,
      borderColor: 'rgba(143, 217, 197, 0.5)',
    },
    {
      label: 'Mobile app',
      data: [90, 67.5, 53, 41, 32, 23, 19, 17],
      fill: false,
      borderColor: 'rgb(200, 187, 147)',
      borderWidth: 5,
    },
    {
      label: 'Medicines',
      data: [90, 59, 46, 40, 36, 34, 32, 30],
      fill: false,
      borderColor: 'rgba(139, 211, 247, 0.5)',
    },
  ]
};

const options = {
  type: 'line',
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: .5,
      borderWidth: 4,
    },
    point: {
      radius: 0
    }
  },
  scales: {
    y: {
      label: 'Интенсивность курения',
      min: 0,
      max: 100,
      ticks: {
        callback: (value) => value % 20 ? null : `${value}%`
      },
      scaleLabel: {
        display: true,
        labelString: "Percentage"
      },
      grid: {display: false}
    },
    x: {
      label: 'Дни',
      grid: {display: false},
      ticks: {
        callback: (val, i, arr) => (i !== 0 && i !== arr.length - 1) ? `${val}0` : null
      }
    }
  },
  plugins: {
    legend: false,
  },
};

export default function Chartjs() {
  return (
    <Line data={data} options={options} />
  )
}