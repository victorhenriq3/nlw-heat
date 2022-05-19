import { Request, Response, NextFunction } from "express";  
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            errorCode: "token invalid"
        })
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "b6d78e18e10fc1aa0b2f3eb068b658da") as IPayload

        request.user_id = sub

        return next()
    } catch (error) {
        return response.status(401).json({errorCode: "token experid"})
    }
    
    

    
}