import {Component} from '@angular/core';

@Component({
	selector: 'mooral',
	templateUrl: 'app/pages/mooral/mooral.html'
})

export class MooralComponent { 
    private isProduct = false;

    product(){
        this.isProduct = true
    }

    recientes(){
        this.isProduct = false
    }
}