import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {
    constructor(public http: Http) {}
    
    private data: string[] = [];

  
    getPost() {
        return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
    }
 

}
