import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import {UserService} from '../../config/user.service'
@Component({
	selector: 'home',
	templateUrl: 'app/pages/home/home.html'
})

export class HomeComponent implements OnInit {
	private users = [];
	private isLoading = true;
	
	private user = {};
	private isEditing = false;

	private isLogin = false;
	
	private addUserForm: FormGroup;
	private fullname = new FormControl('',Validators.required);
	private email = new FormControl('',Validators.required);
	private school = new FormControl('',Validators.required);
	private username = new FormControl('',Validators.required);
	private password = new FormControl('',Validators.required);

	private infoMsg = { body:'', type:'info' };

	constructor(private http: Http,
				private userService: UserService,
				private formBuilder: FormBuilder) { }

	ngOnInit(){
		this.getUsers();

		this.addUserForm = this.formBuilder.group({
			email: this.email,
			fullname: this.fullname,
			school: this.school,
			username: this.username,
			password: this.password
		})
	}

	getUsers() {
		this.userService.getUsers().subscribe(
			data => this.users = data,
			error => console.log(error),
			() => this.isLoading = false
		)
	}

	addUser(){
		this.userService.addUser(this.addUserForm.value).subscribe(
			res => {
				var newUser = res.json();
				this.users.push(newUser);
				this.addUserForm.reset();
				this.sendInfoMsg("Usuario registrado exitosamente","success")
			},
			error => console.log(error)
		)
	}

	sendInfoMsg(body, type, time = 3000) {
		this.infoMsg.body = body;
		this.infoMsg.type = type;
		window.setTimeout(() => this.infoMsg.body = "", time);
	}

	login(){
		this.isLogin = true
	}
}