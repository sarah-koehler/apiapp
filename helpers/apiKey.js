
import { AsyncStorage } from "react-native";

export const getApiAccessDataFromStorage = (callback) => {
  AsyncStorage.multiGet(['apiKey', 'apiSecret'], (errors, results) => {
    if (errors && errors.length > 0) {
      console.log('could not fetch items:', ...errors);
    }
    if (results && results.length > 0) {
      const newState = {}
      // each entry is an array with two items, first is the key, second is the value
      results.forEach((entry) => { if(entry[1]) { newState[entry[0]] = entry[1]} })
      callback && callback(newState)
    }
  })
}
export const setApiAccessDataInStorage = ({ apiKey, apiSecret }, callback) => {
  const newStorageValues = [ [ 'apiKey', apiKey], [ 'apiSecret', apiSecret]];
  AsyncStorage.multiSet(newStorageValues, (errors) => {
    if(errors && errors.length > 0) {
       console.log('error storing data:', ...errors)
    }
  })
  callback && callback()
}
