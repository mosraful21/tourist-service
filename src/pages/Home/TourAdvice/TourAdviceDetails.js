import React from "react";
import { content } from "./TourAdvice";
import { useParams } from "react-router-dom";

const TourAdviceDetails = () => {
    const Data = content;
    const { id } = useParams();

  return (
    <div className="p-12">
      <h1 className="text-3xl text-center">{Data[id]?.title}</h1>
      <p>{Data[id].desc}</p> <br />
      <p>{Data[id].list}</p>
    </div>
  );
};

export default TourAdviceDetails;
