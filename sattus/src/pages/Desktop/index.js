import "./style.scss";
import Card from "../../components/Card/index";
import Header from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/index";
import { React } from "react";
import useUsersList from "../../hooks/useUsersList";

function Desktop(estouEm) {
  const { objectives, setObjectives } = useUsersList();
  return (
    <div className="desktop">
      <Sidebar objectives={objectives} setObjectives={setObjectives} />
      <div className="teste">
        <Header />
        <div className="button-card">
          <div className="btn">
            {objectives && (
              <button className="btn-secondary ">Novo objetivo</button>
            )}
          </div>
          <Card estouEm={(estouEm = "Excluidos")} />
        </div>
      </div>
    </div>
  );
}
export default Desktop;
