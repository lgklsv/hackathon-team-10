import React from 'react';
import styles from './form.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'

type FormValues = {
  eMail: string
  password: string
}

const Form = () => {

  const {register,
        formState: {errors},
        handleSubmit,
  } = useForm<FormValues>({mode: 'all'})

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
   <div className={styles.form_container}>
     <form onSubmit={handleSubmit(onSubmit)}>
       <label>
         <p>E-mail</p>
       <input
         {...register('eMail', {required: 'Поле e-mail обязательно к заполнению'})}
         type="email"
         placeholder="Введите ваш e-mail..."
       />
       </label>
       <div>{errors?.eMail && <p className={styles.error_message}>{errors?.eMail.message}</p>}</div>
       <label>
         <p>Password</p>
       <input {...register('password', { required: 'Поле пароля обязательно к заполнению',
         minLength: {
            value: 10,
            message: 'Минимальная длина пароля - 10 символов'
         }})}
              type="password"
              placeholder='Введите ваш пароль...'/>
       </label>
       <div>{errors?.password && <p className={styles.error_message}>{errors?.password?.message}</p>}</div>
       <input className={styles.submit_input} type="submit" value='Регистрация'/>
     </form>
   </div>
  );
};

export default Form;
