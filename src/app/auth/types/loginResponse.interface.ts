import {CurrentUserInterface} from "../../shared/types/currentUser.interface";

export interface LoginResponseInterface {
  access_token: string
  token_type: string
  expires_in: number
  refresh_in: number
  user: CurrentUserInterface
}
