import { useState } from "react";
function useUsersListProvider() {
  const [objectives, setObjectives] = useState();
  const [objectivesData, setObjectivesData] = useState([]);
  const [allObjectivesData, setAllObjectivesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [allCategoriesData, setAllCategoriesData] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(false);

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

  const uptadeStatusObjective = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/targets/${id}  `, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          // id: allObjectivesData.id,
          // title: allObjectivesData.title,
          // description: allObjectivesData.description,
          // category: allObjectivesData.category,
          // createdAt: allObjectivesData.createdAt,
          status: allObjectivesData.status === "done" || "active",
        }),
      });
      const data = await response.json();
    } catch (error) {}
  };

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

  const handleChange = (event) => {
    allObjectivesData.filter((item) => {
      return item.status;
    });
    console.log("usei a função");
    console.log(handleChange());
  };

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
  };
}
export default useUsersListProvider;
