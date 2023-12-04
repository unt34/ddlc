import { useState, useEffect } from 'react';

function formatTimestampToTime(timestamp) {
    const date = new Date(timestamp);

    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    return `${days}d:${hours}:${minutes}:${seconds}`;
}

export default function Timer({ label, date }) {
    const [time, setTime] = useState('--:--:--')

    useEffect(() => {
        setInterval(() => {
            const countDownDate = new Date(date).getTime();

            if (!countDownDate) return;

            let now = new Date().getTime();

            if (countDownDate < now) return setTime(() => formatTimestampToTime(now - countDownDate));

            setTime(() => formatTimestampToTime(countDownDate - now))
        }, 1000)
    }, [])

    return (
        <div className='timer-container'>
            <h2>
                {time}
                <span>{label}</span>
            </h2>
        </div>

    )
}