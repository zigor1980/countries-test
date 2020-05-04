import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const apiClient = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  headers: {
    'Content-Type': 'application/json',
  },
  adapter: cache.adapter,
});

export default {
  getCountriesByCode: (code) => apiClient.get(`/alpha/${code}`),
  getCountriesByCurrency: (currency) => apiClient.get(`/currency/${currency}`),
  getAvailableCodes: () => apiClient.get('/all?fields=alpha2Code;alpha3Code'),
  getCountriesByName: (name, fullText) => apiClient.get(`/name/${name}`, {
    params: {
      fullText,
    },
  }),
};
