import React from 'react'
import QuizCard from './QuizCard'
import {
    Carousel,
    CarouselContent,
    CarouselIndicator,
    CarouselItem,
    CarouselNavigation,
} from "@/components/ui/carousel"

import questions from '@/data/questions'

const QuizPage = () => {
    const randomTenQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(10, questions.length));

    return (
        <div className='flex flex-col items-center justify-center min-h-screen w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 relative bg-background overflow-hidden'>
            <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center justify-center z-20">
                <Carousel className="w-full">
                    <CarouselContent className="flex">
                        {randomTenQuestions.map((question, index) => (
                            <CarouselItem key={index} className="flex mb-0 w-full">
                                <QuizCard
                                    question={question}
                                    questionNumber={index + 1}
                                    totalQuestions={randomTenQuestions.length}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                        <CarouselNavigation alwaysShow />
                        <CarouselIndicator />
                    </div>
                </Carousel>
            </div>

            {/* Responsive background elements */}
            <div className='absolute h-12 sm:h-16 md:h-20 bg-yellow-200 w-4/5 sm:w-3/4 md:w-4/5 lg:w-9/10 -rotate-3 blur-2xl sm:blur-3xl -translate-y-12 sm:-translate-y-16 md:-translate-y-20 z-0'></div>
            <div className='absolute h-12 sm:h-16 md:h-20 bg-red-500 w-4/5 sm:w-3/4 md:w-4/5 lg:w-9/10 -rotate-3 blur-2xl sm:blur-3xl translate-y-0 z-0'></div>
            <div className='absolute h-12 sm:h-16 md:h-20 bg-pink-500 w-4/5 sm:w-3/4 md:w-4/5 lg:w-9/10 -rotate-3 blur-2xl sm:blur-3xl translate-y-12 sm:translate-y-16 md:translate-y-20 z-0'></div>
        </div>
    )
}

export default QuizPage