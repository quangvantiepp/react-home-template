import { Button, Result } from "antd";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1> Home</h1>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default HomePage;