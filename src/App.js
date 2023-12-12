import './App.css';
import Watch from "./components/Watch";
import React, {useState} from 'react';
import Input from "./components/Input";

function App() {
    const [watches, setWatches] = useState([])

    const addItem = (newWatch) => {
        console.log(newWatch)
        setWatches([...watches, newWatch]);
    }

    const deleteItem = (deletedItemId) => {
        const newWatchesList = watches.filter((watch) => watch.id !== deletedItemId)
        setWatches(newWatchesList)
    }

    return (
        <div>
            <Input addItem={addItem}/>
            <ul style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}}>
                {watches.map((watch) => {
                    return (
                        <li>
                            <Watch key={watch.id} id={watch.id} deleteItem={deleteItem} title={watch.text} timezoneOffset={Number(watch.offset)} />
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default App;
