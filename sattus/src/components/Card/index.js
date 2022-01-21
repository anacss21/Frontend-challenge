import "./style.scss";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import Restore from "../../assets/restore.svg";
import { useEffect, React, useState } from "react";
import useUsersList from "../../hooks/useUsersList";
function Card() {
  const [icon, setIcon] = useState(true);
  const {
    objectives,
    loadAllObjectives,
    allObjectivesData,
    loadAllCategories,
    allCategoriesData,
    handleChange,
    complete,
    ativas,
  } = useUsersList();
  useEffect(() => {
    loadAllObjectives();
    loadAllCategories();
  }, []);
  function backgroundCard(objective) {
    if (objective.status === "done") {
      return "container-card green";
    } else if (objective.status === "active") {
      return "container-card white";
    } else {
      return "container-card grey";
    }
  }
  function infoCard(objective) {
    if (objective.status === "done") {
      return "finalizado em:";
    } else if (objective.status === "active") {
      return "criado em:";
    } else {
      return "excluído em";
    }
  }
  return (
    <>
      {allObjectivesData
        .filter((item) => {
          if (complete && !objectives) {
            console.log("Estou no if", item);
            return item.status === "deleted";
          } else if (ativas) {
            console.log("Estou em else if", item);
            return item.status === "active" || item.status === "done";
          }
          console.log("Estou em", item);
          return item;
        })
        .map((objective) => (
          <div className={`${backgroundCard(objective)}`}>
            <div className="card">
              <div className="content">
                <h2 className="title">{objective.title}</h2>
                <p className="description">{objective.description}</p>
              </div>
              <div className="mark">
                {console.log("sou icon", icon)}
                {console.log("sou objectives", objectives)}
                {objective.status !== "done" && objectives && (
                  <>
                    <img
                      src={Check}
                      alt="x"
                      className="check"
                      onClick={() => {
                        setIcon(objective.id);
                        console.log(icon);
                        handleChange(objective, "check");
                      }}
                    />
                    <img
                      src={Close}
                      alt="x"
                      className="close"
                      onClick={() => {
                        handleChange(objective, "close");
                      }}
                    />
                  </>
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
                <label className="dateName">{infoCard(objective)}</label>
                <span className="getDate">
                  {new Date()
                    .toLocaleDateString("pt-BR", { timeZone: "UTC" })
                    .replace(" 00:00:00", "")}
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
export default Card;
