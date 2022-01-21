import "./style.scss";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import { useEffect, React } from "react";
import useUsersList from "../../hooks/useUsersList";
function Card() {
  const {
    objectivesData,
    setObjectivesData,
    loadObjectives,
    categoriesData,
    setCategoriesData,
    loadCategories,
    loadNewCategorie,
    newObject,
  } = useUsersList();
  useEffect(() => {
    loadObjectives();
    loadCategories();
    loadNewCategorie();
  }, []);
  return (
    <>
      {newObject.map((objective) => (
        <div className="container-card">
          <div className="card">
            <div className="content">
              <h2 className="title">{objective.title}</h2>
              <p className="description">{objective.description}</p>
            </div>
            <div className="mark">
              <img src={Check} alt="x" className="check" onClick={() => {}} />
              <img src={Close} alt="x" className="close" onClick={() => {}} />
              {/* <img src={Restore} alt="x" className="restore" onClick={() => {}} /> */}
            </div>
          </div>
          <div className="types">
            <button className="btn-category">{objective.name}</button>
            <div className="dateTime">
              <label className="dateName"> criado em: </label>
              <input
                className="getDate"
                type="text"
                value={new Date()
                  .toLocaleDateString("pt-BR", { timeZone: "UTC" })
                  .replace(" 00:00:00", "")}
              ></input>

              {/* <label className="dateName"> Finalizado em: </label>
          <input
            className="getDate"
            type="text"
            value={new Date()
              .toLocaleDateString("pt-BR", { timeZone: "UTC" })
              .replace(" 00:00:00", "")}
          ></input> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Card;
