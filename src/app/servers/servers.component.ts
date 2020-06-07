import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { HttpClient } from '@angular/common/http';
import { ServersService } from './servers.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;

  public serverCreationStatus : string;

  constructor(private service : ServersService) {
    setTimeout(()=>{
    return this.allowServer =true}
    ,2000);
   }

   public createServer(){
    this.service.createServer().subscribe( data=>{
      console.log(data);
//      this.serverCreationStatus = data;
    });
     //this.serverCreationStatus = 'Server is created';
   }

  ngOnInit() {
  }

}
