import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { get, useForm } from 'react-hook-form';

const UsersForm = ({ getMovies, type, desels }) => {

    const clear = () => {
        reset({
            first_name: "",
            last_name: "", 
            email: "",      
            password: "",
            birthday: "" 
        })
    }

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (type) {
            reset(type)


        } else {
            reset({
                first_name: "",
                last_name: "", 
                email: "",      
                password: "",
                birthday: "" 
            });
        }
    }, [type])

    const submit = (data) => {
        console.log(data);

        if (type) {

            axios.put(`https://users-crud1.herokuapp.com/users/${type.id}/`, data)
                .then(() => {
                    getMovies();
                    desels();
                  
                })
                .catch((error) => console.log(error.response?.data));

        } else {

            axios.post("https://users-crud1.herokuapp.com/users/", data)
                .then(() => getMovies())
                .catch((error) => console.log(error.response?.data));
        }
        clear();
    }


    return (
        <form onSubmit={handleSubmit(submit)} >
            <h2>NEW USER</h2>
            <div className="input-group mb-3">

                <label htmlFor="first_name"><i class='bx bx-male'></i>

                </label>
                <input className='form-control' placeholder='fisrt name' {...register("first_name")} type="text" id='first_name' />
            <div className="input-group mb-3">

                <label htmlFor="first_name"></label>
                <input className='form-control' placeholder='last name' {...register("last_name")} type="text" id='last_name' />
            </div>
            </div>
            <div className="input-group mb-3">

                <label htmlFor="email"><i class='bx bx-envelope'></i></label>
                <input className='form-control' placeholder='email' {...register("email")} type="text" id='email' />
            </div>
            <div className="input-group mb-3">

                <label htmlFor="password"><i class='bx bxs-lock-alt' ></i></label>
                <input className='form-control' placeholder='password' {...register("password")} type="text" id='password' />
            </div>
            <div className="input-group mb-3">

                <label htmlFor="birthday"><i class='bx bxs-cake' ></i></label>
                <input className='form-control' placeholder='birthday' {...register("birthday")} type="date" id='birthday' />
            </div>
            <button className='btn-submit'>submit</button>
        </form>
    );
};

export default UsersForm;