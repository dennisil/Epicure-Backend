import JWT from "jsonwebtoken";

export class Authenticator {
  public static authUser(req: any, res: any, next: any) {
    const token = req.headers["x-access-token"];
    if (!token) res.send("No Token Provided");
    else {
      JWT.verify(token, "secret", (err: any, decoded: any) => {
        if (err) {
          res
            .status(403)
            .json({ auth: false, message: "You failed to authenticate" });
        } else {
          req.body.isUserAdmin = decoded.user.isAdmin;
          next();
        }
      });
    }
  }
  public static IsUserAdmin(req: any, res: any, next: any) {
    if (req.body && req.body.isUserAdmin) {
      console.log("admin");
      next();
    } else {
      res.status(403).json("Only an admin can do this");
    }
  }
}
