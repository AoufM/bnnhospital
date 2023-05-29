import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import AppointMentForm from "../components/AppointMentForm";
import faceMask from "../public/faceMask.png";
import Popup from "../components/Popup";

import Img1 from "../public/img1.jpeg";
import Img2 from "../public/img2.jpeg";
import Img3 from "../public/img3.jpeg";
import Img4 from "../public/img4.jpeg";
import Img5 from "../public/img5.jpeg";
import Img6 from "../public/img6.jpeg";
import Img7 from "../public/img7.jpeg";
import Img8 from "../public/img8.jpeg";
import Img9 from "../public/img9.jpeg";
import Img10 from "../public/img10.jpeg";
import Img11 from "../public/img11.jpeg";
import Img12 from "../public/img12.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DoctorCard = () => {
  const [appointment, setAppointment] = useState(false);
  const [speciality, setSpeciality] = useState("");
  const [price, setPrice] = useState();
  const [done, setDone] = useState(false);

  const [cards] = useState([
    {
      image: <Image src={Img1} alt="Doctor1" height={170} width={200} />,
      title: "Cardiologist",
      text: `This is a Cardiologist. Cardiologists focus on diseases of the cardiovascular system, or the heart, lungs, and blood vessels like congenital heart disease and hypertension.`,
      price: 399,
    },
    {
      image: <Image src={Img2} alt="Doctor1" height={170} width={200} />,
      title: "Dermatologist",
      text: `This is a Dermatologists. Dermatologists treat and diagnose benign and malignant skin disorders, in addition to issues with hair and nails, the mouth, and more. `,
      price: 399,
    },
    {
      image: (
        <Image src={Img3} alt="Endocrinologist" height={170} width={200} />
      ),
      title: "Endocrinologist",
      text: `This is a Endocrinologists. Endocrinologists focus on the internal glands of the body, such as the adrenal or thyroid glands.`,
      price: 499,
    },
    {
      image: (
        <Image src={Img4} alt="General Physician" height={170} width={200} />
      ),
      title: "General Physician",
      text: `This is a General Physician. General Physician is a broad specialty focused on the complete health of the family. `,
      price: 399,
    },
    {
      image: <Image src={Img5} alt="Neurologist" height={170} width={200} />,
      title: "Neurologist",
      text: `This is a neurologist. A neurologist treats conditions that affect the brain, spinal cord, nervous system, and muscles.`,
      price: 399,
    },
    {
      image: (
        <Image src={Img6} alt="Nuclear medicine" height={170} width={200} />
      ),
      title: "Nuclear medicine",
      text: `This is a Nuclear medicine. Nuclear medicine specialists use properties of radioactive atoms and molecules to research, diagnose, and treat disease. `,
      price: 399,
    },
    {
      image: <Image src={Img7} alt="Gynaecologist" height={170} width={200} />,
      title: "Gynaecologist",
      text: `This is a Gynaecologist. The gynecology specialty focuses on medical and surgical care for women.`,
      price: 399,
    },
    {
      image: <Image src={Img8} alt="Opthamologist" height={170} width={200} />,
      title: "Opthamologist",
      text: `This is a Ophthalmology. Opthamologists can treat patients for any issues that affect the structure of the eye, the orbit, or the visual pathways.`,
      price: 399,
    },
    {
      image: (
        <Image src={Img9} alt="Orthopedic Surgeon" height={170} width={200} />
      ),
      title: "Orthopedic Surgeon",
      text: `This is a Orthopedic Surgeon. Orthopedic surgeons focus on preserving and restoring the form and function of the spine and extremities through surgical and physical means.`,
      price: 399,
    },
    {
      image: <Image src={Img10} alt="Pathologist" height={170} width={200} />,
      title: "Pathologist",
      text: `This is a Pathologists. Pathologists specialize in the study of disease, specifically the causes of certain diseases and how and why they affect the body the way they do`,
      price: 399,
    },
    {
      image: <Image src={Img11} alt="Pediatrician" height={170} width={200} />,
      title: "Pediatrician",
      text: `This is a Pediatrician. Pediatricians work with children and focus on their physical, emotional, and social health.`,
      price: 399,
    },
    {
      image: <Image src={Img12} alt="Psychiatrist" height={170} width={200} />,
      title: "Psychiatrists",
      text: `This is a Psychiatrists. Psychiatrists prevent, diagnose, and treat mental, behavior, addictive, and emotional disorders.`,
      price: 399,
    },
  ]);
  return (
    <>
      {done ? <Popup /> : null}
      {appointment ? (
        <>
          <AppointMentForm
            category="Speciality"
            imagesrc={faceMask}
            appointment={appointment}
            setAppointment={setAppointment}
            speciality={speciality}
            price={price}
            submitValue="Book an Appointment"
            done={done}
            setDone={setDone}
          />
        </>
      ) : null}
      <Navbar />
      <Doctor>
        <div className="dccontainer">
          <h1>Our Doctors</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                {card.image}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button
                  className="btn"
                  onClick={() => {
                    setAppointment(!appointment);
                    setSpeciality(card.title);
                    setPrice(card.price);
                  }}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </Doctor>
      <Footer />
    </>
  );
};

export default DoctorCard;

const Doctor = styled.div`
  padding: 5rem 8rem;

  .dccontainer {
    box-sizing: border-box;
    width: 100%;
    margin: auto;
  }

  h1 {
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 40px;
    background: #00c6ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #0072ff,
      #00c6ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #0072ff,
      #00c6ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    border-radius: 100px;
    padding: 20px 0;
  }

  .cards {
    /* background-color: red; */
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px 50px;
    /* justify-content: space-between; */
  }

  .card {
    width: 100%;
    background: #ffffff;
    border-radius: 25px;
    padding: 20px;
    transition: 0.3s;
    border: 2px solid transparent;
    box-shadow: 0 0 10px #dcdcdc;
  }

  .card:hover {
    border-color: navy;
    box-shadow: 0 0 5px #000000;
  }

  .btn {
    border: none;
    outline: none;
    background-color: navy;
    color: #fff;
    border-radius: 50px;
    max-width: 120px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn:hover {
    box-shadow: 0 0 20px skyblue;
  }

  img {
    border-radius: 500px;
  }

  @media (max-width: 969px) {
    section {
      padding: 20px 0px;
    }

    h1 {
      font-size: 30px;
      line-height: 40px;
    }

    .card {
      flex: 0 0 calc(50%-20px);
      max-width: calc(50%-20px);
    }
  }

  @media (max-width: 600px) {
    .card {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;
