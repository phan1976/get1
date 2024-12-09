import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {
  constructor(private httpServer: HttpServerService){}

  public ngOnInit():void{
    this.httpServer.getComments().subscribe(data => {
      console.log('du lieu tra ve ', data);
    })
  }

}
