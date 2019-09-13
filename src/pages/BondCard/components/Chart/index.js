// @flow

import React from 'react'
import { useSelector } from 'react-redux'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import format from 'date-fns/format'
import { selectBondData } from '../../selectors'

const formatDate = (value) => {
  const date = new Date(value)

  return format(date, 'dd.MM.yy')
}

const Chart = () => {
  const data = useSelector(selectBondData)
  const { type } = useSelector((state) => state.bondCard)

  return (
    <LineChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={formatDate} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey={`values.${type}`} name={type} />
    </LineChart>
  )
}

export default Chart
