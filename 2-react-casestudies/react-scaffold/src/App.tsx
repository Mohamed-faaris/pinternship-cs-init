import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DoctorPatientDetails from './components/DoctorPatientDetails';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/doctors/1/patients/101">Doctor 1 - Patient 101</Link>
        {' | '}
        <Link to="/doctors/2/patients/202">Doctor 2 - Patient 202</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:doctorId/patients/:patientId" element={<DoctorPatientDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return <h1>React Exercises - Routing Demo</h1>;
}

export default App
