const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

const user = require("../controllers/user.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);

  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

  // Create a new User
  app.post("/api/test/createUser", user.create);

  // Retrieve all User
  app.get("/api/test/userList", user.findAll);

  // Retrieve a single User with id
  app.get("/api/test/user/:id", user.findOne);

  // Update a User with id
  app.put("/api/test/user/:id", user.update);

  // Delete a User with id
  app.delete("/api/test/user/:id", user.delete);
};
