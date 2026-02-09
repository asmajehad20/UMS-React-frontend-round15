import React from 'react'
import { useForm } from 'react-hook-form'
// import axios from "axios";
// import useFetch from "../../hooks/useFetch";

export default function Create() {
    const {register, handleSubmit } = useForm();
    const CreateUser = (values)=>{
        console.log(values);
    }
    return (
        <form className='py-5' onSubmit={handleSubmit(CreateUser)}>
            <div className="form-floating mb-3">
                <input {...register('name')} type="text" className="form-control" id="name" placeholder="" />
                <label htmlFor="name">User Name</label>
            </div>

            <div className="form-floating mb-3">
                <input {...register('email')} type="email" className="form-control" id="email" placeholder="" />
                <label htmlFor="email">User Email</label>
            </div>

            <div className="form-floating mb-3">
                <input {...register('age')} type="age" className="form-control" id="age" placeholder="" />
                <label htmlFor="age">User Age</label>
            </div>

            <button type='submit' className='btn btn-outline-success'>Create</button>
        </form>
    )
}
