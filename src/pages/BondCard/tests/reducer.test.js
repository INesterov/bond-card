import reducer, {
  changePeriod,
  changeType,
  getBondDataAction,
  getBondDataSuccessAction,
} from '../ducks'

describe('bond card reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      period: 'week',
      type: 'yield',
      data: [],
      isLoading: false,
    })
  })

  it('should handle changePeriod', () => {
    expect(
      reducer(undefined, changePeriod('year'))
    ).toEqual({
      period: 'year',
      type: 'yield',
      data: [],
      isLoading: false,
    })
  })

  it('should handle changeType', () => {
    expect(
      reducer(undefined, changeType('price'))
    ).toEqual({
      period: 'week',
      type: 'price',
      data: [],
      isLoading: false,
    })
  })

  it('should handle getBondDataAction', () => {
    expect(
      reducer(undefined, getBondDataAction())
    ).toEqual({
      period: 'week',
      type: 'yield',
      data: [],
      isLoading: true,
    })
  })

  it('should handle getBondDataSuccessAction', () => {
    const data = [1, 2, 3, 4]

    expect(
      reducer(undefined, getBondDataSuccessAction(data))
    ).toEqual({
      period: 'week',
      type: 'yield',
      data: data,
      isLoading: false,
    })
  })
})
