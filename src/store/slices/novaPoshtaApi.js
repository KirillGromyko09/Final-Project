import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "472a11eaf94d0363a7a1d1779069b782";

export const novaPoshtaApi = createApi({
  reducerPath: "novaPoshtaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.novaposhta.ua/v2.0/json/",
  }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: (search) => ({
        url: "",
        method: "POST",
        body: {
          apiKey: API_KEY,
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: {
            FindByString: search,
          },
        },
      }),
      transformResponse: (response) => response.data,
    }),
    getWarehouses: builder.query({
      query: (cityRef) => ({
        url: "",
        method: "POST",
        body: {
          apiKey: API_KEY,
          modelName: "AddressGeneral",
          calledMethod: "getWarehouses",
          methodProperties: {
            CityRef: cityRef,
          },
        },
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetCitiesQuery, useGetWarehousesQuery } = novaPoshtaApi;
