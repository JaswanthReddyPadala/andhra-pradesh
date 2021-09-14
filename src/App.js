import React, { useState } from "react";
import "./styles.css";

var places = [
  {
    name: "Araku Valley",
    img:
      "https://th.bing.com/th/id/OIP.RnjX4f1IhQEpWJUtEHktiAHaE8?w=262&h=180&c=7&o=5&pid=1.7",
    location: "Araku Valley, Vishakapatnam District",
    description: "Hilly Region, Peacful Atmosphere",
    rating: 5
  },
  {
    name: "Talakonda waterfalls",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.518PriT5Q0rH952JsF0R3QHaFj%26pid%3DApi&f=1",
    location: "Sri Venkateswara National Park, Chittoor District",
    description: "Fresh Waters, Chill Place",
    rating: 4.2
  },
  {
    name: "Rama Krishna Beach",
    img:
      "http://hotelakshaya.in/blog/wp-content/uploads/2018/01/RK-Beach-Vizag.jpg",
    location: "Rama Krishna beach, Vishakapatnam District",
    description: "Beach Place",
    rating: 3.8
  },
  {
    name: "Borra Caves",
    img:
      "https://th.bing.com/th/id/OIP.9mz597ZS5x-YePE0l5nFTAHaE9?w=255&h=180&c=7&o=5&pid=1.7",
    location: "Araku Valley, Vishakapatnam District",
    description: "Caves Area, Many tollywood films were taken here",
    rating: 3
  },
  {
    name: "Maredumilli",
    img:
      "https://5.imimg.com/data5/PU/UH/GLADMIN-12379454/maredumilli-1day-package-500x500.png",
    location: "Maredumilli, East Godavari District",
    description: "Excellent place for treking",
    rating: 3.5
  }
];

var foods = [
  {
    name: "Pootha Rekulu",
    img:
      "https://th.bing.com/th/id/OIP.A-mnw99sOsVUQsshyl31kAHaEI?w=302&h=180&c=7&o=5&pid=1.7",
    description: "A must sweet to taste",
    rating: 4.8
  },

  {
    name: "POT BIRIYANI",
    img:
      "https://th.bing.com/th/id/OIP._ufh1XGRtT9VAClqy675pQHaEm?w=286&h=180&c=7&o=5&pid=1.7",
    description: "Eat while it is still Hot",
    rating: 4.3
  },
  {
    name: "BAMBOO CHICKEN",
    img:
      "https://2.bp.blogspot.com/-GcSLRY_UZXU/Wc_hR8iUwwI/AAAAAAAAHtU/d7ACHzEYIX8Y49b9JLuSH-VE9S_M43GdACLcBGAs/s1600/Bamboo%2BChicken.jpg",
    description: "Spicy Masala",
    rating: 4
  },
  {
    name: "KAKINADA KAJA",
    img: "http://i.ytimg.com/vi/pjwFBo3sYpE/maxresdefault.jpg",
    description: "Famous in East Godavari district",
    rating: 3.7
  },
  {
    name: "FISH CURRY",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-llJe1FwJvFU%2FX0frRziXYzI%2FAAAAAAAAALA%2FfsgcbxyQGkA1Q6m_WG0V5mPPq4M3h2LmQCLcBGAsYHQ%2Fw1200-h630-p-k-no-nu%2FIMG-20200427-WA0014.jpg&f=1&nofb=1",
    description: "Famous in Nellores",
    rating: 4
  }
];

var temples = [
  {
    name: "Tirumala Venkateswara Temple",
    img:
      "https://th.bing.com/th/id/OIP.CLAaLqf5UgRajccq-X43zQHaEA?pid=Api&rs=1",
    description: "In Tirupati",
    rating: 5
  },
  {
    name: "LEPAKSHI TEMPLE",
    img:
      "https://i.pinimg.com/originals/37/f2/cd/37f2cdcc763bb4adff4b2946e766cba6.jpg",
    description: "In Lepakshi",
    rating: 3.8
  },
  {
    name: "Kanaka Durgamma Temple",
    img:
      "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Places-to-visit-in-Vijayawada600x400.jpg",
    description: "In Vijayawada",
    rating: 4
  },
  {
    name: "Narayana Temple",
    img:
      "http://3.bp.blogspot.com/-4frme_rq_pk/VIWnjtRiLBI/AAAAAAAAQ6M/L48zfb3Vhnc/s1600/annavaram-%2Btemple-in-india-AP9.jpg",
    description: "In Annavaram",
    rating: 3.6
  },
  {
    name: "Yaganti Temple",
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/img_5664edited_20171117122715.jpg",
    description: "In Yaganti",
    rating: 3.2
  }
];

const navItems = ["places", "foods", "temples"];

export default function App() {
  var [nav, setNav] = useState(places);

  function handleNavClick(item) {
    switch (item) {
      case "places":
        setNav(places);
        break;

      case "foods":
        setNav(foods);
        break;

      case "temples":
        setNav(temples);
        break;

      default:
        break;
    }
    // displayDetails(item);
  }

  // function displayDetails(item) {

  //   setNav(item);
  // }

  return (
    <div className="App">
      <div className="mainWrap flex-center">
        <h1>TRIP TO ANDHRA</h1>
        <p>YOU SHOULD NOT MISS THESE WHEN YOU PLANNED A TRIP TO ANDHRA</p>
      </div>

      <div className="navWrap flex-center">
        {navItems.map((item, index) => {
          return (
            <span
              className="navItem"
              onClick={() => handleNavClick(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div class="detailsWrap flex-center">
        {nav.map((each) => {
          return (
            <div class="card_wrap ">
              <img src={each.img} alt={each.name} />
              <div className="card_details flex-center">
                <h3>{each.name}</h3>
                <p>{each.description}</p>
                <p>Rating : {each.rating}/5</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
