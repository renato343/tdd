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