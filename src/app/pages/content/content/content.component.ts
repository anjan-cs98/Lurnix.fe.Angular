import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/common/heaader/header/header.component';
import { FooterComponent } from '../../../shared/common/footer/footer/footer.component';
@Component({
  selector: 'app-content',
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
