import * as React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import { useNavigate } from "react-router";

interface MyFormValues {
  name: string;
  surname: string;
  phone: string;
  email: string;
  birthday: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export default function ShipmentForm() {
  const navigate = useNavigate()
  const validateEmail = (value: string) => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorMessage = "Invalid email address";
    }
    return errorMessage;
  };

  const validateRequired = (value: string) => {
    let errorMessage;
    if (!value) {
      errorMessage = "Field is required";
    }
    return errorMessage;
  };

  const initialValues: MyFormValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    birthday: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        try {
          const response = await fetch('REACT_APP_FORM_URL', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            console.log('Data sent successfully');
            navigate('/');
          } else {
            alert('Error sending data to the API');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      <Form className="grid grid-cols-2 gap-4">
        <label htmlFor="name" className="flex flex-col">
          Name
          <Field
            id="name"
            required
            validate={validateRequired}
            name="name"
            placeholder="Name"

          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="name"
          />
        </label>

        <label htmlFor="surname" className="flex flex-col">
          Surname
          <Field
            id="surname"
            required
            validate={validateRequired}
            name="surname"
            placeholder="Surname"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="surname"
          />
        </label>

        <label htmlFor="phone" className="flex flex-col col-span-2">
          Phone Number
          <Field
            id="phone"
            required
            validate={validateRequired}
            name="phone"
            placeholder="Phone"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="phone"
          />
        </label>

        <label htmlFor="email" className="flex flex-col col-span-2">
          Email
          <Field
            required
            validate={validateEmail}
            id="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="email"
          />
        </label>

        <label
          htmlFor="birthday"
          className="flex flex-col col-span-2"
        >
          Date of birth
          <Field
            id="birthday"
            required
            validate={validateRequired}
            name="birthday"
            placeholder="Date of birth"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="birthday"
          />
        </label>

        <label
          htmlFor="address"
          className="flex flex-col col-span-2"
        >
          Address
          <Field
            id="address"
            required
            validate={validateRequired}
            name="address"
            placeholder="Address"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="address"
          />
        </label>

        <label htmlFor="city" className="flex flex-col col-span-2">
          City
          <Field
            id="city"
            required
            validate={validateRequired}
            name="city"
            placeholder="City"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="city"
          />
        </label>

        <label htmlFor="state" className="flex flex-col">
          State
          <Field
            id="state"
            required
            validate={validateRequired}
            name="state"
            placeholder="State"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="state"
          />
        </label>

        <label htmlFor="zip" className="flex flex-col">
          Zip Code
          <Field
            id="zip"
            required
            validate={validateRequired}
            name="zip"
            placeholder="Zip Code"
          />
          <ErrorMessage
            className="text-red-500"
            component="div"
            name="zip"
          />
        </label>

        <div className="text-center col-span-2">
          <button
            type="submit"
            className="bg-lego-yellow text-black py-2 px-10 rounded-full disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
