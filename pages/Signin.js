import styled from "styled-components";
import bg from "../public/DoctorBackground.jpg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Alert from "../components/Alert";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [thisdata, setThisdata] = useState(false);
  const [data, setData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setData(data.message);
          setThisdata(true);
        }
        if (data.sessionName) {
          router.push({
            pathname: data.redirectUrl,
          });
        }
      });
  };

  return (
    <>
      <Login className="main_login">
        {thisdata ? (
          <Alert title={data} desc="" linkName="" linkSrc="" />
        ) : null}
        <div className="image">
          <Image src={bg} />
          <h1>Medicines cure diseases, but only Doctors can cure patients</h1>
        </div>

        <div className="form flex">
          <form className="login">
            <div className="login__field">
              <input
                type="text"
                name="email"
                className="login__input"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="login__field">
              <input
                type="password"
                name="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <input
              className="login__submit button__text"
              name="submit"
              type="submit"
              value="Login"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </Login>
    </>
  );
};

export default Signin;

const Login = styled.div`
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

    img {
      width: 100%;
      height: auto;
      position: absolute;
      z-index: -1;
      filter: brightness(50%);
    }
  }

  .image h1 {
    width: 70%;
    font-size: 64px;
    font-weight: 300;
    color: #fff;
    margin: 0 auto;
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
`;
