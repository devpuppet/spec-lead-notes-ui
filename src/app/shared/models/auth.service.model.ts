export interface AuthResult {
    userId: string;
    jwtBearerToken: string;
    expiresIn: number
}