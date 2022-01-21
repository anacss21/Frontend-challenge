import { useContext } from "react";
import UsersListContext from "../contexts/UserListContext";
function useUsersList() {
  return useContext(UsersListContext);
}
export default useUsersList;
