import React from 'react';
import { Button } from './ui/button';

const StartQuizModal = ({ onStart }) => {
    return (
        <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-background border-2 border-border p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl text-primary font-semibold text-center mb-4">Welcome to the Quiz!</h2>
                <p className="text-center mb-6">
                    You will be given 5 minutes to start the quiz, and you have to attempt all questions to finish.
                </p>
                <div className="flex justify-center">
                    <Button onClick={onStart}>
                        Start Quiz
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default StartQuizModal;
