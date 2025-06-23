import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Input } from './ui/input'

const HomePage = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleSumit = () => {
        localStorage.setItem("username", username)
        navigate("/quiz")
        console.log('Starting quiz for:', username)
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 relative bg-background'>
            <div className='w-full z-20 max-w-3xl space-y-2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-center font-bold'>Welcome to Mitsuri's IQ Test</h1>
                <p className='text-xs sm:text-sm lg:text-md text-center px-12 md:px-32'>Before we begin judging your intelligence, tell us your <b>name</b>. Don't worry, it won't help your score 😌</p>
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="auraless"
                    className="w-1/2 mt-6"
                />
                <Button
                    onClick={handleSumit}
                    disabled={username.length === 0}
                    className="w-1/2"
                >
                    Start Quiz
                </Button>
            </div>

            <div className='absolute h-20 bg-yellow-200 w-9/10 -rotate-3 blur-3xl -translate-y-20'></div>
            <div className='absolute h-20 bg-red-500 w-9/10 -rotate-3 blur-3xl translate-y-0'></div>
            <div className='absolute h-20 bg-pink-500 w-9/10 -rotate-3 blur-3xl translate-y-20'></div>
        </div>
    )
}

export default HomePage