import axios from "axios";
import { useContext,useRef } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import { mobile } from "../responsive";
import { Link, useHistory } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #3d2828;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border: 1px solid black;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #000000;
  color: white;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: black;
  color: #f7cb09;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://ecommerce-thiru.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && history.push("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            ref={userRef}
          />
          <Input
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
          <Button type="submit" disabled={isFetching} >
            LOGIN
          </Button>
          <Link to="/register">
          <Links style={{color: "#12b7f8"}} >CREATE A NEW ACCOUNT</Links>
          </Link>
        </Form>
        <p style={{ margin: "1em", fontSize: ".9rem", color: "white" }}>Sample Login</p>
        <p style={{ margin: "1em", fontSize: ".9rem", color: "white" }}>Username: stark , Password: stark</p>
      </Wrapper>
    </Container>
  );
};


export default Login;