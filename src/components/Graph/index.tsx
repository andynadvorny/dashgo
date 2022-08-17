import { Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic"

interface GraphProps {
  title: string;
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      new Date("2022-03-23T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" }),
      new Date("2022-03-24T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" }),
      new Date("2022-03-25T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" }),
      new Date("2022-03-26T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" }),
      new Date("2022-03-27T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" }),
      new Date("2022-03-28T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" }),
      new Date("2022-03-29T00:00:00.000Z").toLocaleString('en-US', { day: "2-digit", month: "short" })
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3, 
    }
  }
}

const series = [
  { 
    name: 'series1', 
    data: [31, 120, 10, 43, 21, 123, 45]
  }
]

export function Graph({ title }: GraphProps) {
  return (
    <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">{title}</Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  )
}