
import {Constellation, Star} from "../../Sky-management-backend/src/models/models";

export interface Post{
  
  id: number,
  name: string,
  description: string,
  imageLink: string,

   stars: Star[]
}