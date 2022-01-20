import "./style.scss";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import Restore from "../../assets/restore.svg";

function Card() {
  return (
    <div className="container-card">
      <div className="card">
        <div className="content">
          <h2 className="title">Título do Objetivo</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mark">
          <img src={Check} alt="x" className="check" onClick={() => {}} />
          <img src={Close} alt="x" className="close" onClick={() => {}} />
          {/* <img src={Restore} alt="x" className="restore" onClick={() => {}} /> */}
        </div>
      </div>

      <div className="types">
        <button className="btn-category">Categoria</button>
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
  );
}
export default Card;
