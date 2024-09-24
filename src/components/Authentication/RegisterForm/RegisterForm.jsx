import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {registerSuccess} from "../../../store/slices/authSlice.js";
import {StorageService} from './../../../utils/storage/StorageService.js'

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const storageService = new StorageService(useLocalStorage)


  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      saveUserData(values);
      dispatch(registerSuccess({email: values.email, password: values.password}));
      onClose()
    }
  };
  return <div></div>;
};

export default RegisterForm;
