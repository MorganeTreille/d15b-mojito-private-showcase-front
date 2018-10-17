import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME_LOGGED} from '../constantes.routes';

@Component({
  selector: 'app-home-artist-user',
  templateUrl: './home-artist-user.component.html',
  styleUrls: ['./home-artist-user.component.css']
})
export class HomeArtistUserComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToHomeArtiste() {
    this.router.navigate([PATH_HOME_LOGGED]);
  }

  ngOnInit() {
  }

}
