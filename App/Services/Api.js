import axios from 'axios';
import { NativeModules } from 'react-native';

const { Phone } = NativeModules;

const create = () => {
  const api = axios.create({
    baseURL: 'https://7s6pizsaij.execute-api.us-west-2.amazonaws.com/dev/jwt'
  });

  const generateGuestToken = async (name, sub) => {
    const response = await api.post('/', { name, sub });
    return response.data.token;
  };

  const exchangeGuestToken = (guestToken) => {
    return Phone.authenticate(guestToken);
  };

  return {
    generateGuestToken,
    exchangeGuestToken
  };
};

export default {
  create
};