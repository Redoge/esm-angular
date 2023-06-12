import { Component } from '@angular/core';
import { ItemService } from 'src/app/service/item/item.service';
import {Certificates} from "../../entity/Certificates";

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  name: string = '';
  description: string = '';
  price: number = 0;
  duration: number = 0;
  tags: string = '';
  error: string = '';
  correct: string = '';


  constructor(private itemService: ItemService) {
  }

  addNewItem() {
    this.itemService.saveItemToServer(this.name, this.description,
      this.price, this.duration, [this.tags]).subscribe(
        response => {
          this.correct = 'Created new item!!!'
          this.error = '';

        },error => {
        this.error = 'Something went wrong!!!';
        this.correct = ''
      }
      );
  }
  closeError() {
    this.error = '';
    this.correct = ''
  }

}
