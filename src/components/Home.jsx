import React from 'react'
import WelcomeModal from './WelcomeModal'

const Home = () => {
    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <h1 className='text-3xl font-bold underline'>Hello World</h1>
            <WelcomeModal />
        </div>
    )
}

export default Home