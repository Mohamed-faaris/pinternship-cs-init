import { useParams, Link } from 'react-router-dom';

function DoctorPatientDetails() {
  const { doctorId, patientId } = useParams<{ doctorId: string; patientId: string }>();

  if (!doctorId || !patientId) {
    return <div>Missing or invalid parameters</div>;
  }

  const doctorIdNum = Number(doctorId);
  const patientIdNum = Number(patientId);

  if (isNaN(doctorIdNum) || isNaN(patientIdNum)) {
    return <div>Invalid ID format - both IDs must be numeric</div>;
  }

  return (
    <div>
      <h2>Doctor-Patient Details</h2>
      <p>Doctor ID: {doctorIdNum}</p>
      <p>Patient ID: {patientIdNum}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default DoctorPatientDetails;
