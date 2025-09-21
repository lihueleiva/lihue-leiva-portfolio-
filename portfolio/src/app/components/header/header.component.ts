import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <--- IMPORTA ESTO

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { }
