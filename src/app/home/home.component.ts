import { Component } from '@angular/core';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CategoriasComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
