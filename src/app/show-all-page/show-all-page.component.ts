import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../types';

@Component({
  selector: 'app-show-all-page',
  templateUrl: './show-all-page.component.html',
  styleUrls: ['./show-all-page.component.css']
})

export class ShowAllPageComponent implements OnInit {
  myItems: Item[] = [];
  
  shadow: Item = {
    id: 0,
    name: "Shadow",
    category: "cat",
    description: "Baby Girl",   
    estimatedValue: 400.00,
    imageDirectory: "cats",  // this is a directory which contains pictures of images
    // below we use the name of the photo
    // public IEnumerable<String>? ImageNames { get; set; }
    imageName: "baby-girl.jpg"
  };

  constructor(private itemService: ItemService) { };

  ngOnInit() {
    this.itemService.getItems().subscribe((items: Item[]) => { this.myItems = items as Item[]; });
  }

}
