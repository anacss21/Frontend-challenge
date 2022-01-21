import "./style.scss";
import Logo from "../../assets/Logo.svg";
import goal from "../../assets/objectives.svg";
import trash from "../../assets/trash.svg";
import Line from "../../assets/Line.svg";
import useUsersList from "../../hooks/useUsersList";
function Sidebar({ objectives, setObjectives }) {
  const { handleCompletas, handleAtivas } = useUsersList();
  return (
    <header className="sidebar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
      </div>
      <div className="boxesSidebar">
        <div className="box" onClick={() => handleAtivas() }>
          <div className="boxIn">
            <img className="goal" src={goal} />
            <h3 className="description">Objetivos</h3>
          </div>
          {objectives && (
            <div className="divLine">
              <img className="line" src={Line} />
            </div>
          )}
        </div>
        <div className="box" onClick={() => handleCompletas()}>
          <div className="boxIn">
            <img className="trash" src={trash} />
            <h3 className="description">Excluídos</h3>
          </div>
          {!objectives && (
            <div className="divLine">
              <img className="line" src={Line} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Sidebar;
