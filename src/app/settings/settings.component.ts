import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  accountName: string;
  accountEmail: string;
  comicCloudTier: string;
  remainingStorage: number;
  maxStorage: number;

  constructor() { }

  ngOnInit() {

    this.getAccountInformation();

  }

  getAccountInformation() {

    this.accountName = "Michael Patterson-Muir";

    this.accountEmail = "michaelpm91@googlemail.com";

    this.comicCloudTier = "Comic Cloud Beta";

    this.remainingStorage = 70;

    this.maxStorage = 100;


  }
}
