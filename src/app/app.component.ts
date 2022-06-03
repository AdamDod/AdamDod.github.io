import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InteractiveResume';
  selectedPage = 'about-me';

  constructor(private route:Router){

  }

  navigate(page:string){
    this.selectedPage = page;
    this.route.navigate(['/',page])
  }
}
