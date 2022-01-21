import { useState } from "react";
function useUsersListProvider() {
  const [objectivesData, setObjectivesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [newObject, setNewObject] = useState([]);
  async function loadObjectives() {
    try {
      const response = await fetch("http://localhost:3001/targets/", {
        method: "GET",
      });
      const data = await response.json();
      return setObjectivesData(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function loadCategories() {
      console.log('to na função')
    if (!objectivesData) {
        console.log('estou no if')
      try {
        const response = await fetch("http://localhost:3001/categories/", {
          method: "GET",
        });
        const data = await response.json();
        return setCategoriesData(data);
      } catch (error) {
        console.log(error);
        console.log('entrei no catch')
      }
    }
    else{
        console.log('to no else')
        loadNewCategorie()
    }
  }
  function loadNewCategorie() {
    for (let i = 0; i < objectivesData.length; i++) {
      newObject.push({
        ...objectivesData[i],
        ...categoriesData.find(
          (item) => item.id === objectivesData[i].category
        ),
      });
      return newObject;
    }
  }
  return {
    objectivesData,
    setObjectivesData,
    loadObjectives,
    categoriesData,
    setCategoriesData,
    loadCategories,
    loadNewCategorie,
    newObject,
  };
}
export default useUsersListProvider;
