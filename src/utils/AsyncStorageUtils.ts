import AsyncStorage from '@react-native-async-storage/async-storage';

//Saving a key value pair in AsyncStorage
export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (exception) {
    console.log('SavingAsyncStorage', exception);
  }
};

export const storeBoolean = async (key: string, value: boolean) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (exception) {
    console.log('SavingAsyncStorage Boolean', exception);
  }
};

//Saving a key object pair in AsyncStorage
export const storeObject = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (exception) {
    console.log('SavingAsyncStorage', exception);
  }
};

//Retrieving a key value pair in AsyncStorage
export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return '';
    }
  } catch (exception) {
    console.log('ReadingAsyncStorage', exception);
    return '';
  }
};

export const getBoolean = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return false;
    }
  } catch (exception) {
    console.log('ReadingAsyncStorage getBoolean', exception);
    return false;
  }
};

//Retrieving a key object pair in AsyncStorage
export const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    } else {
      return {};
    }
  } catch (exception) {
    console.log('ReadingAsyncStorage', exception);
    return {};
  }
};
