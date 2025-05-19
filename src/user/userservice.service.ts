import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
    users = []

    findAll() {
        return this.users
    }

    create(req){
        const newUser = new User(req.body.name,req.body.age )
        // @ts-ignore
        this.users.push(newUser)
        return newUser
    }
}
 


class User{
    constructor(public  name: string, public age : number){}

}