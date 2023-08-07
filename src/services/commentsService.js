import {apiService} from "./apiService";
import {urls} from "../Constants/urls";

const commentsService={
    getAll:()=>apiService.get(urls.comments)

}
export {commentsService}