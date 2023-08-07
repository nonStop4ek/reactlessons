import {apiService} from "./apiService";
import {urls} from "../Constants/urls";

const albumsService={
    getAll:()=>apiService.get(urls.albums)

}
export {
    albumsService
}