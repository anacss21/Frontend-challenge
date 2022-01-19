import "./style.scss";
import { React } from "react";

function Menu() {
  return (
    <div className="page">
      <div className="menuLateral">
        <item className="sidebar-item"> Objetivos</item>
        <item className="sidebar-item"> Excluídos</item>
      </div>
      <div className="header">
        <input className="pesquisar">avs</input>
        <h2>Olá Bianca!</h2>
      </div>
    </div>
  );
}

export default Menu;
