import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {Context} from "../CarContainer";


const CarForm = () => {
    const [errors,setErors] = useState(null);
    const {register,reset,handleSubmit} = useForm();
    const {setTrigger} = useContext(Context);
    const save = async (car) => {
    try {
        await carService.create(car)
        setErors(null)
        reset()
        setTrigger()
    }catch (e){
        setErors( e.response.data);
    }
    };
    return (<div>
        <form onSubmit={handleSubmit(save)}>
            <label >brand<input type="text" placeholder={'brand'}{...register('brand')}/></label>
            <label >price<input type="text" placeholder={'price'}{...register('price')}/></label>
            <label >year<input type="text" placeholder={'year'}{...register('year')}/></label>
            <button>Save</button>
        </form>
            {errors&&JSON.stringify(errors)}
        </div>
    );
};

export {CarForm};