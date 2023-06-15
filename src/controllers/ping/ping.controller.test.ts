import PingController from "./ping.controller";

test("should return pong message", async () => {
  // Arrange
  const controller = new PingController();
  // Act
  const response = await controller.getMessage();
  // Assert
  expect(response.message).toBe("pong");
  // CleanUp
  
});

test('should return empty array', ()=>{
  // Arrange
  // const controller = new UserController();
  // const spy = jest.spyOn(UsersRepo, 'getUsers').mockReturnValue([]);

  // //Act
  // const users = controller.getUsers();

  // //Assert 
  // expect(users).toEqual([]);
  // expect(spy).toBeCalledTimes(1);

  // //CleanUp
  // spy.mockReset();
})