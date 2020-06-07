import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServersService {
    private readonly _baseUrl: string;

    constructor(private http: HttpClient) {
        //this._baseUrl = 'api/query-resolver';
    }

    public createServer() : Observable<String>{
        return this.http.get<String>(`api/hello`);
         //this.serverCreationStatus = 'Server is created';
       }

}
