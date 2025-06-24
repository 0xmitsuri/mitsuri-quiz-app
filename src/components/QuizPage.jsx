import React, { useState, useEffect } from 'react'
import QuizCard from './QuizCard'
import StartQuizModal from './StartQuizModal'
import TimerComponent from './TimerComponent'
import { Button } from "@/components/ui/button"
import questions from '@/data/questions'
import IQResultModal from './IQResultModal' // Import the IQResultModal component
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { useNavigate } from 'react-router-dom'

const QuizPage = () => {
    const [tenQuestions, setTenQuestions] = useState([]);
    const [quizStarted, setQuizStarted] = useState(false);
    const [startTime, setStartTime] = useState(5 * 60);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [fakeCorrectAnswers, setFakeCorrectAnswers] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [iq, setIq] = useState(null);
    const [iqLabel, setIqLabel] = useState('');
    const [showIQModal, setShowIQModal] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const getQuestionsAndSetToLocalStorage = () => {
            const storedQuestions = localStorage.getItem("tenQuestions");

            if (storedQuestions) {
                setTenQuestions(JSON.parse(storedQuestions));
            } else {
                const randomTenQuestions = [...questions]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, Math.min(10, questions.length));

                setTenQuestions(randomTenQuestions);
                localStorage.setItem("tenQuestions", JSON.stringify(randomTenQuestions));
            }

            const storedIq = localStorage.getItem("iq");
            const storedIqLabel = localStorage.getItem("iqLabel");
            if (storedIq && storedIqLabel) {
                setIq(storedIq);
                setIqLabel(storedIqLabel);
                setShowIQModal(true);
            }
        }

        getQuestionsAndSetToLocalStorage();
    }, []);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setCorrectAnswers(0);
        setFakeCorrectAnswers(0);
        setQuizCompleted(false);
        setIq(null);
        setIqLabel('');
    }

    const calculateIQ = (correctAnswers, fakeCorrectAnswers) => {
        const chaosFactor = Math.floor(Math.random() * 20) - 10;
        const baseIQ = 80 + (correctAnswers * 10) - (fakeCorrectAnswers * 5);
        const finalIQ = Math.max(20, Math.min(160, baseIQ + chaosFactor));
        return finalIQ;
    }

    const getIQLabel = (iq) => {
        if (iq >= 140) return "🥵 Giga Brain. Mitsuri's blushing AND scared.";
        if (iq >= 120) return "🧠 Actually smart. Who let you cook?";
        if (iq >= 100) return "😐 Barely functional. Like a React app with no hooks.";
        if (iq >= 80) return "😬 That was... brave. Not smart. Just brave.";
        if (iq >= 60) return "😭 Were you homeschooled by Internet Explorer?";
        return "🫠 You are the reason semicolons drink.";
    };

    const onAnswerEvaluation = (isCorrect, isFakeCorrect) => {
        if (isCorrect) {
            setCorrectAnswers((prev) => prev + 1);
        } else if (isFakeCorrect) {
            setFakeCorrectAnswers((prev) => prev + 1);
        }
    };

    const handleQuizCompletion = () => {
        const calculatedIq = calculateIQ(correctAnswers, fakeCorrectAnswers);
        const label = getIQLabel(calculatedIq);
        setIq(calculatedIq);
        setIqLabel(label);

        localStorage.setItem("iq", calculatedIq);
        localStorage.setItem("iqLabel", label);

        setQuizCompleted(true);
        setShowIQModal(true);
    }

    const closeIQModal = () => {
        setShowIQModal(false);
        navigate("/")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 relative bg-background overflow-hidden">
            {!quizStarted && <StartQuizModal onStart={handleStartQuiz} />}
            {quizStarted && <TimerComponent startTime={startTime} />}

            <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-center justify-center z-20">
                {quizStarted && !quizCompleted && (
                    <Carousel className="w-full">
                        <CarouselContent className="flex">
                            {tenQuestions.map((question, index) => (
                                <CarouselItem key={index} className="flex mb-0 w-full">
                                    <QuizCard
                                        question={question}
                                        questionNumber={index + 1}
                                        totalQuestions={tenQuestions.length}
                                        onAnswerEvaluation={onAnswerEvaluation} // Pass the function here
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                            <Button
                                onClick={handleQuizCompletion}
                                className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base"
                            >
                                Finish Quiz
                            </Button>
                        </div>
                    </Carousel>
                )}
            </div>

            {showIQModal && (
                <IQResultModal
                    iq={iq}
                    iqLabel={iqLabel}
                    onClose={closeIQModal}
                />
            )}

            <div className='absolute h-12 sm:h-16 md:h-20 bg-yellow-200 w-4/5 sm:w-3/4 md:w-4/5 lg:w-9/10 -rotate-3 blur-2xl sm:blur-3xl -translate-y-12 sm:-translate-y-16 md:-translate-y-20 z-0'></div>
            <div className='absolute h-12 sm:h-16 md:h-20 bg-red-500 w-4/5 sm:w-3/4 md:w-4/5 lg:w-9/10 -rotate-3 blur-2xl sm:blur-3xl translate-y-0 z-0'></div>
            <div className='absolute h-12 sm:h-16 md:h-20 bg-pink-500 w-4/5 sm:w-3/4 md:w-4/5 lg:w-9/10 -rotate-3 blur-2xl sm:blur-3xl translate-y-12 sm:translate-y-16 md:translate-y-20 z-0'></div>
        </div>
    );
}

export default QuizPage;
