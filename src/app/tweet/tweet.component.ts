import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Tweet } from '../models/tweet'

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  id: number;
  tweetInfo: any;
  spinner: boolean;


  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.spinner = true;
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.apiService.getTweets().subscribe((response: Tweet[]) => {
      response.forEach(tweet => {
        if (this.id == tweet.id) {
          this.tweetInfo = tweet;
          console.log(this.tweetInfo);
        }
      });
    }, (error) => console.log(error),
      () => {
        this.spinner = false;
      });
  }

  ngOnInit() {

  }

}
