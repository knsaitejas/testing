import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _httpService: HttpService, private router: Router) { }
  data: any
  ngOnInit() {
  	this.getQuoteFromService()
  }

  getQuoteFromService(){
  	let obsevable = this._httpService.getQuotes()
  	obsevable.subscribe(data =>{
  		// console.log(data)
  		this.data = data
      this.data
  	})
  }

  upvoteQuote(id){
    let observable = this._httpService.voteQuote(id)
    observable.subscribe(data=>{
      console.log(data)
      this.getQuoteFromService()
    })
  }

    devoteQuote(id){
    let observable = this._httpService.devoteQuote(id)
    observable.subscribe(data=>{
      console.log(data)
      this.getQuoteFromService()
    })
  }

  deleteQuote(id){
    let observable = this._httpService.deleteQuote(id)
    observable.subscribe(data =>{
      console.log(data)
      this.getQuoteFromService()
    })
  }

}
