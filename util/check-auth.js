const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config.js");

module.exports = (context) => {
  // Context contains req
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    // Bearer ... by convention
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, SECRET);
        return user;
      } catch (e) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }

    throw new Error("Authentication token must be \"Bearer [token]\"")
  }
  throw new Error("Autherization header must be provided")
};
