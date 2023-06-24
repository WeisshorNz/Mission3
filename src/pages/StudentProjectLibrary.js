
import "../styling/SPL.css";
import NavBar from "../kSComponents/NavBar.js";
import ScrollUp from "../componentsLuis/ScrollUp.js";
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
import Footer from "../componentsLuis/Footer.jsx";

export default function StudentProyectLibrary() {
  return (
    <>
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-SPL-container">
        <section className="myCheckbox">
          <h1>SUBSCRIPTION</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> Free</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Premium</label>
          </div>

          <br />
          <h1>ACTIVITY TYPE</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> Animation</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Game</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Chatbot</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Augmented Reality</label>
          </div>
          <br />
          <h1> YEAR LEVEL</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> 1 - 4</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> 5 - 6</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> 7 - 8 </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> 9 - 13</label>
          </div>
          <br />
          <h1> SUBJECT MATTER</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> Computer Science</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Maths</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Science</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Language</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Art</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Music</label>
          </div>
          <br />
        </section>

        <section className="projects-container">
          <h1>PROJECTS</h1>
          <p>
            Welcome to the library project.You can use the filters on the right
            to help you search for specific projects
          </p>

          <div className="button-container">
            <div className="buttons left">
              <button id="beginner">BEGINNER</button>
              <button id="intermediate">INTERMEDIATE</button>
              <button id="advanced">ADVANCED</button>
            </div>
            <div className="buttons right">
              <h3>SHOW</h3>
              <button id="five">5</button>
              <button id="ten">10</button>
              <button id="all">All</button>
            </div>
          </div>

          <div className="image-container">
            <div className="image">
              <img src={Project01} alt="Introduction" />
              <h2>Introduction</h2>
              <p>BEGINNER | Animation</p>
            </div>
            <div className="image">
              <img src={Project02} alt="My Birthday" />
              <h2>My Birthday</h2>
              <p>BEGINNER | Game</p>
            </div>
            <div className="image">
              <img src={Project03} alt="10 Block Challenge" />
              <h2>10 Block Challenge</h2>
              <p>INTERMEDIATE | Animation</p>
            </div>
            <div className="image">
              <img src={Project04} alt="Build a band" />
              <h2>Build a band</h2>
              <p>INTERMEDIATE | Game</p>
            </div>
            <div className="image">
              <img src={Project05} alt="The bear and the monkey" />
              <h2>The bear and the monkey</h2>
              <p>BEGINNER | Game</p>
            </div>
            <div className="image">
              <img src={Project06} alt="Bebugging" />
              <h2>Debugging</h2>
              <p>ADVANCED | Animation</p>
            </div>
            <div className="image">
              <img src={Project07} alt="About me" />
              <h2>About me</h2>
              <p>BEGINNER | Animation</p>
            </div>
            <div className="image">
              <img src={Project08} alt="I am here!" />
              <h2>I am here!</h2>
              <p>INTERMEDIATE | Animation</p>
            </div>
            <div className="image">
              <img src={Project09} alt="Funny faces" />
              <h2>Funny faces</h2>
              <p>BEGINNER | Game</p>
            </div>
            <div className="image">
              <img src={Project10} alt="It tickles!" />
              <h2>It tickles!</h2>
              <p>INTERMEDIATE | Animation</p>
            </div>
            <div className="image">
              <img src={Project11} alt="Penguin in a Desert" />
              <h2>Penguin in a Desert</h2>
              <p>BEGINNER | Chatbot</p>
            </div>
            <div className="image">
              <img src={Project12} alt="Time Travel" />
              <h2>Time Travel</h2>
              <p>BEGINNER | Animation</p>
            </div>
            <div className="image">
              <img src={Project13} alt="Birthday Card" />
              <h2>Birthday Card</h2>
              <p>BEGINNER | Chatbot</p>
            </div>
            <div className="image">
              <img src={Project14} alt="The Lion and the Mouse Part 1" />
              <h2>The Lion and the Mouse Part 1</h2>
              <p>BEGINNER | Animation</p>
            </div>
            <div className="image">
              <img src={Project15} alt="The Lion and the Mouse Part 2" />
              <h2>The Lion and the Mouse Part 2</h2>
              <p>INTERMEDIATE | Animation</p>
            </div>
          </div>
          <ScrollUp />
        </section>
      </div>
      <Footer />
    </>
  );
}
