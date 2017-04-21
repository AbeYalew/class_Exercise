import { Component } from '@angular/core';

import { DataService } from './data.service';
@Component({
  selector: 'mypost',
  template: `
{{posts.title}}
  `
})
export class MypostComponent {
    value = '';
    posts: string[];

    constructor (private dataService: DataService) {}
    
    getPost() {
    this.dataService.getPost().subscribe(
        response => this.posts=response,
        error => console.error(error),
        ()=> console.log('finished')
    );
    }
    condition(item){
        if(this.posts.contains(item))
        return true;
        else return false;
    }

    
}
