import "./style.scss";
import { React } from "react";
import setSearch from "../../assets/search.svg";
import useUsersList from "../../hooks/useUsersList";

function Header() {
  // const { handleChange } = useUsersList();
  return (
    <div className="component-header">
      <div>
        <div className="search">
          <input
            className="search-input"
            disable
            placeholder="Pesquisar"
            type="text"
            // onchange={handleChange()}
          />
          <img src={setSearch} />
        </div>
      </div>
      <h2 className="name">Olá Bianca!</h2>
    </div>
  );
}
export default Header;
