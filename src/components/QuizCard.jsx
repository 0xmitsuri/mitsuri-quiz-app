import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import replies from '@/data/replies'

const QuizCard = ({ question, questionNumber = 1, totalQuestions = 10, onAnswerEvaluation }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    const handleAnswerChange = (value) => {
        if (!showResult) {
            setSelectedAnswer(value);
        }
    }

    const handleCheckAnswer = () => {
        if (!selectedAnswer) return;

        const selectedOption = question.options[parseInt(selectedAnswer)];
        let messageType = 'wrong';

        if (selectedOption === question.correctAnswer) {
            messageType = 'correct';
            onAnswerEvaluation(true, false);  // Correct answer
        } else if (selectedOption === question.fakeCorrect) {
            messageType = 'fakeCorrect';
            onAnswerEvaluation(false, true); // Fake correct answer
        }

        const randomMessage = replies[messageType][Math.floor(Math.random() * replies[messageType].length)];
        setResultMessage(randomMessage);
        setShowResult(true);
    }

    const getAlertVariant = () => {
        if (question.options[parseInt(selectedAnswer)] === question.correctAnswer) {
            return 'default'
        } else if (question.options[parseInt(selectedAnswer)] === question.fakeCorrect) {
            return 'default'
        } else {
            return 'destructive'
        }
    }

    const getAlertClasses = () => {
        if (question.options[parseInt(selectedAnswer)] === question.correctAnswer) {
            return 'border-emerald-900 bg-emerald-50 text-emerald-800'
        } else if (question.options[parseInt(selectedAnswer)] === question.fakeCorrect) {
            return 'border-amber-900 bg-amber-50 text-amber-800'
        } else {
            return 'border-red-900 bg-red-50 text-red-800'
        }
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader >
                <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    Question {questionNumber} of {totalQuestions}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {question.question}
                </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {question.options.map((option, index) => (
                        <div key={index} className={`flex items-start space-x-3 p-2 rounded-md transition-colors ${showResult ? 'opacity-60 cursor-not-allowed' : 'hover:bg-pink-200 cursor-pointer'
                            }`}>
                            <Input
                                type="radio"
                                id={`option-${questionNumber}-${index}`}
                                name={`quiz-option-${questionNumber}`}
                                value={index}
                                checked={selectedAnswer === index.toString()}
                                onChange={() => handleAnswerChange(index.toString())}
                                disabled={showResult}
                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                            />
                            <Label
                                htmlFor={`option-${questionNumber}-${index}`}
                                className={`text-sm sm:text-base leading-relaxed flex-1 ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'
                                    }`}
                            >
                                {option}
                            </Label>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 px-4 sm:px-6">
                {showResult && (
                    <Alert
                        variant={getAlertVariant()}
                        className={`${getAlertClasses()} w-full`}
                    >
                        <AlertDescription className="space-y-2 text-black">
                            <p className="font-medium text-sm sm:text-base">{resultMessage}</p>
                            {question.options[parseInt(selectedAnswer)] !== question.correctAnswer && (
                                <p className="text-xs sm:text-sm opacity-80">
                                    Correct answer: {question.correctAnswer}
                                </p>
                            )}
                        </AlertDescription>
                    </Alert>
                )}
                <div className="flex w-full justify-center sm:justify-end">
                    <Button
                        onClick={handleCheckAnswer}
                        disabled={!selectedAnswer || showResult}
                        className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base"
                    >
                        {showResult ? 'Answer Checked' : 'Check Answer'}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default QuizCard