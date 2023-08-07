import {apiService} from "./apiService";
import {urls} from "../Constants/urls";


const todosService={
    getAll:()=>apiService.get(urls.todos)
}


export {
    todosService
}