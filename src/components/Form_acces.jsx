import React, { useEffect } from 'react';
import { useState } from 'react';

import FormStile from '../Styles/app/form_acces.module.css'

export default function  Form() {
    const [error, setError] = useState({
        username: "",               
        password: "",
    })
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const validate = (x) =>{
        let val = x.target.value;
        if(x.target.name === "username"){
            if((!/\S+@\S+\.\S+/.test(val)) || (val.length < 6)){
                setError((prevError)=>{
                    return {
                        ...prevError,
                        [x.target.name]:"User name invalid"
                    }
                })
            }else setError({
                    ...error,//otra forma de usar el ser sin la arrow funtion
                    [x.target.name]:""
                })
        }
        else if(x.target.name === "password"){
            if(!/(?=.*[0-9])/.test(val)){
                setError((prevError)=>{
                    return {
                    ...prevError,
                    [x.target.name]:"Password must be 6 to 16 caracteres and 1 number min"
                    }
                })
            }else setError((prevError)=>{
                console.log(error)
                return{
                    ...prevError,
                    [x.target.name]: ""
                }
            })
        }
    };
    
    const handleChange = (x) =>{
        setData((actual)=>{
            return{
                ...actual,
                [x.target.name]:x.target.value
            }
        })
    }
    return (
        <footer>
            <form className={FormStile.form}>
                <div>
                    <label >User:  </label>
                    <input type="text" name="username" onChange={(x) => {validate(x)
                        handleChange(x)}}/>
                    {error.username && (<p className="danger">{error.username}</p>)}
                </div>
                <div>
                    <label >Password:  </label>
                    <input type="password" name="password" onChange={(x) => {validate(x)
                        handleChange(x)}}/>
                    {error.username && (<p className='danger'>{error.password}</p>)}
                    
                </div>
                <button>Submit</button>
            </form>
        </footer>
    )
}