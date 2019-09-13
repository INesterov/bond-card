// @flow

import createFetch from '../createFetch'

export const getBondRequest = (isin: string) => {
  const request = createFetch()

  return request.get(`/bond/${isin}`)
}
