import { get } from "http";
import { Get, Route } from "tsoa";
import { UsersRepo } from "../../repo/usersRepo";

@Route('users')
export default class UserController {

    @Get('/')
    getUserById(id: any) {
        if (!id) return 'Id is required';
        return UsersRepo.getUser(id);
    }
    @Get('/getUsers')
    getUsers() {
        return UsersRepo.getUsers();
    }
}