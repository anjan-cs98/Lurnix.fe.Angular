import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'header',
  imports: [RouterLink],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {
   
}
