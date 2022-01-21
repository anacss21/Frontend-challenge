import "./style.scss";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import Restore from "../../assets/restore.svg";
import { useEffect, React } from "react";
import useUsersList from "../../hooks/useUsersList";
function Card() {
  const {
    objectives,
    loadAllObjectives,
    allObjectivesData,
    loadAllCategories,
    allCategoriesData,
    handleChange,
  } = useUsersList();
  useEffect(() => {
    loadAllObjectives();
    loadAllCategories();
  }, []);
  return (
    <>
      {allObjectivesData.map((objective) => (
        <div className={"container-card"}>
          <div className="card">
            <div className="content">
              <h2 className="title">{objective.title}</h2>
              <p className="description">{objective.description}</p>
            </div>
            <div className="mark">
              {objectives && (
                <img
                  src={Check}
                  alt="x"
                  className="check"
                  onClick={() => {
                    handleChange(objective, "check");
                  }}
                />
              )}
              {objectives && (
                <img
                  src={Close}
                  alt="x"
                  className="close"
                  onClick={() => {
                    handleChange(objective, "close");
                  }}
                />
              )}

              {!objectives && (
                <img
                  src={Restore}
                  alt="x"
                  className="restore"
                  onClick={() => {
                    handleChange(objective, "restore");
                  }}
                />
              )}
            </div>
          </div>

          <div className="types">
            <button className="btn-category">
              {allCategoriesData.map((x) => {
                if (x.id === objective.category) {
                  return x.name;
                }
              })}
            </button>
            <div className="dateTime">
              <label className="dateName"> criado em: </label>
              <label className="dateName"> Excluido em: </label>
              <input
                className="getDate"
                type="text"
                value={new Date()
                  .toLocaleDateString("pt-BR", { timeZone: "UTC" })
                  .replace(" 00:00:00", "")}
              ></input>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Card;
