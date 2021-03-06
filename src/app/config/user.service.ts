import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()

export class UserService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor (private http: Http) {}

    getUsers() {
        return this.http.get('/api/user').map(res => res.json());
    }

    addUser(user) {
        return this.http.post("/api/user", JSON.stringify(user), this.options);
    }

    editUser(user) {
        return this.http.put("/api/user/"+user._id, JSON.stringify(user), this.options);
    }

    deleteUser(user) {
        return this.http.delete("/api/user/"+user._id, this.options);
    }

}
