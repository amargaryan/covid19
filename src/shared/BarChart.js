import React from 'react'
import {
  BarChart as BarChartRe,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import CustomYAxisTick from 'components/shared/chartAxisTick/ChartAxisTick'
import { convertCount } from '../shared/helpers'
import ChartTooltip from '../shared/chartTooltip/ChartTooltip'

export default function BarChart({ data, dataKey, axisColor = '#E0E0E0', bars, legendRenderer }) {
  return (
    <ResponsiveContainer>
      <BarChartRe data={data} margin={{ top: 10 }}>
        <CartesianGrid vertical={false} strokeWidth={0.1} />
        <XAxis
          dataKey={dataKey}
          stroke={axisColor}
          tick={{ fontSize: 10, fill: axisColor }}
          tickLine={false}
          tickSize={2}
          strokeWidth={0.1}
          height={17}
        />
        <YAxis
          stroke={axisColor}
          tick={<CustomYAxisTick fontSize={10} fill={axisColor} tickFormatterY={convertCount} />}
          tickLine={false}
          tickSize={2}
          strokeWidth={0.2}
          width={27} // TODO
          scale="linear"
        />
        <Tooltip position={{ y: -10 }} content={<ChartTooltip />} cursor={false} />
        {legendRenderer && legendRenderer(bars)}
        {bars.map((bar) => (
          <Bar
            barSize={12}
            key={bar.dataKey}
            dataKey={bar.dataKey}
            stackId="Trucks"
            fill={bar.strokeColor}
          />
        ))}
      </BarChartRe>
    </ResponsiveContainer>
  )
}
