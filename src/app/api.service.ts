import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from './models/tweet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('id_token');
  }



  userLogin(data) {
    var url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g";
    return this.http.post(url, data);
  }

  getTweets() {
    return this.http.get<Tweet[]>("https://angular-sample-twitter.firebaseio.com/tweets.json");
  }
}
