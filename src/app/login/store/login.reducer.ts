import { createReducer, on } from "@ngrx/store";
import { setAuthDataAction, removeAuthDataAction } from "./login.actions";
import { AuthData } from "src/app/shared/models/auth.service.model";

export const initialState: AuthData = {
    userId: undefined,
    jwtBearerToken: undefined,
    expiresIn: undefined
}

export const authReducer = createReducer(
    initialState,
    on(setAuthDataAction, (state, { authData: authResult }) => {
        return authResult;
    }),
    on(removeAuthDataAction, (state) => {
        return initialState;
    })
);