import { useState } from "react";
function useUsersListProvider() {
  const [objectives, setObjectives] = useState();
  const [objectivesData, setObjectivesData] = useState([]);
  const [allObjectivesData, setAllObjectivesData] = useState([]);
  const [allCategoriesData, setAllCategoriesData] = useState([]);
  const [complete, setComplete] = useState(false);
  const [ativas, setAtivas] = useState(true);

  function handleAtivas() {
    setComplete(false);
    setAtivas(true);
  }
  function handleCompletas() {
    setComplete(true);
    setAtivas(false);
  }
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
  return {
    objectivesData,
    setObjectivesData,
    loadAllObjectives,
    allObjectivesData,
    setAllObjectivesData,
    objectives,
    setObjectives,
    loadAllCategories,
    allCategoriesData,
    setAllCategoriesData,
    uptadeStatusObjective,
    complete,
    setComplete,
    ativas,
    setAtivas,
    handleAtivas,
    handleCompletas,
    handleTodas,
    handleChange,
  };
}
export default useUsersListProvider;
