import axios from "axios";
import {baseUrl} from "../constants/Constants";
const apiService = axios.create({baseUrl});


export {apiService}
