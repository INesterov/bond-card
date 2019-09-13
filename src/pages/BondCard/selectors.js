import { createSelector } from 'reselect'
import subWeeks from 'date-fns/subWeeks'
import subMonths from 'date-fns/subMonths'
import subQuarters from 'date-fns/subQuarters'
import subYears from 'date-fns/subYears'
import isWithinInterval from 'date-fns/isWithinInterval'

const subFunctions = {
  week: subWeeks,
  month: subMonths,
  quarter: subQuarters,
  year: subYears,
}

export const selectBondData = createSelector(
  (state) => state.bondCard.data,
  (state) => state.bondCard.period,
  (data, period) => {
    if (period === 'max') return data

    const subFunction = subFunctions[period]
    const endDate = new Date()
    const startDate = subFunction(endDate, 1)

    const result = data.filter((value) => {
      return isWithinInterval(
        new Date(value.date),
        { start: startDate, end: endDate }
      )
    })

    return result
  },
)
