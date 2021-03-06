import React from 'react';
import { useFormikContext } from 'formik';

import CustomTextInput from '../components/CustomTextInput';
import CustomErrorMessage from '../components/CustomErrorMessage';

function CustomFormField({ name, width, ...otherProps }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <CustomTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <CustomErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default CustomFormField;
