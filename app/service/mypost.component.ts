import { Component } from '@angular/core';

import { DataService } from './data.service';
@Component({
  selector: 'mypost',
  template: `

  `
})
export class MypostComponent {
    value = '';
    items: Object;

    constructor (private dataService: DataService) {}
    
    getPost() {
    this.dataService.getPost().subscribe(
        response => this.items=response,
        error => console.error(error),
        ()=> console.log('finished')
    );
    }

    
}
