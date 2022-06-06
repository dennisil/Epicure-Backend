// import AbsController from "../Base/AbsController";
// import { Authenticator } from "../../middlewares/auth/Authenticator";
// import { AuthenticationHandler } from "../../../v1/handlers/auth/auth.handler";
// import { AuthValidator } from "../../middlewares/validators/auth.validator";

// export class AuthController extends AbsController {
//   protected initializeRoutes(): void {
//     // Forgot password:
//     this.router.post(
//       "/forgotpassword",
//       AuthValidator.forgotPasswordValidation,
//       this.forgotPassword.bind(this)
//     );

//     // Init password:
//     this.router.post(
//       "/initpassword",
//       AuthValidator.resetPasswordValidation,
//       this.initPassword.bind(this)
//     );

//     // Reset password:
//     this.router.post(
//       "/resetpassword",
//       AuthValidator.resetPasswordValidation,
//       this.resetpassword.bind(this)
//     );
//   }

//   // ----------------------------------------- AUTHENTICATION CONTROLLERS -----------------------------------------------

//   /**
//    * initPassword - Replace user's temp password
//    * @param req
//    * @param res
//    * @param next
//    */
//   public async initPassword(req: any, res: any, next: any) {
 
//   }

//   /**
//    * forgotPassword - Send forgot password email to user
//    * @param req
//    * @param res
//    * @param next
//    */
//   public async forgotPassword(req: any, res: any, next: any) {
   
    
//   }

//   /**
//    * resetpassword - Replace user's password
//    * @param req
//    * @param res
//    * @param next
//    */
//   public async resetpassword(req: any, res: any, next: any) {
 
//   }
// }
