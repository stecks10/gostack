import {Request, Response} from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces 

export function helloWorld(resquest: Request, response: Response){
    const user = createUser({
        email: 'vitor@gmail.com',
        password: '123456',
        techs: [
            'Node.js', 
            'reactJs', 
            'React Native', 
            {title: 'Javascript', experience: 100},
    ],
    });

    return response.json({ message: 'Hello World'});
}