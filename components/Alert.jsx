import styled from "styled-components";
import Link from "next/link";

const Alert = (props) => {
  return (
    <AlertBox>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <Link href={props.linkSrc}>{props.linkName}</Link>
    </AlertBox>
  );
};

export default Alert;

const AlertBox = styled.div`
  background-color: #f64949;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: max-content;
  margin: 20px auto;
  padding: 20px 50px;
  border-radius: 20px;
  z-index: 2000;
  animation: top 1s ease-in-out;

  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 10px;
  }
  a {
    color: #000000;
    text-decoration: underline;
  }
  @keyframes top {
    0% {
      top: -150px;
    }
    100% {
      top: 0;
    }
  }
`;
