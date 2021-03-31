import React from "react";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Paragraph from "../../Components/Paragraph/Paragraph";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header fontSize="50" color="orange" fontWeight="regular">
        This is my heading
      </Header>
      <Paragraph fontSize="50" fontWeight="semi-bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id rem
        recusandae aperiam sequi deleniti est sit vitae, ratione rerum, cumque
        mollitia ullam corporis quis totam perferendis modi, magnam tenetur
        eaque?
      </Paragraph>
      <Button fontWeight="bold">Click Me</Button>
    </div>
  );
};

export default Home;
