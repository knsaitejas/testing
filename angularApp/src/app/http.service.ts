import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getQuotes(){
  	return this._http.get('/quotes')
  }

  addQuote(quote){
  	return this._http.post('/quotes',{quote:quote})
  }

  findQuote(id){
  	console.log(id)
  	return this._http.get('/quotes/'+id)
  }

  updateQuote(id,quote){
  	console.log(id, quote)
  	return this._http.put('/quotes/'+id,quote)
  }

  voteQuote(id){
    console.log('/quotes/vote/'+id)
    return this._http.get('/quotes/vote/'+id)
  }

  devoteQuote(id){
    return this._http.get('/quotes/devote/'+id)
  }

  deleteQuote(id){
    return this._http.delete('/quotes/'+id)
  }

}
