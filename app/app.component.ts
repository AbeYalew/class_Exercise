import { Component } from '@angular/core';

import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  template: `
  <input #item type=''text' >
    <div *ngFor="let post of posts | mypipe:pipeargs">
<mypost [data]="post"></mypost>
</div>
<mypost *ngIf="condition(item)" [data]="post"></mypost>
  `,
  
  providers: [DataService]
})
export class AppComponent {
  

}
