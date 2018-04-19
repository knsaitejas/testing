import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
	newQuote: any
  constructor(private _httpService: HttpService, private router: Router) { }
  ngOnInit() {
  	this.newQuote = {quote: '', author: ''}
  }

  addNewQuote(){
  	let observable = this._httpService.addQuote(this.newQuote)
  	observable.subscribe(data =>{
  		if ('error' in data){
  			console.log(data)
  		} else {
  			this.router.navigate([''])
  		}
  	})
  }

}
