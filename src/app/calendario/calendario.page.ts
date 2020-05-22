import { Component } from '@angular/core';
import { Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss']
})
export class CalendarioPage {
  
  constructor(private router:Router) {}

}