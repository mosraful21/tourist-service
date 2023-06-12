import React from "react";
import img1 from "../../../assets/advice1.jpg";
import img2 from "../../../assets/advice2.jpg";
import img3 from "../../../assets/advice3.jpg";
import img4 from "../../../assets/advice4.jpg";
import img5 from "../../../assets/advice5.jpg";
import img6 from "../../../assets/advice6.jpg";
import { Link } from "react-router-dom";

export const content = [
  {
    id: 0,
    img: img1,
    title: "Stay healthy while traveling",
    desc: "Health is the key of happiness.  We go for a travel in a variety of activities. A pleasure travel can be spoiled due to illness. So you need to healthy in travel period",
    list: "Keep much needed medicine in traveling. Like Paracetamol, Antihistamines, Antacids. Take your regular need medicine. Collect antiseptic cream and liokoplasta. Take some Orasyalaina. Take some fresh drinking water and dry food to avoid food poisoning. Try to avoid dust. To avoid this you can travel with AC Transport. If you have Migraine related problem you should take medicine and you can use sunglass. If you have baby you should take baby food with you. Also you should cautious about their food.",
  },
  {
    id: 1,
    img: img2,
    title: "Photographer Uniform",
    desc: "Cox's Bazar tourist police distributing uniform to prevent harassment of tourist from photographer and Jet Ski.  And at this uniform will write the phone number of tourist police and their own ID number.  So if you think, you are Abused by them just make a call to tourist police of cox's bazar zone help line (01769-690 734) which is displaying at their uniform.",
  },
  {
    id: 2,
    img: img3,
    title: "Travel with Baby/Child",
    desc: "Tour/Travel always interesting and exciting but after being mom it will be difficult.  But you can make it easy by taking some step. Lets start our subject “Travel with baby/child”.",
    list: "Booking: Pre Booking for Hotel, Bus, and Plane is the most important to avoid extra pain in tour. For bus and plain you can book sit at front side to avoid extra shake of transport. For bus journey you can choice AC bus and book an extra sit for your baby. Baby Carriers: In travel time you can take a baby carrier for you baby. It will help you to do some work with him. Comfortable Clothes:   you can select comfortable clothes for your baby in travel time. Wear clothing that is easier to change his diaper. For plan fly: A lot of time flying planes before and during landing the air pressure can be felt in their ears, the baby is in trouble. Sao that's time you can feed him, because sucking intake air pressure in the ear is less felt.",
  },
  {
    id: 3,
    img: img4,
    title: "Select Travel Bags",
    desc: "We need to take extra care about travel bag selection. If your travel bag is not Convenient, It will make you upset. You can select water proof bag to save your favorite dress from water and rain.  Comfort or parachute is best, you can also choose from Jeans, Max, linen or leather bag. You can also take care about zipper of those bag. For travel bag you also need to check Wheel space and partition.",
    list: "",
  },
  {
    id: 4,
    img: img5,
    title: "Dress Selection",
    desc: "Dress is the key element of comfort and comfort make happy. So we need to select perfect dress for different type of tour. If you want to make a trip in summer season you need to select thin and cotton dress for match with Weather.",
    list: "For winter trip you need to select warm clothes because this weather is so cold. Also you can select layer type cloth like t-shirt, Sweater and shawl. You can use this dress as layer based on certain weather condition. Don't take luxurious clothes.  And try to select water proof and comfortable Sandal. If your trip destination is forest you can select your dress at green or similar color, match with leaf of forest. Don't use color full element and dress and try to keep silence of forest.",
  },
  {
    id: 5,
    img: img6,
    title: "Respect the local people",
    desc: "If your destination is rural area of Bangladesh you need to respect there and there culture. Also you need to maintain their rule and behavior because they are maintain this rule and regulation from there born. If you go to any holy places you need to put off you shoes and it is system and there tradition. And you can ask them about this more rule. Don't involve with any argument during travel time.",
    list: "Try to collect a local guide then you can avoided communication gap   with local people. Try to feel there behavior and take it positively. Suppose you coming at tribal area and you don't have find sufficient water for bath and now you are angry with them. Do you think that those water they are collect from far away and it's so difficult for anyone.",
  },
];

const TourAdvice = () => {
  return (
    <div className="lg:py-16 md:py-5 py-3">
      <p className="lg:text-4xl text-3xl text-gray-950 text-center lg:mb-10 mb-3"><span className='border-b-2 border-gray-500 rounded-lg'>
        Travel <span className="font-bold">Advice</span> </span>
      </p>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2 gap-4 max-w-7xl mx-auto">
        {content.map((item) => (
          <Link to={`/advice/${item.id}`} key={item.id} className="flex">
            <img src={item.img} alt="" className="w-20 h-20" />
            <div className="ml-3">
              <h5 className="font-semibold">{item.title}</h5>
              <p className="text-sm mt-2">{item.desc.slice(0, 80)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TourAdvice;
