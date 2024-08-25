import {User, userInstance} from '../entities/user.model';

class UserService {
    private user: User;

    constructor() {
        this.user = userInstance;
    }

    public returnUserObject(): Object {
        return {
            firstname: this.user.getName(),
            lastname: this.user.getLastname()
        };
    }
}

const userServiceInstance = new UserService();
export {UserService, userServiceInstance};
