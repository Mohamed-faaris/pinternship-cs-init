import { BrowserRouter, Route, Routes, useParams } from "react-router";

type DoctorPatientDetailsPrarams = {
  doctorId: string;
  patientId: string;
};

const doctorPatientDetails: Record<number, Record<number, string>> = {
  1: {
    1: "Doctor 1 - Patient 1",
    2: "Doctor 1 - Patient 2",
  },
  2: {
    1: "Doctor 2 - Patient 1",
    2: "Doctor 2 - Patient 2",
  },
  3:{
    4: "Doctor 3 - Patient 4",
    10: "Doctor 3 - Patient 10",
  }
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/doctors/:doctorId/patients/:patientId"
            element={<DoctorPatientDetails />}
          />
          <Route
            path="/"
            element={<HomePage />}
          />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the doctor-patient details app. Use the URL format /doctors/:doctorId/patients/:patientId to view details.</p>
      <div>
        {Object.entries(doctorPatientDetails).map(([doctorId, patients]) =>
          Object.entries(patients).map(([patientId, _]) => (
            <div key={`${doctorId}-${patientId}`}>
              <a href={`/doctors/${doctorId}/patients/${patientId}`}>
                View details for Doctor {doctorId} - Patient {patientId}
              </a>
            </div>
          ))
        )}
      </div>


    </div>
  );
}

export const DoctorPatientDetails = () => {
  const { doctorId, patientId } = useParams<DoctorPatientDetailsPrarams>();
  const doctorNumberId = parseInt(doctorId??"");
  const patientNumberId = parseInt(patientId??"");
  if(isNaN(doctorNumberId) || isNaN(patientNumberId)) {
    return <div>Invalid URL</div>;
  }
  const details = doctorPatientDetails[doctorNumberId]?.[patientNumberId];
  if(!details) {
    return <div>Details not found</div>;
  }
  return (
    <div>
      {details}
    </div>
  );
}

export default App;
