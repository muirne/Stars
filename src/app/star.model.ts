import {Constellation, Star} from "../../Sky-management-backend/src/models/models";

export interface Star2 {
  id: number,
  name: string,
  description: string,
  imageLink: string,

   constellation: number
}
