import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry, MatRipple, MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg2',
      'angular-nocolor',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/angular_whiteTransparent.svg')
    );

    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg2',
      'angular-onecolor',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/angular_solidBlack.svg')
    );

    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    // this.matIconRegistry.registerFontClassAlias('fontawesome','');
  }


  title = 'mat-test';

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
      console.log(`選單狀態：${result}`);
    });
  }


  @ViewChild(MatRipple) ripple: MatRipple;

  triggerRipple() {
    const p1 = this.ripple.launch(0, 0, { color: '#ff1111', centered: false, persistent: true, radius: 400 });
    // const p2 = this.ripple.launch(0, 0, { color: 'yellow', centered: false, persistent: true, radius: 20 });
    // const p3 = this.ripple.launch(0, 0, { color: '#11ff11', centered: true, persistent: true, radius: 100 });
    // const p4 = this.ripple.launch(0, 0, { color: '#1111ff', centered: true, persistent: true, radius: 300 });
    // const p5 = this.ripple.launch(0, 0, { color: '#ff11ffdd', centered: true, persistent: true, radius: 800 });
    this.clearRipple();
  }


  clearRipple() {
    this.ripple.fadeOutAll();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/angular.svg')
    );


    setInterval(() => {
      this.triggerRipple();
    }, 2000);
  }



  opened() {
    alert(`open`);
  }

  closed() {
    alert(`close`);
  }
}
