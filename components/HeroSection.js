import Link from "next/link";
import styled from "styled-components";

const HeroSection = (props) => {
  return (
    <>
      <HeroCard className="heroCard">
        <Info>
          <h1>{props.category}</h1>
          <p style={{ marginTop: "-30px" }}>
            {null}
            {/* THIS IS ONLY FOR LEARN SECTION */}
          </p>
          <p>{props.description}</p>
        </Info>
      </HeroCard>
    </>
  );
};

export default HeroSection;

const HeroCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem;
  margin: 5rem 8rem;
  box-shadow: 0 0 10px #dcdcdc;
`;

const Info = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2.5em;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.2rem;
  }

  a {
    background-color: navy;
    width: max-content;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    color: #fff;
    text-decoration: none;

    &:hover {
      font-weight: bold;
    }
  }
`;
