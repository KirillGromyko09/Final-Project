// src/components/Checkout/Address/Address.jsx
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getCities, getWarehouses } from '../../../utils/api/novaPoshtaApi';

const Address = () => {
    const [cities, setCities] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            const citiesData = await getCities('');
            setCities(citiesData);
        };
        fetchCities();
    }, []);

    const handleCityChange = async (event) => {
        const cityRef = event.target.value;
        setSelectedCity(cityRef);
        const warehousesData = await getWarehouses(cityRef);
        setWarehouses(warehousesData);
    };

    const formik = useFormik({
        initialValues: {
            city: '',
            warehouse: ''
        },
        validationSchema: Yup.object({
            city: Yup.string().required('Required'),
            warehouse: Yup.string().required('Required')
        }),
        onSubmit: values => {
            // Save the selected address
            console.log(values);
        }
    });

    return (
        <Box>
            <Typography variant="h4">Select Delivery Address</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="city"
                    name="city"
                    label="City"
                    select
                    value={formik.values.city}
                    onChange={(event) => {
                        formik.handleChange(event);
                        handleCityChange(event);
                    }}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="">Select a city</option>
                    {cities.map(city => (
                        <option key={city.Ref} value={city.Ref}>
                            {city.Description}
                        </option>
                    ))}
                </TextField>
                <TextField
                    fullWidth
                    id="warehouse"
                    name="warehouse"
                    label="Warehouse"
                    select
                    value={formik.values.warehouse}
                    onChange={formik.handleChange}
                    error={formik.touched.warehouse && Boolean(formik.errors.warehouse)}
                    helperText={formik.touched.warehouse && formik.errors.warehouse}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="">Select a warehouse</option>
                    {warehouses.map(warehouse => (
                        <option key={warehouse.Ref} value={warehouse.Ref}>
                            {warehouse.Description}
                        </option>
                    ))}
                </TextField>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Save Address
                </Button>
            </form>
        </Box>
    );
};

export default Address;
