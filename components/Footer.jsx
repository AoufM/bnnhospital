import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterMain className="fcontainer">
      <div className="footer-section">
        <div className="footer-item">
          <h2>Company</h2>
          <p>
            <Link
              href="https://collegedunia.com/college/56471-bnn-college-thane/admission"
              target="_blank"
            >
              {" "}
              About Us
            </Link>
          </p>
          <p>
            <Link
              href="https://collegedunia.com/college/56471-bnn-college-thane/admission"
              target="_blank"
            >
              Our Services
            </Link>
          </p>
          <p>
            <Link href="#">&copy; Bnn College</Link>
          </p>
        </div>
        <div className="footer-item">
          <h2 className="madeBy">Made By </h2><br />
          <p className="aouf"> Momin Aouf</p>
        </div>
        <div className="footer-item">
          <h2>Surf</h2>
          <p>
            <Link href="/MainPage"> Home </Link>
          </p>
          <p>
            <Link href="/medicinecard"> Medicines </Link>
          </p>
          <p>
            <Link href="/doctorcard"> Doctors </Link>
          </p>
          <p>
            <Link href="/articles"> Articles </Link>
          </p>
        </div>
      </div>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  .fcontainer {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .footer-section {
    width: 100%;
    display: flex;
    color: white;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem 0;
    background-color: navy;
  }

  .footer-section h2 {
    margin-bottom: 1rem;
    position: relative;
    cursor: default;
  }

  .footer-section h2::after {
    content: "";
    width: 2rem;
    height: 0.01rem;
    background: #00cbe6;
    position: absolute;
    left: 0;
    bottom: -0.5rem;
  }

  .footer-section p {
    transition: all 0.2s linear;
    margin-bottom: 0.6em;
  }

  a {
    color: #dcdcdc;
    text-decoration: none;
    cursor: pointer;
  }

  .footer-section p:hover {
    transition: all 0.2s linear;
    transform: translateX(4px);
  }

  .madeBy {
    font-size: 2rem;
  }

  .aouf {
    font-size: 1.28rem;
  }

  .aouf:hover {
    color: #13daf4;
  }

  .footer-section a:hover {
    color: #13daf4;
  }

  .footer-item {
    margin: 1rem;
  }

  .footer-item ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  .footer-item li {
    margin-right: 1rem;
  }

  .social ul li {
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  .social ul li:hover {
    color: #00b0e6;
    transform: scale(1.1);
    transition: all 0.2s linear;
  }

  @media screen and (max-width: 320px) {
    .footer-section {
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 2rem;
    }
  }
`;
