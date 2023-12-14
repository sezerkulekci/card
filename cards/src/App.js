import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.png";
import Bootstrap from "./images/bootstrap.png";
import Csharp from "./images/csharp.jpeg";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarm</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa eius, aliquam facere suscipit error praesentium sit incidunt blanditiis cupiditate, ratione omnis harum deserunt sequi dignissimos exercitationem corporis, beatae distinctio?"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="bootstrap"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa eius, aliquam facere suscipit error praesentium sit incidunt blanditiis cupiditate, ratione omnis harum deserunt sequi dignissimos exercitationem corporis, beatae distinctio?"
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa eius, aliquam facere suscipit error praesentium sit incidunt blanditiis cupiditate, ratione omnis harum deserunt sequi dignissimos exercitationem corporis, beatae distinctio?"
              />
            </div>
            <div className="column">
              <Course
                image={Kompleweb}
                title="FrontEnd"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa eius, aliquam facere suscipit error praesentium sit incidunt blanditiis cupiditate, ratione omnis harum deserunt sequi dignissimos exercitationem corporis, beatae distinctio"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
