import AdminNavbar from "../../components/Admin Panel/AdminNavbar";
import AdminRow from "../../components/Admin Panel/AdminRow";
import { useState, useEffect } from "react";
import { getMedicineAPI } from "./data";

const Medicines = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    getMedicineAPI().then((data) => setMedicineData(data));
  }, []);

  return (
    <>
      <AdminNavbar />
      <AdminRow table={"Medicine"} data={medicineData} />
    </>
  );
};

export default Medicines;
