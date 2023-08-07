import axios from "axios";
import {baseURL} from "../Constants/urls";

const apiService = axios.create({baseURL});



export {
    apiService
}