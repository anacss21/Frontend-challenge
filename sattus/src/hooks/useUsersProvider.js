import { useState } from "react";
function useUsersListProvider() {
  const [objectives, setObjectives] = useState();
  const [objectivesData, setObjectivesData] = useState([]);
  const [allObjectivesData, setAllObjectivesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [allCategoriesData, setAllCategoriesData] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [complete, setComplete] = useState(false);
  const [ativas, setAtivas] = useState(true);
  const [operation, setOperation] = useState(true);
  // Actives
  function handleAtivas() {
    setComplete(false);
    setAtivas(true);
  }
  // Deleted
  function handleCompletas() {
    setComplete(true);
    setAtivas(false);
  }
  // Done
  function handleTodas() {
    setComplete(false);
    setAtivas(false);
  }

  async function loadAllObjectives() {
    try {
      const response = await fetch("http://localhost:3001/targets/", {
        method: "GET",
      });
      const data = await response.json();
      return setAllObjectivesData(data);
    } catch (error) {
      console.log(error);
    }
  }

  // async function loadObjectives(id) {
  //   try {
  //     console.log("estou em objective");
  //     const response = await fetch(`http://localhost:3001/targets/${id}`, {
  //       method: "GET",
  //     });
  //     console.log("fiz requisição");

  //     const data = await response.json();

  //     return setObjectivesData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function loadAllCategories() {
    try {
      const response = await fetch("http://localhost:3001/categories/", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      return setAllCategoriesData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const uptadeStatusObjective = async (objectives, operation) => {
    console.log("estado natural do operation", operation);
    try {
      let operationIcon = objectives.status;

      switch (operation) {
        case "check":
          operationIcon = "done";
          break;
        case "close":
          operationIcon = "deleted";
          break;
        case "restore":
          operationIcon = "active";
          break;
      }
      console.log("Cliquei operation", operation);
      const body = {
        status: operationIcon,
      };
      const response = await fetch(
        `http://localhost:3001/targets/${objectives.id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      console.log(data);
      loadAllObjectives();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleChange(objectives, operation) {
    await uptadeStatusObjective(objectives, operation);
  }
  // async function loadCategories(idCategorie) {
  //   console.log("to na função por id");
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/categories/${idCategorie}`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     return setCategoriesData(data);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("entrei no catch");
  //   }
  // }

  return {
    objectivesData,
    setObjectivesData,
    loadAllObjectives,
    allObjectivesData,
    setAllObjectivesData,
    objectives,
    setObjectives,
    // loadObjectives,
    // loadCategories,
    categoriesData,
    setCategoriesData,
    loadAllCategories,
    allCategoriesData,
    setAllCategoriesData,
    uptadeStatusObjective,
    updateStatus,
    setUpdateStatus,
    // handleChange,
    complete,
    setComplete,
    ativas,
    setAtivas,
    handleAtivas,
    handleCompletas,
    handleTodas,
    operation,
    setOperation,
    handleChange,
  };
}
export default useUsersListProvider;
