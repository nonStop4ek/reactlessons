import React, {useState} from 'react';

const CarForm = ({setOnSave}) => {
    const initialState={

        brand:'',
        price:'',
        year:''
    }
    const [car,setCar] = useState(initialState);

    const inputHandle=(e)=> {
         setCar(prevState => ({...prevState,[e.target.name]:e.target.value}))
    }
const save=(e)=>{
        e.preventDefault()
    fetch('http://owu.linkpc.net/carsAPI/v1/cars',
        {headers:{'content-type':'application/json'},
            body:JSON.stringify(car),
            method:'POST'
        }).then(value => value.json()).then(() => {
        setOnSave(prev=>!prev)
        setCar(initialState)
    })
}
    return (
        <form onSubmit={save}>
            <div><label>price:<input type="text" value={car.price} name={'price'} onChange={inputHandle}/></label></div>
            <div><label>brand:<input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/></label></div>
            <div><label>year:<input type="text" value={car.year} name={'year'} onChange={inputHandle}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};