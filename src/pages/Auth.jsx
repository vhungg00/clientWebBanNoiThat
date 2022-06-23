import { useForm } from "react-hook-form";

import styles from './Auth.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Auth() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const name = watch('name');
  const email = watch('email');
  return (
    <div className={cx('wrapper')}>
      <h3 style={{ marginTop: "100px" }}>xin chao</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue='name' {...register("name")} />
        <p>{name}</p>
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("email", {
          required: true, pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
          },
        })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span></span>}

        <input type="submit" />
      </form>

    </div>
  );
}

export default Auth;
