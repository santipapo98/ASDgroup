import React from 'react'
import styles from './LoginForm.module.scss'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

type Props = {

}

function LoginForm({ }: Props) {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        if (data.user === 'grupoASD@gmail.com' && data.password === "Rjs2022*") {
            console.log('exito')
        } else {
            swal({
                title: "The user or password are incorrect!",
                text: "Please try again",
                icon: "error",
            });
        }
    }

    return (
        <div className={styles.loginFormContainer}>
            <h1>Login</h1>
            <p>Please enter the information to login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.user?.type === 'required' && <p>This field is required</p>}
                {errors.user?.type === 'maxLength' && <p>Only 25 characters</p>}
                {errors.user?.type === 'minLength' && <p>More than 3 characters</p>}
                {errors.user?.type === 'pattern' && <p>Invalid e-mail address</p>}
                <input type="text" placeholder='User' {...register('user', {
                    required: true, maxLength: 25, minLength: 3, pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: ""
                    }
                })} />
                {errors.password?.type === 'required' && <p>This field is required</p>}
                {errors.password?.type === 'maxLength' && <p>Only 10 characters</p>}
                {errors.password?.type === 'minLength' && <p>More than 8 characters</p>}
                {errors.password?.type === 'pattern' && <p>At least 1 uppercase</p>}
                <input type="password" placeholder='Password' {...register('password', {
                    required: true, maxLength: 10, minLength: 8, pattern: {
                        value: /[A-Z]/,
                        message: ""
                    }
                })} />
                <input type="submit" value='Login' />
            </form>
        </div >
    )
}

export default LoginForm