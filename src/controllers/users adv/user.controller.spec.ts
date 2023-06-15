import { User } from "../../models/user";
import { UsersRepo } from "../../repo/usersRepo";
import UserController from "./users.controller";

describe('Users Controller', ()=>{
    describe('Get Users', () => {
        test('should return empty array', ()=>{
            // Arrange
            const controller = new UserController();
            const spy = jest.spyOn(UsersRepo, 'getUsers').mockReturnValue([]);

            //Act
            const users = controller.getUsers();

            //Assert 
            expect(users).toEqual([]);
            expect(spy).toBeCalledTimes(1);

            //CleanUp
            spy.mockReset();
        })

        test('should return array of Users', ()=>{
            // Arrange
            const controller = new UserController();

            const expectedUsers: User[] = [{
                id: 1,
                name: 'Stehpean'
            }]

            const spy = jest.spyOn(UsersRepo, 'getUsers').mockReturnValue(expectedUsers);

            //Act
            const users = controller.getUsers();

            //Assert 
            expect(users).toEqual(expectedUsers);
            expect(spy).toBeCalledTimes(1);

            //CleanUp
            spy.mockReset();
        })
    })

    describe('get User by id', () => {
        test('should return expect user', () => {

            // Arrange
            const controller = new UserController();

            const expectedUser: User = {
                id: 1,
                name: 'udRa'
            };

            const spy = jest.spyOn(UsersRepo, 'getUser').mockReturnValue(expectedUser);

            //Act
            const user = controller.getUserById(1);

            expect(user).toEqual(expectedUser);
            expect(spy).toBeCalledWith(1)
            expect(spy).toBeCalledTimes(1);

                //CleanUp
                spy.mockReset();

        })
        test('if no id provided should return Error message',() => {

            // Arrange
            const controller = new UserController();
            const expectResult = 'Id is required'

            const spy = jest.spyOn(UsersRepo, 'getUser');

            //Act
            const result = controller.getUserById(undefined);
            
            //Asseter
            expect(result).toBe(expectResult);
            expect(spy).toBeCalledTimes(0);

                //CleanUp
                spy.mockReset();
        })
    })
})