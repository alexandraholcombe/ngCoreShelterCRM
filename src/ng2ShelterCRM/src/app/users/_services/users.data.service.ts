import { Injectable, Inject } from '@angular/core';
import { AuthService } from './../../_services/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './../_models/user.model';
import 'rxjs/Rx';

@Injectable()
export class UserDataAccess {
  user;

  constructor(
    @Inject(AuthService) public _auth: AuthService,
  ) { }

  getCurrentUser() {
    return this._auth.user;
  }

  updateUser() {

  }
}