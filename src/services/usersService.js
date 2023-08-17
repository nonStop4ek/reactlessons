import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService={
    getAll:()=>apiService.get(urls.users)
}
export {usersService}