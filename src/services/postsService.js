import {apiService} from "./apiService";
import {urls} from "../Constants/urls";

const postsService={
    getById:(id)=>apiService.get(urls.posts.byId(id))

}
export {postsService}