import React from 'react';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  firstName: string;
  email: string;
};

const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors:
      !values.firstName
        ? {
          firstName: {
            type: 'required',
            message: '*',
          },
        }
        :
        !values.email.match(validEmailRegex) ? {
          email: {
            type: 'pattern',
            message: 'Invalid email address'
          }
        } : {}
  };
};

export default function ReactHookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(data => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      {errors?.firstName?.type === 'required' && <span className='text-danger text-center mx-2'>{errors.firstName.message}</span>}
      <input {...register("firstName")} placeholder="Sherif" />

      {errors?.email?.type === 'pattern' && <span className='text-danger text-center mx-2'>{errors.email.message}</span>}
      <input {...register("email")} placeholder="sherif@domain.com" />

      <input type="submit" />
    </form>
  );
}
