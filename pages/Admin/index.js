import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sessionName) {
          router.push({
            pathname: "http://localhost:3000/Admin/Patients",
          });
        }
      });
  };

  return (
    <>
      <FormContainer>
        <Form>
          <label className="title">
            <h1>BNN Hospital</h1>
          </label>

          <LoginField>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </LoginField>

          <LoginField>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </LoginField>

          <input
            name="submit"
            type="submit"
            className="submit"
            value="Login"
            onClick={handleSubmit}
          />
        </Form>
      </FormContainer>
    </>
  );
};

export default Index;

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  box-shadow: 0 0 10px #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 25px;
  padding: 25px;

  .title {
    border-bottom: 0.5px solid #2a2a2a;
  }

  .submit {
    border: none;
    background: none;
    padding: 10px;
    font-weight: 700;
    width: 80%;
    margin: 10px 0;
    border-radius: 50px;
    cursor: pointer;

    :hover {
      box-shadow: 0 0 10px #dcdcdc;
    }
  }
`;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  label {
    margin: 10px 0;
    font-weight: 500;
  }

  input {
    border: none;
    border-bottom: 1px solid #9c9c9c;
    background: none;
    padding: 10px;
    width: 100%;

    :active,
    :focus {
      outline: none;
      border-bottom: 2px solid #f05d69;
    }
  }
`;
