import React, { useEffect, useState } from 'react';

const TimerComponent = ({ startTime }) => {
    const [timeLeft, setTimeLeft] = useState(startTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div className="flex justify-center items-center text-foreground">
            <p className="text-xl font-semibold">
                Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </p>
        </div>
    );
}

export default TimerComponent;
