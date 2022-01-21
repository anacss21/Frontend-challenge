import "./style.scss";
import { React, useState } from "react";
import setSearch from "../../assets/search.svg";

function Header() {
  // adicionar o filtro em outro momento
  // const [search,setSearchInput]=useState("")
  // const {allObjectivesData}=useUsersList()
  // function searchCards(event){
  //     setSearch(
  //       allObjectivesData.filter(item => {
  //         return (
  //           item.titulo.match(event.target.value)
  //         )
  //       })
  //     )
  // }
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
