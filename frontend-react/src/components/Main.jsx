import React from "react";
import Button from "./button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            praesentium illum veritatis aspernatur temporibus sunt magni ipsum
            eos error corporis unde exercitationem, officia saepe harum cum
            tempore quia repudiandae minus quidem sint nisi vero soluta?
            Consequatur, natus recusandae esse doloremque architecto sequi!
            Ipsum, laboriosam modi!
          </p>
          <Button text="Explore Now" class="btn-info" url="/dashboard" />
        </div>
      </div>
    </>
  );
};

export default Main;
