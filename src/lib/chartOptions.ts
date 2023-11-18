export const trendOption = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    datalabels:{
      display:false
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
  // aspectRatio: 5.5,
  // aspectRatio: 2,
  animation: {
    duration: 0,
  },
  
}