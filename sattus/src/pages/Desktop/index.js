import "./style.scss";
import Card from "../../components/Card/index";
import Header from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/index";
import {useState} from 'react'
function Desktop() {
  const [objectives, setObjectives]=useState(false)
  return (
    <div className="desktop">
      <Sidebar objectives={objectives} setObjectives={setObjectives}/>
      <div className="teste">
        <Header />
        <div className="button-card">
          <div className="btn">
            {objectives && <button className="btn-secondary ">Novo objetivo</button>}
          </div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default Desktop;
