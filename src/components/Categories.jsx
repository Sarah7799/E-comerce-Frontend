import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #d6d6d6;
  overflow: hidden;
  padding: 20px;
`;

const Categories = () => {
  return (
    <>   
    
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    </>

  );
};

export default Categories;