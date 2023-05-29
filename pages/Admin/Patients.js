import AdminNavbar from "../../components/Admin Panel/AdminNavbar";
import AdminRow from "../../components/Admin Panel/AdminRow";
import { useState, useEffect } from "react";
import { getPatientAPI } from "./data";

const Medicines = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    getPatientAPI().then((data) => setMedicineData(data));
  }, []);

  return (
    <>
      <AdminNavbar bg={true} />
      <AdminRow table={"Doctor"} data={medicineData} />
    </>
  );
};

export default Medicines;
