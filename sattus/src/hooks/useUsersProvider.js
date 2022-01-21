import { useState } from "react";
function useUsersListProvider() {
  const [objectives, setObjectives] = useState(true);
  const [objectivesData, setObjectivesData] = useState([]);
  const [allObjectivesData, setAllObjectivesData] = useState([]);
  const [allCategoriesData, setAllCategoriesData] = useState([]);
  const [titleInput, setTitleInput]=useState("")
  const [descriptionInput, setDescriptionInput]=useState("")
  const [categoryInput, setCategoryInput]=useState("")
  const [complete, setComplete] = useState(false);
  const [ativas, setAtivas] = useState(true);
  const [showIcons, setShowIcons]=useState(true);
  // Actives
  function handleAtivas() {
    setComplete(false);
    setAtivas(true);
    setObjectives(true)
  }
  // Deleted
  function handleCompletas() {
    setComplete(true);
    setAtivas(false);
    setObjectives(false)
  }
  // Done
  function handleTodas() {
    setComplete(false);
    setAtivas(false);
    setObjectives(true)
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
      loadAllObjectives();
    } catch (error) {
      console.log(error);
    }
  };
  const createNewObjective = async () =>{
    try {
      const response = await fetch(
        "http://localhost:3001/targets",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: titleInput,
            description:  descriptionInput,
            category:  categoryInput,
            status: "active"
          }),
        }
      );

      const data = await response.json();

       } catch (error) {
      console.log(error);
    }
  }

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
    showIcons, 
    setShowIcons
  };
}
export default useUsersListProvider;
