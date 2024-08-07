import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';

  baseUrl="http://54.198.239.126:8080/amazonbackend/"
  id:number=0;
  whatTOShow:number=0;
}
