import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import mri from "../public/mri-machine.png";
import styled from "styled-components";

const MainPage = () => {
  return (
    <div className="mcontainer">
      <Navbar />
      <Home>
        <section className="left-sec">
          <div>
            <p>We are here for your care</p>
            <h1>Welcome to BNN Hospital</h1>
            <p>
              Students, we are here for your care 24/7. Any help just call us on 
              6234780129
            </p>
            <Link href="/doctorcard">Book an appointment</Link>
          </div>
        </section>
        <section className="right-sec">
          <Image src={mri} />
        </section>
      </Home>

      <Footer />
    </div>
  );
};

export default MainPage;

const Home = styled.div`
  display: flex;
  margin: 5rem 8rem;

  .left-sec {
    /* background-color: yellow; */
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    div {
      margin-bottom: 5rem;
      padding: 3rem;
      background-color: #dcdcdc;
      border-radius: 25px;

      p {
        margin-top: 5px;
        margin-top: 0;
      }

      p:nth-child(2) {
        margin-bottom: 5px;
      }

      h1 {
        font-size: 3rem;
        margin: 0;
        margin-top: 0;
      }

      a {
        background-color: navy;
        padding: 8px 16px;
        color: #fff;
        font-weight: bold;
        border-radius: 50px;
      }

      a:hover {
        background-color: #fff;
        color: navy;
        transition: 0.3s;
      }
    }
  }

  .right-sec {
    /* background-color: skyblue; */
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
`;
