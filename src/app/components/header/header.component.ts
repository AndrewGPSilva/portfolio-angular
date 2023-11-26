import { Component } from '@angular/core';
import { faHouse, faDiagramProject, faNewspaper, faBars, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  iconHome = faHouse
  iconProject = faDiagramProject
  iconArticle = faNewspaper
  iconMenu = faBars
  iconX = faX

  btnActive: Boolean = false;

  showMenu(): void {
    this.btnActive = !this.btnActive;
  }
}
