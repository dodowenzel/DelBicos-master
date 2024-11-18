import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ServicesgridComponent } from '../servicesgrid/servicesgrid.component';
import { FooterComponent } from "../footer/footer.component";
import { HeaderAloneComponent } from '../header-alone/header-alone.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    ServicesgridComponent,
    FooterComponent,
    HeaderAloneComponent,
    CadastroComponent,
    LoginComponent
],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
