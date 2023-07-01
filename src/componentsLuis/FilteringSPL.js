import React, { useState } from "react";
import "../styling/SPL.css";
import Project01 from "../componentsLuis/projectsImages/Project01.png";
import Project02 from "../componentsLuis/projectsImages/Project02.png";
import Project03 from "../componentsLuis/projectsImages/Project03.png";
import Project04 from "../componentsLuis/projectsImages/Project04.png";
import Project05 from "../componentsLuis/projectsImages/Project05.png";
import Project06 from "../componentsLuis/projectsImages/Project06.png";
import Project07 from "../componentsLuis/projectsImages/Project07.png";
import Project08 from "../componentsLuis/projectsImages/Project08.png";
import Project09 from "../componentsLuis/projectsImages/Project09.png";
import Project10 from "../componentsLuis/projectsImages/Project10.png";
import Project11 from "../componentsLuis/projectsImages/Project11.png";
import Project12 from "../componentsLuis/projectsImages/Project12.png";
import Project13 from "../componentsLuis/projectsImages/Project13.png";
import Project14 from "../componentsLuis/projectsImages/Project14.png";
import Project15 from "../componentsLuis/projectsImages/Project15.png";

export default function FilteringSPL() {
  const pictureData = [
    {
      id: 1,
      name: "Introduction",
      image: <img src={Project01} alt="Introduction" />,
      category: "Animation",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 2,
      name: "My Birthday",
      image: <img src={Project02} alt="My Birthday" />,
      category: "Game",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 3,
      name: "10 Block Challenge",
      image: <img src={Project03} alt="10 Block Challenge" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 4,
      name: "Build a band",
      image: <img src={Project04} alt="Build a band" />,
      category: "Game",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 5,
      name: "The bear and the monkey",
      image: <img src={Project05} alt="The bear and the monkey" />,
      category: "Game",
      level: "Advanced",
      subscription: "Premium",
    },
    {
      id: 6,
      name: "Debugging",
      image: <img src={Project06} alt="Debugging" />,
      category: "Animation",
      level: "Advanced",
      subscription: "Premium",
    },
    {
      id: 7,
      name: "About me",
      image: <img src={Project07} alt="About me" />,
      category: "Animation",
      level: "Begginer",
      subscription: "Free",
    },
    {
      id: 8,
      name: "I am here!",
      image: <img src={Project08} alt="I am here!" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 9,
      name: "Funny faces",
      image: <img src={Project09} alt="Funny Faces" />,
      category: "Game",
      level: "Beginner",
      subscription: "Premium",
    },
    {
      id: 10,
      name: "It tickles!",
      image: <img src={Project10} alt="It tickles!" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 11,
      name: "Penguin in a Desert",
      image: <img src={Project11} alt="Penguin in a Desert" />,
      category: "Chatbot",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 12,
      name: "Time Travel",
      image: <img src={Project12} alt="Time Travel" />,
      category: "Animation",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 13,
      name: "Birthday Card",
      image: <img src={Project13} alt="Birthday Card" />,
      category: "Chatbot",
      level: "Beginner",
      subscription: "Premium",
    },
    {
      id: 14,
      name: "The Lion and the Mouse Part 1",
      image: <img src={Project14} alt="The Lion and the Mouse Part 1" />,
      category: "Animation",
      level: "Beginner",
      subscription: "Premium",
    },
    {
      id: 15,
      name: "The Lion and the Mouse Part 2",
      image: <img src={Project15} alt="The Lion and the Mouse Part 2" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
  ];

  const [quantityDisplayed,setQuantityDisplayed] = useState(pictureData.length)
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const [subscription,setSubscription] = useState("")

  const handleLevel = (level) => {
    setSelectedLevel(level);
  };

  const handleQuantity = (total) =>{
    setQuantityDisplayed(total);
  }

  const filteredlevel = pictureData.filter(
    (data) => data.level === selectedLevel
  );
console.log(filteredlevel);

  const filteredQuantity = filteredlevel.slice(0,quantityDisplayed);
  console.log(filteredQuantity);


  return (
    <>
      <div className="button-container">
        <div className="buttons left">
          <button
            id="beginner"
            onClick={() => handleLevel("Beginner")}
            // className={selectedLevel === "Beginner" ? "active" : ""}
          >
            BEGINNER
          </button>

          <button
            id="intermediate"
            onClick={() => handleLevel("Intermediate")}
            // className={selectedLevel === "Intermediate" ? "active" : ""}
          >
            INTERMEDIATE
          </button>

          <button
            id="advanced"
            onClick={() => handleLevel("Advanced")}
            // className={selectedLevel === "Advanced" ? "active" : ""}
          >
            ADVANCED
          </button>
        </div>
        <div className="buttons right">
          <h3>SHOW</h3>
          <button id="five" onClick={() => handleQuantity(5)}>
            5
          </button>
          <button id="ten" onClick={() => handleQuantity(10)}>
            10
          </button>
          <button id="all" onClick={() => handleQuantity(pictureData.length)}>
            All
          </button>
        </div>
      </div>

      <div className="image-container">

        {filteredQuantity.map((data) => (
          <div class="image" key={data.id}>
            {data.image}
            <h2>{data.name}</h2>
            <p>
              {data.level} | {data.category}
            </p>

          </div>
        ))}
      </div>
    </>
  );
}
