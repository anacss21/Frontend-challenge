import "./style.scss";
import setSearch from "../../assets/search.svg";

function Header() {
  // const handleChange = (event) => {
  //   objective.filter((item) => {
  //     return item.title.toLowerCase().match(event.target.value.toLowerCase());
  //   });
  // };

  return (
    <div className="component-header">
      <div>
        <div className="search">
          <input
            className="search-input"
            disable
            placeholder="Pesquisar"
            type="text"
          />
          <img src={setSearch} />
        </div>
      </div>
      <h2 className="name">Olá Bianca!</h2>
    </div>
  );
}
export default Header;
