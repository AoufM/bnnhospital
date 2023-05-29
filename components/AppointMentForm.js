import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

const AppointMentForm = (props) => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    return fetch("http://localhost:8000/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: props.category,
        speciality: props.speciality,
        name: patientName,
        mobile: mobileNumber,
        address: address,
        price: props.price,
      }),
    })
      .then((res) => res.json())
      .then(() => props.setDone(true))
      .then(() => props.setAppointment(false));
  };

  return (
    <MainForm>
      <div className="cross" onClick={() => props.setAppointment(false)}>
        <button>x</button>
      </div>

      <div className="content">
        <div className="form">
          <form>
            <div className="form_item">
              <label>{props.category}</label>
              <input
                className="category"
                type="text"
                value={props.speciality}
                readonly
              />
            </div>

            <div className="form_item">
              <label>Patient Name</label>
              <input
                type="text"
                placeholder="John Smith"
                value={patientName}
                onChange={(event) => setPatientName(event.target.value)}
              />
            </div>

            <div className="form_item">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="+91 9012345678"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
              />
            </div>

            <div className="form_item">
              <label>Address</label>
              <input
                type="text"
                placeholder="BNN College, Dhamankar Naka, Bhiwandi"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>

            <div className="btn">
              <input
                type="submit"
                value={props.submitValue}
                onClick={handleSubmit}
              />
              <p>&#8377; {props.price}</p>
            </div>
          </form>
        </div>

        <div className="image">
          <Image src={props.imagesrc} />
        </div>
      </div>
    </MainForm>
  );
};

export default AppointMentForm;

const MainForm = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: hidden;
  padding: 10px 150px;

  .cross {
    height: 5%;
    width: 103%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      background-color: #fff;
      border: none;
      outline: none;
      border-radius: 50px;
      font-weight: bold;
      height: 30px;
      width: 30px;
      cursor: pointer;
    }
  }

  .content {
    height: 95%;
    display: flex;
    overflow: hidden;
    border-radius: 30px;

    .form,
    .image {
      width: 50%;
    }

    .form {
      background-color: #fff;
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      form {
        width: 100%;

        .form_item {
          background-color: #dcdcdc80;
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          padding: 16px 30px;
          border-radius: 25px;

          :nth-child(1) {
            border: 2px solid blue;
          }

          label,
          input {
            margin: 5px 0;
          }

          label {
            font-weight: bold;
          }

          input {
            border: none;
            outline: none;
            padding: 5px 0;
            background: transparent;
            border-bottom: 1px ridge #00000041;

            :focus {
              border-bottom: 1px ridge #000000;
              font-weight: bold;
            }

            ::placeholder {
              color: #00000066;
            }
          }

          .category {
            border: none;
          }
        }
      }

      input[type="submit"] {
        padding: 8px 25px;
        border-radius: 50px;
        border: none;
        outline: none;
        background-color: navy;
        color: #fff;
        cursor: pointer;
      }

      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          margin-right: 30px;
          font-weight: bolder;
        }
      }
    }

    .image {
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        mix-blend-mode: lighten;
      }
    }
  }
`;
