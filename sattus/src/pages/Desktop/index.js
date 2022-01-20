import "./style.scss";
import Card from "../../components/Card/index";
import Header from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/index";

function Desktop() {
  return (
    <div className="desktop">
      <Sidebar />
      <div className="teste">
        <Header />
        <div className="button-card">
          <div className="btn">
            <button className="btn-secondary ">Novo objetivo</button>
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
