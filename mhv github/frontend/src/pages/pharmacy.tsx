import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pharmacy = () => {
  const [patientId, setPatientId] = useState("");
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMedications = () => {
    if (!patientId) {
      setError("Patient ID is required.");
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:5000/api/medications?patientId=${patientId}`)
      .then((response) => {
        setMedications(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching medications:", err);
        setError(err.response?.data?.message || "Failed to fetch medications.");
        setLoading(false);
      });
  };

  return (
    <div>
        <Link to="/home">Home</Link>
      <h1>Medications Lookup</h1>
      <div>
        <label htmlFor="patientId">Enter Patient ID:</label>
        <input
          id="patientId"
          type="text"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          placeholder="Patient ID"
        />
        <button onClick={fetchMedications} disabled={loading}>
          {loading ? "Loading..." : "Fetch Medications"}
        </button>
      </div>

      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}

      <div style={{ marginTop: "20px" }}>
        <h2>Medications</h2>
        {medications.length > 0 ? (
          <table border="1" style={{ width: "100%", marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Rx ID</th>
                <th>Rx Name</th>
                <th>Rx Quantity</th>
                <th>Refills</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med) => (
                <tr key={med.rxId}>
                  <td>{med.rxId}</td>
                  <td>{med.rxName}</td>
                  <td>{med.rxQty}</td>
                  <td>{med.refills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && <p>No medications to display.</p>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
