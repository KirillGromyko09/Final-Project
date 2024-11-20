import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useGetCitiesQuery,
  useGetWarehousesQuery,
} from "../../../store/slices/novaPoshtaApi";
import CartSummary from "./../../Cart/CartSummary";

const CheckoutForm = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const { data: cities } = useGetCitiesQuery(city, { skip: !city });
  const { data: warehouses } = useGetWarehousesQuery(selectedCity, {
    skip: !selectedCity,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      warehouse: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      city: Yup.string().required("Required"),
      warehouse: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <h1>Оформление заказа</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Имя</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Город</label>
          <input
            type="text"
            name="city"
            onChange={(e) => {
              formik.handleChange(e);
              setCity(e.target.value);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {cities && (
            <ul>
              {cities.map((city) => (
                <li key={city.Ref} onClick={() => setSelectedCity(city.Ref)}>
                  {city.Description}
                </li>
              ))}
            </ul>
          )}
          {formik.touched.city && formik.errors.city ? (
            <div>{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Отделение</label>
          <select
            name="warehouse"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.warehouse}
          >
            {warehouses &&
              warehouses.map((wh) => (
                <option key={wh.Ref} value={wh.Ref}>
                  {wh.Description}
                </option>
              ))}
          </select>
          {formik.touched.warehouse && formik.errors.warehouse ? (
            <div>{formik.errors.warehouse}</div>
          ) : null}
        </div>
        <button type="submit">Оформить заказ</button>
      </form>
      <CartSummary />
    </div>
  );
};

export default CheckoutForm;
