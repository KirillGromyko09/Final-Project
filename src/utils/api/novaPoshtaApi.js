import axios from 'axios';

const API_KEY = 'YOUR_NOVA_POSHTA_API_KEY';

export const getCities = async (search) => {
    const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
            FindByString: search
        }
    });
    return response.data.data;
};

export const getWarehouses = async (cityRef) => {
    const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: API_KEY,
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
            CityRef: cityRef
        }
    });
    return response.data.data;
};
