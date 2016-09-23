import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  accountName: string = "Michael Patterson-Muir";

  accountEmail: string = "michaelpm91@googlemail.com";

  comicCloudTier: string = "Comic Cloud Basic";

  remainingStorage: number = 70;

  maxStorage: number = 100;

  constructor() { }

  ngOnInit() {

  }

}
