import { Router } from "express";
import * as Auth from "./controller/auth.controller";
import * as Forgot from "./controller/forgot.controller";
import * as Client from "./controller/client.controller";
import * as Actions from "./controller/actions.controller";
import * as Incident from "./controller/incident.controller";
import * as Attachement from "./controller/attachement.controller";
import * as Evaluation from "./controller/evaluation.controller";
import * as FollowUp from "./controller/follow-up.controller";
import * as Information from "./controller/information.controller";
import * as Notification from "./controller/notification.controller";
import * as Resume from "./controller/resume.controller";

export const routes = (router: Router) => {
    router.post("/api/register", Auth.Register);
    router.post("/api/login", Auth.Login);
    router.get("/api/user", Auth.AuthenticatedUser);
    router.post("/api/refresh", Auth.Refresh);
    router.post("/api/logout", Auth.Logout);
    router.post("/api/forgot", Forgot.ForgotPassword);
    router.post("/api/reset", Forgot.ResetPassword);
    router.get("/api/user/:id", Client.Get);
    router.post("/api/user/:id", Client.Create);
    router.put("/api/user/:id", Client.Update);
    router.delete("/api/user/:id", Client.Delete);
    router.get("/api/user/:id/incident/:id2", Incident.Get);
    router.post("/api/user/:id/incident", Incident.Create);
    router.delete("/api/user/:id/incident/:id2", Incident.Delete);
    router.get("/api/user/:id/incident/:id2/actions", Actions.Get);
    router.post("/api/user/:id/incident/:id2/actions", Actions.Create);
    router.put("/api/user/:id/incident/:id2/actions", Actions.Update);
    router.get("/api/user/:id/incident/:id2/attachement", Attachement.Get);
    router.post("/api/user/:id/incident/:id2/attachement", Attachement.Create);
    router.put("/api/user/:id/incident/:id2/attachement", Attachement.Update);
    router.get("/api/user/:id/incident/:id2/evaluation", Evaluation.Get);
    router.post("/api/user/:id/incident/:id2/evaluation", Evaluation.Create);
    router.put("/api/user/:id/incident/:id2/evaluation", Evaluation.Update);
    router.get("/api/user/:id/incident/:id2/follow-up", FollowUp.Get);
    router.post("/api/user/:id/incident/:id2/follow-up", FollowUp.Create);
    router.put("/api/user/:id/incident/:id2/follow-up", FollowUp.Update);
    router.get("/api/user/:id/incident/:id2/information", Information.Get);
    router.post("/api/user/:id/incident/:id2/information", Information.Create);
    router.put("/api/user/:id/incident/:id2/information", Information.Update);
    router.get("/api/user/:id/incident/:id2/notification", Notification.Get);
    router.post("/api/user/:id/incident/:id2/notification", Notification.Create);
    router.put("/api/user/:id/incident/:id2/notification", Notification.Update);
    router.get("/api/user/:id/incident/:id2/resume", Resume.Get);
    router.post("/api/user/:id/incident/:id2/resume", Resume.Create);
    router.put("/api/user/:id/incident/:id2/resume", Resume.Update);
}
