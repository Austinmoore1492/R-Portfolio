import React, { Fragment } from "react";
import ProjectsTop from "./ProjectsTop";

const Projects = () => (
  <Fragment>
    <ProjectsTop />
    <div className="profileContainer">
      <div id="projects">
        <div id="img">
          <div className="img">
            <a
              href="https://react-test-store.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/storePic.png" alt="Beat The Clock Website" />
            </a>
            <h3>React E-Commerce Store</h3>
            <p>React E-Commerce Store</p>
            <p className="p-border">
              Built with React, Express, Node, and Stripe!
            </p>
            <a
              href="https://github.com/Austinmoore1492/React-Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://react-test-store.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site (Heroku)
            </a>
          </div>

          <div className="img">
            <a
              href="https://flw-vent-it-out.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/ventItOut.png" alt="Vent it out" />
            </a>
            <h3>Vent It Out</h3>
            <p>A place for people to say what they want</p>
            <p className="p-border">
              Built with Vue, Express, MongoDB, and Node!
            </p>
            <a
              href="https://github.com/Austinmoore1492/Vent-It-Out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://flw-vent-it-out.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site (Heroku)
            </a>
          </div>

          <div className="img">
            <a
              href="https://overwatch-stats-tracker.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/overwatch.png" alt="search overwatch Stats" />
            </a>
            <h3>OverWatch Stats Tracker</h3>
            <p>Track OverWatch stats</p>
            <p className="p-border">Built with Vue, Express, and Node!</p>
            <a
              href="https://github.com/Austinmoore1492/OverWatch-Stats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://overwatch-stats-tracker.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site (Heroku)
            </a>
          </div>

          <div className="img">
            <a
              href="https://csb-5ykb2.austinmoore1492.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/astronomy.png"
                alt="Display NASAs Picture of the Day"
              />
            </a>
            <h3>Astronomy Picture of the Day</h3>
            <p>Display NASAs Picture of the Day</p>
            <p className="p-border">Built with React!</p>
            <a
              href="https://github.com/Austinmoore1492/pic-of-the-day"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://csb-5ykb2.austinmoore1492.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>

          <div className="img">
            <a
              href="https://austinmoore1492.github.io/Random-Meal-Generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/mealGen.png" alt="Random Meal Website" />
            </a>
            <h3>Random Meal Generator</h3>
            <p>No More Wondering What's For Dinner</p>
            <p className="p-border">Built with Vanilla JS, HTML, and CSS!</p>
            <a
              href="https://github.com/Austinmoore1492/Random-Meal-Generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://austinmoore1492.github.io/Random-Meal-Generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>

          <div className="img">
            <a
              href="https://github.com/Austinmoore1492?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/other.png" alt="Other Projects" />
            </a>
            <h3>Other Projects</h3>
            <p>Other Projects on GitHub</p>
            <a
              href="https://github.com/Austinmoore1492"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Projects;
