import React from "react";
import Slider from "react-slick";
import sreemangal from "../../../assets/images/sreemangal.jpg";
import tajhat from "../../../assets/images/tajhat.jpg";
import shopnopuri from "../../../assets/images/shopnopuri.jpg";
import kuakata from "../../../assets/images/kuakata.jpg";
import paharpur from "../../../assets/images/paharpur.jpg";

const monthlyData = [
  {
    id: 0,
    img: sreemangal,
    title: "Sreemangal",
    location: "Moulvibazar, Sylhet",
    desc: "Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh. Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one's eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI is situated in Sreemangal. The terraced tea gardens, plantations and evergreen hills of sreemangal are wonderful treats for the tourists. On the way, of Sreemangal by bus you'll see a statue “cha konna” which is stands for welcome you. Don't forget to visit “Tea museum” in “British karighor” tea resort. Lawasara, Madhabpur Lake is nearest tourist spots near Sreemangal.",
    togo: "If you want to go to Sreemangal from Dhaka, you may follow the instructions given below. First you go to Kamlapur, Fakirapul and Saedabad of Dhaka city & buy a bus ticket from Dhaka to Sreemangal. When you reach Srimongal, you will be dropped at Dhaka bus stand. You can rent a rickswa for going Choumohona at Sreemangal. Actually Choumohona is the center of Sreemangal town. There you will find several hotel like Hill town Rest House(Vanuganj Road), United, Tea town, Rain Forest Rest House(Habiganj Road) etc. el .Tea Resort is also available. To avail tea resort booking is mandatory. Its cost around 5000 BDT for 3 room banglow. Normal hotel is not bad for living 2 or 3 days. You will find there AC & Non-AC rooms at a cheap rate [120tk (Non-AC) to 800tk (AC)]. I was at that hotel for 7 days and their services made me satisfied. After that you can go to Nilkantha Tea stall at Ramnagar or Near BDR camp. For reaching that place please rent a rickswa from Choumohona to Kalighat (rent 10tk-20tk. Lawasara, Madhabpur lake are nearest tourist spots near Sreemangal.",
  },
  {
    id: 1,
    img: tajhat,
    title: "Tajhat Rajbari",
    location: "Tajhat, Rangpur",
    desc: "Tajhat Palace, Tajhat Rajbari, is a historic palace of Bangladesh, located in Tajhat, Rangpur.This palace now holds the Rangpur museum. Tajhat Palace is situated three km. south-east of the city of Rangpur, on the outskirts of town. The palace was built by Maharaja Kumar Gopal Lal Roy in the beginning of the 20th century. It is believed that from the conspicuous appearance of his Taj or jeweled crown, his estate derived the name of Tajhat. From 1984 to 1991 the palace was used as a Rangpur High Court Branch of the Supreme Court of Bangladesh. In 1995 the palace was declared as a protected monument by the Department of Archaeology. Recognizing its outstanding architectural value the Government of Bangladesh shifted the Rangpur Museum to the second floor of the palace in 2005. The main room at the top of the marble stairs has a number of display cases that show 10th - 11th-century terracotta artifacts. There are a number of fine examples of Sanskrit and Arabic manuscripts, including copies of the Mahabharat, Ramayan, and a Quran whose provenance is attributed to none other than the Mughal Aurangzeb.",
    togo: "The best transport from Dhaka to Rangpur is Green Line and TR Travels. Besides, ordinary buses of Agamani Paribahan, SR, Shyamoli, Hanif, Keya etc. run on this route. These buses leave from Kalyanpur and Gabtali in Dhaka at different times every day from morning to night. Good hotels in Rangpur include Hotel Shah Amanat (Shipping Company Junction), Hotel Golden Tower (Shipping Company Junction), Hotel The Park (Shipping Company Junction), Hotel Tilottama (Thana Road), Hotel Vijay (Jail Road), RDRS (Jail Road).",
  },
  {
    id: 2,
    img: shopnopuri,
    title: "Shopnopuri Park",
    location: "Dinajpur, Rangpur",
    desc: "Shopnopuri Artificial Amusement Park is an artificial spot for tourists situated in Dinajpur district of Rangpur division in Bangladesh. There are rides, a artificial & a mini zoo, few rest-house, many garden, lakes, central picnic center and countless shopping areas. Other tourist locations include Fish World, Rongdhonu Art Gallery, and Moha Maya Indrojal. Fish World offers artificial fishes and various wet animals. The Animal Kingdom is filled with artificial statues of some animals like flamingos, dinosaurs, Pegasus and many more. Rongdhonu Art Gallery has a variety of sculptures and paintings. At Moha Maya Indrojal, there is magic. And there is a variety of animals. It is a popular site for picnics.",
    togo: "If you want to reach directly from Dhaka you will go up to Phulbari by bus then you need to hiring an auto- rickshaw to reach Swapnapuri or you can reach Dinajpur first then by local bus or hiring a private vehicle to directly reach the spot. It is taking about 2.5 hours from Dinajpur. There are several bus services from Gabtoli and Sayedabad of Dhaka to Dinajpur and the bus fare range is taka 450-650. The bus services names are BRTC, Shyamoli paribahan etc. To travel Shopnopuri you can also use train service. There is also a train service (Drutojan Express) from Dhaka to Dinajpur. During the train journey you will see many beautiful sceneries that are attract the tourists very much. Hope that train will be good solution for your comfortable journey.",
  },
  {
    id: 3,
    img: kuakata,
    title: "Kuakata Sea Beach",
    location: "Patuakhali, Barisal",
    desc: "Locally known as Sagar Kannya (Daughter of the Sea) is a rare scenic beauty spot on the southernmost tip of Bangladesh. Kuakata in Latachapli union under Kalapara Police Station of Patuakhali district is about 30 km in length and 6 km in breadth. It is 70 km from Patuakhali district headquarters and 320 km from Dhaka. At Kuakata excellent combination of the picturesque natural beauty, sandy beach, blue sky, huge expanse of water of the Bay and evergreen forest in really eye-catching. Kuakata is one of the rarest places which has the unique beauty of offering the full view of the rising and setting of crimson sun in the water of the Bay of Bengal in a calm environment. That perhaps makes Kuakata one of the world's unique beaches. This sandy beach has gentle slopes into the Bay of Bengal and bathing there is as pleasant as is walking or diving",
    togo: "By Direct Launch: You can also take a direct river boat from Dhaka sadarghat terminal to Patuakhali. This journey will cost you about the same as Barisal and these boats leaves little early around 4 to 7 PM. River boats are much nicer in Barisal route. Another issue is the time regarding taking this route. You will reach Pautakhali around 7 to 8 AM. From here you board a local rickety bus to Kuakata, about three hours. Distance between Pautakhali and Kuakata is about 70 km. By Bus: A direct BRTC bus service is also available from Dhaka to Kuakata that leaves from Sayedabad Bus terminal at night takes 12 hours to reach Kuakata. These buses are clean and comfortable. Direct bus route from Dhaka to Kuakata. “Sakura” costs around 450 Taka (US $6.00). It leaves every night at 10:30 from the Gabtoli Bus terminal near Technical Mor.",
  },
  {
    id: 4,
    img: paharpur,
    title: "Paharpur Buddhist Vihara",
    location: "Paharpur Badalgachhi, Naogaon",
    desc: "Somapura Mahavihara or Paharpur Buddhist Vihara in Paharpur, Badalgachhi, Naogaon, Bangladesh is among the best known Buddhist viharas or monasteries in the Indian Subcontinent and is one of the most important archaeological sites in the country. It was designated as a UNESCO World Heritage Site in 1985. It is one of the most famous examples of architecture in pre-Islamic Bangladesh. It dates from a period to the nearby Halud Vihara and to the Sitakot Vihara in Nawabganj Upazila of Dinajpur District. A number of monasteries grew up during the Pāla period in ancient India in the eastern regions of the Indian subcontinent, comprising Bengal and Magadha. According to Tibetan sources, five great Mahaviharas stood out: Vikramashila, the premier university of the era; Nalanda, past its prime but still illustrious The mahaviharas formed a network all of them were under state supervision. The earliest form of the Bengali language began to the emerge during the eighth century.",
    togo: "It is located in Badalgachi Upazila of Naogaon district. Sompur Bihar at Paharpur is about 282 km by road from Dhaka. Iit will take about 6.5 hours to reach Paharpur by bus/taxi/private car if no major stops are made along the way. If one starts from Dhaka, the route shall be Dhaka - Savar - Chandra - Tangail - Jamuna Bridge - Bogura - Naogaon - Badalgashi- Paharpur. The best way to tour the site is to first reach Naogaon and stay there or reach Badalgacchi and stay there in Dakbanglo.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderSection">
      <Slider {...settings}>
        {monthlyData.map((data, index) => (
          <div className="p-3" key={index}>
            <img src={data.img} alt="" className="w-full h-44" />
            <div className="">
              <h6 className="font-semibold">{data.title}</h6>
              <p className="text-xs">{data.desc.slice(0, 150)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
