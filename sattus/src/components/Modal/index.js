import { Number } from "core-js";
import { useState } from "react/cjs/react.development";
import useUsersList from "../../hooks/useUsersList";

function Modal() {
  const {
    titleInput,
    setTittleInput,
    descriptionInput,
    setDescriptionInput,
    categoryInput,
    setCategoryInput,
  } = useUsersList();
  return (
    <div className="background-modal">
      <div className="modal">
        <label>Título do objetivo</label>
        <input
          className="input-modal"
          type="text"
          required
          placeholder="Digite o título"
          onChange={(e) => {setTittleInput(e.target.value)}}
          value={titleInput}
        />
      </div>
      <div className="modal">
        <label>Descrição</label>
        <input
          className="input-modal"
          type="text"
          required
          placeholder="Digite a descrição"
          onChange={(e) => {setDescriptionInput(e.target.value)}}
          value={descriptionInput}
        />
      </div>
      <div className="modal">
        <label>status</label>
        <input
          className="input-modal"
          type="text"
          required
          placeholder="Digite o título"
          onChange={(e) => {setTittleInput(e.target.value)}}
          value={titleInput}
        />
      </div>
      <div className="modal">
        <label>Categoria</label>
        <input
          className="input-modal"
          type={Number}
          required
          placeholder="Digite a categoria"
          min={1}
          max={5}
          onChange={(e) => {setTittleInput(e.target.value)}}
          value={titleInput}
        />
      </div>
    </div>
  );
}
export default Modal;
