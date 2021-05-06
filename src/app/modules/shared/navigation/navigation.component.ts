import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public kavo() {
    alert('KAVO NAHOY KAKOY LAGAUT DODIK TI 4E');
  }
}
