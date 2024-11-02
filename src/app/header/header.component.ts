import { Component } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MegaMenuModule, CascadeSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
