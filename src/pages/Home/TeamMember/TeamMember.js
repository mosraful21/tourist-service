import React from "react";
import "./TeamMember.css";
import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";
import team4 from "../../../assets/team4.jpg";
import team5 from "../../../assets/team5.jpg";

const members = [
  {
    title: "Leader",
    name: "Tony Stack",
    img: team1,
    email: "tony@gmail.com",
    phone: "+8801700000121",
  },
  {
    title: "Co-Leader",
    name: "King Thor",
    img: team2,
    email: "thor@gmail.com",
    phone: "+8801700000121",
  },
  {
    title: "Co-Leader",
    name: "D. Strange",
    img: team3,
    email: "strange@gmail.com",
    phone: "+8801700000121",
  },
  {
    title: "Member",
    name: "Bruce Banner",
    img: team4,
    email: "banner@gmail.com",
    phone: "+8801700000121",
  },
  {
    title: "Member",
    name: "Peter Parker",
    img: team5,
    email: "peter@gmail.com",
    phone: "+8801700000121",
  },
];

const TeamMember = () => {
  return (
    <div className="lg:mt-14 mt-10">
      <p className="lg:text-4xl text-3xl text-gray-950 text-center lg:mb-10 mb-3">
        <span className="border-b-2 border-gray-500 rounded-lg">
          Team <span className="font-bold">Members</span>{" "}
        </span>
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5">
        {members.map((member, index) => (
          <div className="book bg-gray-200" key={index}>
            <div className="w-4/5 float-right p-3">
              <img src={member.img} alt="" className="w-24 h-24 rounded-2xl" />
              <p className="font-semibold">{member.name}</p>
              <p className="">{member.email}</p>
              <p className="">{member.phone}</p>
            </div>
            <div className="cover text-xl font-semibold ">
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
