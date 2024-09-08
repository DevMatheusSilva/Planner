import { Request, Response } from "express";

export default class UserController {
    constructor() {
    }

    static renderLoginPage(_: Request, res: Response) {
        res.render(
            "./pages/login",
            { title: "Planner - Welcome !!", cssLink: "../styles/login/login.css" }
        );
    }

    static renderRegisterPage(_: Request, res: Response) {
        res.render(
            "./pages/register",
            { title: "Planner - Join Us !!", cssLink: "../styles/register/register.css" }
        );
    }
}