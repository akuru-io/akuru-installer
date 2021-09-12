import { apiBaseUrl } from 'config';
import axios from "axios";

export const fetchAll = () =>
axios.get(apiBaseUrl)
.then((response) =>[response.data.fonts])
.catch((error) => [error,null]);
