import { Component, OnInit, isDevMode } from '@angular/core';
import { ApiService } from '../api.service';
import { Tweet } from '../models/tweet'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 tweets: any
 tweetId: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTweets().subscribe((response: Tweet[]) => {
      this.tweets = response;
     if (isDevMode) console.log(this.tweets);
    });
  }

}
