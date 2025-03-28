import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-navbar-component',
  imports: [],
  standalone : true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor (private routingModule : Router){}

  GoToNewPage()
  {
    this.routingModule.navigate(['/new'])
  }

  GoToPreviewPage(){

    let length = NewComponent.prototype?.tableData?.length; 
    if (length> 0)
    {
      this.routingModule.navigate(['/preview'])
    }
    else
    {
      prompt("Cannot preview table is empty !")
    }
  }
}
