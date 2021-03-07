import React from "react";

import "./sidebar.css";

import logoEndToEnd from "../assets/endtoend.png";

export default function SideBar() {
  return (
    <aside id="app-sidebar" className="app-sidebar">
      <img src={logoEndToEnd} alt="Logo End To End" />
      <div>
        <h1>
          Inteligência para o seu <br />
          negócio
        </h1>
        <p>
          Ajudamos você a tomar decisões e para <br />
          aprimorar a gestão da sua empresa e melhorar seus resultados
        </p>
      </div>
      {/* <footer>
        <button type="button"></button>
      </footer> */}
    </aside>
  );
}
