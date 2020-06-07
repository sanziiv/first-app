import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  public id: number;
  public name: string;
  public year: number;
  public rows: Array<{id:number, name: string, year: number }>= [];
  public detail: Array<{id:number, name: string, year: number }>= [];
  
  //public rows: Array<Object>=[];
  
  //public rows: Array<{}>=[];

  buttonClicked() {
   // this.rows=[];
    this.rows.push( {id: this.id, name: this.name, year: this.year } );
    //if you want to clear input
    //this.id = null;
    //this.name = null;
    //this.year = null;
  }

  deleteClicked(index:number){
    this.rows.splice(index,1);
    this.detail.splice(index,1);
  }

  submit(index:number){
    this.detail.push(this.rows[index]);
  }
}
