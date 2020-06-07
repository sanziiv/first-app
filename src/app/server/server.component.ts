import { Component } from '@angular/core';

@Component(
    {
        selector : 'app-server',
        templateUrl : './server.component.html',
        styleUrls: ['./server.component.css']
    }
)
export class ServerComponent {

    id : Number = 2;
    status : String = 'Online'; 

    getServerStatus() {
        return this.status;
    }
}