import "./style.scss";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import { useState, useEffect } from "react";
function Card() {
  const [objectivesData, setObjectivesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    async function loadObjectives() {
      try {
        const response = await fetch("http://localhost:3001/targets/", {
          method: "GET",
        });
        const data = await response.json();
        setObjectivesData(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadObjectives();
    async function loadCategories() {
      try {
        const response = await fetch("http://localhost:3001/categories", {
          method: "GET",
        });
        const data = await response.json();
        setCategoriesData(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadCategories();
  }, []);

  return (
    <>
      {objectivesData.map((objective) => (
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
            <button className="btn-category"></button>
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
