import config from '../utils/config'
import {
  AsyncStorage
} from 'react-native'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

async function parseParams (params={}) {
  try {
    const data = await AsyncStorage.getItem('@insAndapp')
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'same-origin',
        authorization: data != null ? `Bearer ${data}` : ''
      }
    }
    if (params.method) {
      return {...defaultOptions, method: params.method || 'GET', body: JSON.stringify(params.data)}
    }
    return defaultOptions
  } catch (error) {
    throw error
  }
}

export const User = {
  guest (data) {
    return fetch(`${config.API_PATH}/guest`, {
      method: 'POST',
      headers: {
        credentials: 'same-origin',
        credentials: 'include',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: 'ccc'})
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  },
  login (data) {
    return fetch(`${config.API_PATH}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  },
  signup (data) {
    return fetch(`${config.API_PATH}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  },
  async uploadAvatar (data) {
    try {
      const params = await parseParams({
        method: 'POST',
        data
      })
      return fetch(`${config.API_PATH}/uploadAvatar`, params)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => data)
        .catch(error => console.error(error))
    } catch (error) {
      throw error
    }
  }
}