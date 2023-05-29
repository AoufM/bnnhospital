import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Image from "next/image";

import mimg1 from "../public/almox.jpeg";
import mimg2 from "../public/antacid.jpeg";
import mimg3 from "../public/antihistamine.jpeg";
import mimg4 from "../public/aspirin.jpeg";
import mimg5 from "../public/biotin.jpeg";
import mimg6 from "../public/crocin.jpeg";
import mimg7 from "../public/omega.jpeg";
import mimg8 from "../public/paracetomol.jpeg";
import mimg9 from "../public/pudin.jpeg";
import mimg10 from "../public/microtek.jpeg";
import mimg11 from "../public/electrolyte.jpeg";
import mimg12 from "../public/skin.jpeg";
import Popup from "../components/Popup";

import styled from "styled-components";
import AppointMentForm from "../components/AppointMentForm";
import pills from "../public/pills.jpg";

const MedicineCard = () => {
  const [appointment, setAppointment] = useState(false);
  const [speciality, setSpeciality] = useState("");
  const [price, setPrice] = useState();
  const [done, setDone] = useState(false);

  const [cards] = useState([
    {
      image: <Image src={mimg1} alt="Amoxycilin" />,
      name: "Amoxycilin",
      desc: `Almox 500 Capsule is used to treat a variety of bacterial infections. It is effective in infections of the throat, ear, nasal sinuses, respiratory tract (e.g., pneumonia), urinary tract,
      skin and soft tissue, and typhoid fever.`,
      price: 59,
    },
    {
      image: <Image src={mimg2} alt="Antacid" />,
      name: "Antacid",
      desc: `Antacids are medicines that counteract (neutralise) the acid in your stomach to relieve and heartburn. They come as a liquid or chewable tablets and can be bought from pharmacies and shops without a prescription.`,
      price: 59,
    },
    {
      image: <Image src={mimg3} alt="Antihistamine" />,
      name: "Antihistamine",
      desc: `Antihistamines are medicines often used to relieve symptoms of
      allergies, such as hay fever, hives, conjunctivitis and reactions
      to insect bites or stings.`,
      price: 59,
    },
    {
      image: <Image src={mimg4} alt="Aspirin" />,
      name: "Aspirin",
      desc: `Aspirin is a common drug for relieving minor aches, pains, and
      fevers. People also use it as an anti-inflammatory or a blood
      thinner.It can relieve pain and reduce the risk of serious
      problems like heart attacks and strokes.`,
      price: 59,
    },
    {
      image: <Image src={mimg5} alt="Biotin" />,
      name: "Biotin",
      desc: `Your body needs biotin to metabolize carbohydrates, fats, and
      amino acids, the building blocks of protein. Biotin is often
      recommended for strengthening hair and nails.`,
      price: 59,
    },
    {
      image: <Image src={mimg6} alt="Crocin" />,
      name: "Crocin",
      desc: `Crocin Pain Relief is used for symptomatic relief from mild to
      moderate pain eg., headache, migraine, toothache, period pain and
      musculoskeletal pain.`,
      price: 59,
    },
    {
      image: <Image src={mimg7} alt="Omega" />,
      name: "Omega",
      desc: `Omega-3 fats have been shown to help prevent heart disease and
      stroke, may help control lupus, eczema, and rheumatoid arthritis,
      and may play protective roles in cancer and other conditions.`,
      price: 59,
    },
    {
      image: <Image src={mimg8} alt="Paracetomol" />,
      name: "Paracetomol",
      desc: `Paracetamol is a commonly used medicine that can help treat pain
      and reduce a high temperature (fever). It's typically used to
      relieve mild or moderate pain, such as headaches, toothache or
      sprains.`,
      price: 59,
    },
    {
      image: <Image src={mimg9} alt="Pudin Hara" />,
      name: "Pudin Hara",
      desc: `Dabur Pudin Hara Active Antacid is used to soothe the problem of
      stomach ache, indigestion and flatulence. It is also used to get
      relief from vomiting and nausea.`,
      price: 59,
    },
    {
      image: <Image src={mimg10} alt="thermometer"/>,
      name: "Thermoeter",
      desc: `A thermometer is a device that enables you to measure your temperature or temperature gradient. Digital thermometers accomplish this task by using electronic heat sensors.`,
      price: 100,
    },
    {
      image: <Image src={mimg11} alt="Electrolyte"/>,
      name: "Electrolyte",
      desc: `Oral electrolyte solutions are used widely for rehydration in diarrheal illness and to maintain hydration during vigorous exercise. In diarrheal illness, an oral rehydration solution (ORS) typically is preferred over intravenous fluids except for patients with severe dehydration.`,
      price: 50,
    },
    {
      image: <Image src={mimg12} alt="Antiseptic wipes"/>,
      name: "Antiseptic Wipes",
      desc: `These wipes are vital in cleansing wounds and the surrounding areas to properly care for an injury so that the healing process can begin. Antiseptic Wipes are sting free and can be used to cleanse a cut prior to administering other applications such as an ointment or bandage.`,
      price: 100,
    }

  ]);
  return (
    <>
      {done ? <Popup /> : null}
      {appointment ? (
        <>
          <AppointMentForm
            category="Medicine"
            imagesrc={pills}
            appointment={appointment}
            setAppointment={setAppointment}
            speciality={speciality}
            price={price}
            submitValue="Pay Now"
            done={done}
            setDone={setDone}
          />
        </>
      ) : null}
      <Navbar />
      <MedicineCardMain>
        <span>
          <h1 align="center">Buy Medicines</h1>
          <h3 className="special" align="center">
            Special Offer For Students
          </h3>
        </span>

        <div className="mcard-grid">
          {cards.map((card, i) => (
            <div key={i} className="mcard">
              <div className="mcard-header-image">{card.image}</div>
              <div className="mcard-body">
                <h3>{card.name}</h3>
                <p>{card.desc}</p>
              </div>
              <div className="mcard-footer">
                <button
                  className="btn"
                  onClick={() => {
                    setAppointment(!appointment);
                    setSpeciality(card.name);
                    setPrice(card.price);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </MedicineCardMain>

      <Footer />
    </>
  );
};

export default MedicineCard;

const MedicineCardMain = styled.div`
  .mcard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    margin: 5rem 8rem;
  }

  h1 {
    font-size: 50px;
    line-height: 60px;
    text-align: center;
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
    margin: 40px 8rem;
  }

  .special {
    color: #00c6ff;
  }

  .mcard {
    padding: 1rem;
    /* background-color: whitesmoke; */
    border-radius: 25px;
    /* max-width: 400px; */
    overflow: hidden;
    box-shadow: 0 0 10px #dcdcdc;
  }

  .mcard.mcard-shadow {
    border: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .mcard-header {
    font-size: 1.5rem;
    padding: var(--padding);
    padding-bottom: 0;
    margin-bottom: 0.5rem;
  }

  .mcard-header-image {
    overflow: hidden;
    padding: 0;
    border-radius: 25px;
    border: 1px dotted navy;
  }

  .mcard-header-image > img {
    display: block;
    width: 100%;
    max-height: 200px;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    transition: 200ms transform ease-in-out;
  }

  .mcard:hover > .mcard-header-image > img {
    transform: scale(1.1);
  }

  .mcard-body {
    font-size: 1rem;
    padding: 0 var(--padding);
  }
  .mcard-footer {
    margin-top: 0.5rem;
    padding: var(--padding);
    padding-top: 0;
  }

  .btn {
    --color: aqua;
    background: navy;
    color: #fff;
    border: none;
    padding: 0.5em 0.75em;
    font-size: 1rem;
    border-radius: 50px;
    cursor: pointer;
  }
  .btn:hover,
  .btn:focus {
    background: navy;
  }

  .btn.btn-outline {
    background: none;
    border: 1px solid navy;
    color: navy;
    margin-left: 5px;
  }
  .btn.btn-outline:hover,
  .btn.btn-outline:focus {
    background: #00008018;
  }
`;
