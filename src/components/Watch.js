import { useEffect, useState } from 'react'
import '../App.css';

const Watch = ({id, title, timezoneOffset, deleteItem}) => {
    const [clock, setClock] = useState(() => ({
        hours: 0,
        minutes: 0,
        seconds: 0
    }))

    const hoursOffset = timezoneOffset || 0

    useEffect(() => {
        let timer

        const loop = () => {
            const now = new Date();
            setClock({
                hours: (now.getHours() + hoursOffset) % 24,
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            })
            const nextTick = Math.max(1, 1000 - (now.getTime() % 1000))
            timer = setTimeout(loop, nextTick)
        }
        loop()

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <>
            <h1>{title || 'Time is:'}</h1>
            <p>{clock.hours + "h " + clock.minutes + "m " + clock.seconds + "s"}</p>
            <button type="button" name="delete" onClick={() => deleteItem(id)}>X</button>
            <div
                className="clock"
                style={
                    {
                        '--hours': clock.hours,
                        '--minutes': clock.minutes,
                        '--seconds': clock.seconds,
                    }
                }
            >
                <span className="clock__hours" />
                <span className="clock__minutes" />
                <span className="clock__seconds" />
            </div>
        </>
    );
};

export default Watch;