import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {

  }
  signUp() {
    this.content.scrollToTop();
  }

}
