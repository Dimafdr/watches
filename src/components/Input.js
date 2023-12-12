import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const Input = ({addItem}) => {

    const [data, setData] = useState({
        text: '',
        offset: '',
        id: uuid()
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        setData({
            text: '',
            offset: '',
            id: uuid()
        })
        addItem(data)
    }

    const handleChange = ({target}) => {
        const {name, value} = target
        setData(prevData => ({...prevData, [name]: value}))
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="form" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <p>Title</p>
                    <input className="input__form" type="text" id="text" onChange={handleChange} value={data.text} name="text"/>
                </div>
                <div>
                    <p>Timezone offset</p>
                    <input className="input__form" type="number" id="offset" onChange={handleChange} value={data.offset} name="offset"/>
                </div>
                <div className="flex-col justify-center p-2 m-2" >

                    <button onClick={handleSubmit} id="ok-button" style={{margin: "1rem"}}>
                        Create watch
                    </button>
                </div>
            </form>
        </>
    );
};

export default Input;