import { createAction, props } from "@ngrx/store";
import { AuthData } from "src/app/shared/models/auth.service.model";

export const setAuthDataAction = createAction('[Auth] Set Data',
    props<{ authData: AuthData}>());

export const removeAuthDataAction = createAction('[Auth] Remove Data');