import React from 'react';
import { Button } from './ui/button';

const IQResultModal = ({ iq, iqLabel, onClose }) => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=Hey%2C+I+got+${iq}+on+Mitsuri's+IQ+Test!+Check+out+this+chaotic+quiz+%F0%9F%91%89%F0%9F%8F%BC+https%3A%2F%2Fmitsuri-quiz-app.vercel.app%2F`;

    return (
        <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-background border-2 border-border p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl text-primary font-semibold text-center mb-4">Your IQ Result</h2>
                <p className="text-center text-primary text-lg mb-4">
                    IQ: {iq}
                </p>
                <p className="text-center text-lg mb-4">
                    {iqLabel}
                </p>
                <div className="flex justify-center gap-3">
                    <Button onClick={onClose}>Go back to Home</Button>
                    <Button>
                        <a as="a" href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                            Share on Twitter
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default IQResultModal;
