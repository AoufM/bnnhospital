import Link from "next/link";
import styled from "styled-components";

const HomePage = (props) => {
  return (
    <>
      <Main>
        <div id="login" className="flex">
          <Link href="/Signin" className="login">
            Login
          </Link>
        </div>

        <hr />

        <div id="signup" className="flex">
          <Link href="/Signup" className="signup">
            SignUp
          </Link>
        </div>
      </Main>
    </>
  );
};

export default HomePage;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;

  ::after {
    content: "WELCOME";
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    font-size: 250px;
    font-weight: bold;
    color: #dcdcdc;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    letter-spacing: 2px;
    font-weight: 400;
  }

  #login {
    width: 50%;
  }

  #signup {
    width: 50%;
  }

  a {
    margin: 20px 0 0 0;
    padding: 8px 30px;
    outline: none;
    /* border: 3px solid #000; */
    background: none;
    cursor: pointer;
    background-color: #6060ff;
    color: #fff;
  }

  a:hover {
    transform: scale(1.1);
    transition: 0.2s;
    font-weight: bold;
  }

  .signup {
    background-color: green;
  }

  hr {
    height: 80vh;
    align-self: center;
  }
`;
