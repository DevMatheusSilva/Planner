import {UserService, userServiceInstance} from '../domain/services/usuario.service';
import {Response} from 'express';

class UserController {
    private userService: UserService;
    
    constructor() {
        this.userService = userServiceInstance;
    }

    public getUserObject(res: Response): void {
        const userObject = this.userService.returnUserObject();
        res.render('teste', userObject);
    }
}

const userControllerInstance = new UserController();
export {UserController, userControllerInstance};
