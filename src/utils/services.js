import traversonPromise from 'traverson-promise'

let ROOT_URI = null

if (__DEV__) {
  ROOT_URI = 'http://swapi.co/api/people'
}

if (__PROD__) {
  ROOT_URI = 'http://swapi.co/api/people'
}

export function createAPI () {
  return traversonPromise.from(ROOT_URI).json()
}

export default createAPI()
