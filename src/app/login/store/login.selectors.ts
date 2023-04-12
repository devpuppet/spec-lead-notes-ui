import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthData } from "src/app/shared/models/auth.service.model";

export const selectAuthResult = createFeatureSelector<AuthData>('[Auth] Login');

export const selectBearerToken = createSelector(
    selectAuthResult,
    authResult => authResult.jwtBearerToken
);

export const selectExpiration = createSelector(
    selectAuthResult,
    authResult => authResult.expiresIn
)

export const selectUserId = createSelector(
    selectAuthResult,
    authResult => authResult.userId
)