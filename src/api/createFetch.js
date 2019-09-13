// @flow

import axios from 'axios'

const createFetch = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
  })

  return instance
}

export default createFetch
