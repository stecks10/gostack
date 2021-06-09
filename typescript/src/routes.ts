import {Request, Response} from 'express';

export function helloWorld(resquest: Request, response: Response)  {
    return response.json({ message: 'Hello World'});
}