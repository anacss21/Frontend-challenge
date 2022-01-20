import "./style.scss";
import setSearch from "../../assets/search.svg";

function Header() {
  return (
    <div className="component-header">
      <div>
        <div className="search">
          <input
            className="search-input"
            disable
            placeholder="Pesquisar"
            type="text"
          ></input>
        </div>
        <img src={setSearch} />
      </div>
      <h2 className="name">Olá Bianca!</h2>
    </div>
  );
}
export default Header;
