import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '?apikey=SG0BnW91qgws212Db0GBPAb4DNygc1Io';
const urlRegion = 'http://dataservice.accuweather.com/locations/v1/regions';
// const urlCountry = 'http://dataservice.accuweather.com/locations/v1/countries/';

// http://dataservice.accuweather.com/locations/v1/countries/SAM?apikey=SG0BnW91qgws212Db0GBPAb4DNygc1Io

const fetchRegion = createAsyncThunk('region/fetchRegion', async () => {
  const response = await axios.get(`${urlRegion}${apiKey}`);
  return response.data;
});

// const fetchCountry = createAsyncThunk('country/fetchCountry', async (id) => {
//   const response = await axios.get(`${urlCountry}${id}${apiKey}`);
//   return response.data;
// });

const fetchCountry = createAsyncThunk('country/fetchCountry', async () => {
  const response = await axios.get('http://dataservice.accuweather.com/locations/v1/countries/SAM?apikey=SG0BnW91qgws212Db0GBPAb4DNygc1Io');
  return response.data;
});

export { fetchRegion, fetchCountry };
