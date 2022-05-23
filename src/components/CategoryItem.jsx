import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #d6d6d6;
  padding: 1em;
  width: 300px;
  margin: 1rem;
  height: 400px;
  position: relative;
  border: 1px solid #b8b8b8;
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
  overflow: hidden;
  opacity: 2.5;
  box-shadow: -4px -7px 8px -1px rgba(0,0,0,0.49);
-webkit-box-shadow: -4px -7px 8px -1px rgba(0,0,0,0.49);
-moz-box-shadow: -4px -7px 8px -1px rgba(0,0,0,0.49);
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: -80px;
  text-shadow: 2px 2px #413c3c;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #5c4444;
    color: white;
    cursor: pointer;
    font-weight: 600;
`;


const CategoryItem = ({ item }) => {
  return (
    <>
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
    </>
  );
};

export default CategoryItem;