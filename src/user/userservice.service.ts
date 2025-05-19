import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
    users = []

    findAll() {
        return this.users
    }

    create(createUserDto){
        const {name, age, role} = createUserDto
        const newUser = new User(name, age, role)
        // @ts-ignore
        this.users.push(newUser)
        return newUser
    }
}
 


class User{
    constructor(public  name: string, public age : number, public role: string){}

}