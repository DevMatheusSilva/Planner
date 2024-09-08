import { Request, Response } from "express";

const BASE_LAYOUT = "./layouts/formLayout";
const LAYOUT_STYLE_LINK = "../styles/form.css";

interface RenderInfo {
    title: string;
    cssLink: string;
    page: string;
    type: string;
}

export default class UserController {
    constructor() {}

    private renderPage(res: Response, title: string, page: string, type: string, status: number = 200) {
        const objToRender: RenderInfo = { title, cssLink: LAYOUT_STYLE_LINK, page, type };
        res.status(status).render(BASE_LAYOUT, objToRender);
    }

    public renderLoginPage(_: Request, res: Response) {
        this.renderPage(res, "Planner - Welcome !!", "../pages/login", "login");
    }

    public renderRegisterPage(_: Request, res: Response) {
        this.renderPage(res, "Planner - Join Us !!", "../pages/register", "register");
    }
}
