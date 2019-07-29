import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  userLogin(data) {
    var url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g";
    return this.http.post(url, data);
  }

  getTweets() {
    var id_token = localStorage.getItem("id_token");
    return this.http.get("https://angular-sample-twitter.firebaseio.com/tweets.json?auth=" +id_token);
  }
}
