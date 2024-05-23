import './App.css'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginForm from './ui/components/LoginForm'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    )
}

export default App
