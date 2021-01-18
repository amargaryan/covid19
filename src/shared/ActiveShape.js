import React from 'react'
import { Sector } from 'recharts'

const classes = {
  chartCenterName: {
    fontSize: 12,
    fontWeight: 900,
    lineHeight: '11px',
    color: '#e0e0e0',
  },
  chartCenterPercent: {
    fontSize: 16,
    fontWeight: 900,
    lineHeight: '29px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#fff',
  },
  headingSpan: {
    fontWeight: 325,
    fontSize: 16,
    lineHeight: '22px',
    color: '#e0e0e0',
  },
  chartMainDiv: {
    alignItems: 'center',
  },
}

function ActiveShape(renderProps) {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = renderProps

  return (
    <g>
      <text
        // style={{ fontSize: 16,
        //   fontWeight: 900,
        //   lineHeight: '29px',
        //   display: 'flex',
        //   alignItems: 'center',
        //   textAlign: 'center',
        //   textTransform: 'capitalize',
        //   color: '#fff'}}
        x={cx}
        y={cy}
        dy={0}
        textAnchor="middle"
        fill="#FFF"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        // className={`${classes.chartCenterName} ${classes.pieChartItem}`}
        x={cx}
        y={cy}
        dy={10}
        textAnchor="middle"
        fill="#E0E0E0"
      >
        {`${payload.name}`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 13}
        outerRadius={innerRadius - 4}
        fill={fill}
      />
    </g>
  )
}

export default ActiveShape
