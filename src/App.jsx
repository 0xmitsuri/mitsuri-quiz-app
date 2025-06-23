import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
    </>
  )
}

export default App
