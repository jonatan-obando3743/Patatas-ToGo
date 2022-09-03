import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
  }
  goToIndex() {
    this.router.navigate(['/list']);
  }
  goToAboutUs() {
    this.router.navigateByUrl( '/users/create');
  }
 

  /**
   * Este método no se puede modificar
   * */
  public logout(): void {
    this.router.navigateByUrl('/login');  
  }
  
}
