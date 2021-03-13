import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../services/item.services';
import {Item} from './item';
import {ClrWizard} from '@clr/angular';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private service: ItemService) { }

  @ViewChild('wizardmd') wizardMedium: ClrWizard;

  mdOpen = false;
  items = [];

  ngOnInit(): void {
    this.service.findItems().subscribe((result: Item[]) =>
      this.items = result
    );
  }

  showWizard(): void {
    this.mdOpen = !this.mdOpen;
  }



}
