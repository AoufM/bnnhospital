import styled from "styled-components";
import bg from "../public/patientbg.jpg";
import Image from "next/image";
import { useState } from "react";
import Alert from "../components/Alert";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [thisdata, setThisdata] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    return fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        age: age,
        mobile: mobile,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(() => setThisdata(true));
  };

  return (
    <Signupbox className="sign_up">
      {thisdata ? (
        <Alert
          title="Note"
          desc="Successfully created an account. Please go to login page"
          linkName="Login"
          linkSrc="/Signin"
        />
      ) : null}
      <div className="image">
        <Image src={bg} />
        <h1>
          Observation, Reason, Human Understanding, Courage; these make the
          physician.
        </h1>
      </div>

      <div className="form flex">
        <form className="login">
          <div className="login__field">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="login__input"
              placeholder="Email"
            />
          </div>

          <div className="login__field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="login__input"
              placeholder="Name"
            />
          </div>

          <div className="login__field">
            <input
              type="number"
              name="age"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
              className="login__input"
              placeholder="Age"
            />
          </div>

          <div className="login__field">
            <input
              type="text"
              name="number"
              value={mobile}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
              className="login__input"
              placeholder="Mobile Number"
            />
          </div>

          <div className="login__field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="login__input"
              placeholder="Password"
            />
          </div>

          <input
            className="login__submit button__text"
            name="submit"
            type="submit"
            value="Sign Up"
            onClick={handleSubmit}
          />
          <div className="login__field">
            <Link href="/signin" className="signin_link">
              Sign In instead
            </Link>
          </div>
        </form>
      </div>
    </Signupbox>
  );
};

export default Signup;

const Signupbox = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    height: 100vh;
    width: 70%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: -2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
      filter: brightness(50%);
    }
  }

  .image h1 {
    width: 70%;
    font-size: 64px;
    font-weight: 300;
    margin: 0 auto;
    color: #fff;
  }

  .form {
    height: 100vh;
    width: 30%;
  }

  .login {
    width: 320px;
    padding: 30px;
  }

  .login__field {
    padding: 20px 0px;
    position: relative;
  }

  .login__input {
    border: none;
    border-bottom: 2px solid #d1d1d4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 700;
    width: 100%;
    transition: 0.2s;
  }

  .login__input:active,
  .login__input:focus,
  .login__input:hover {
    outline: none;
    border-bottom-color: #6a679e;
  }

  .login__submit {
    background: #fff;
    font-size: 14px;
    margin-top: 30px;
    padding: 16px 20px;
    border: 1px solid #d4d3e8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    color: #4c489d;
    box-shadow: 0px 2px 2px #5c5696;
    cursor: pointer;
    transition: 0.2s;
  }

  .login__submit:active,
  .login__submit:focus,
  .login__submit:hover {
    border-color: #6a679e;
    outline: none;
  }

  .signin_link {
    color: green;
  }
`;
