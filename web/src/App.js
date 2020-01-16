import React, { useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {  
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position)  => {
                console.log(position);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );

    },[]);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Technologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="Latitude">Latitude</label>
              <input name="Latitude" id="Latitude" required></input>
            </div>
            <div className="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude" id="Longitude" required></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/1569361?v=4"
                alt="Rafael Turnes"
              />
              <div className="user-info">
                <strong>Rafael Turnes</strong>
                <span> REACTJS, REACT Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Turnes</p>
            <a href="https://github.com/turnes"> Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/1569361?v=4"
                alt="Rafael Turnes"
              />
              <div className="user-info">
                <strong>Rafael Turnes</strong>
                <span> REACTJS, REACT Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Turnes</p>
            <a href="https://github.com/turnes"> Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/1569361?v=4"
                alt="Rafael Turnes"
              />
              <div className="user-info">
                <strong>Rafael Turnes</strong>
                <span> REACTJS, REACT Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Turnes</p>
            <a href="https://github.com/turnes"> Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/1569361?v=4"
                alt="Rafael Turnes"
              />
              <div className="user-info">
                <strong>Rafael Turnes</strong>
                <span> REACTJS, REACT Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Turnes</p>
            <a href="https://github.com/turnes"> Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
