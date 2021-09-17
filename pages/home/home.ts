import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myContent') content: Content;

  constructor(public navCtrl: NavController) {
  }

  scrollTo() {
    console.log('hey scroll pleaase');
    this.content.scrollTo(0, 0, 200);
  }

}
