import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {

  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }
  theQuote: any
  id:any
  newQuote: any
  error: any
  ngOnInit() {
  	this.newQuote = {quote: '', author: ''}
  	this.route.params.subscribe(params=>{
  		this.id = params.id
  		// console.log(this.id)

  	})
  	this.editQuote()
  }
  editQuote(){
  	let observable = this._httpService.findQuote(this.id)
  	observable.subscribe(data =>{
  		// console.log(data)
  		this.newQuote.quote=data.quote
  		this.newQuote.author=data.author
  	})
  }
  updateTheQuote(){
  	let observable = this._httpService.updateQuote(this.id,this.newQuote)
  	observable.subscribe(data=>{
  		if ("error" in data){
  			this.error = data.error
  		} else {
  			this.router.navigate([''])
  		}
  	})
  }


}
