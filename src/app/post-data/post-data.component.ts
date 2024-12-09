import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {
  constructor(private httpServer: HttpServerService){}

  public ngOnInit():void {
    const payload = {
        "body": "some comments",
        "postId": 1}
    this.httpServer.postComments(payload).subscribe(data => {
      console.log('du lieu moi duoc ghi la ', data)
    })
  }

}
