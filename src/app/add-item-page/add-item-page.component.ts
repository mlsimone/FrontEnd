import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Events, ImageAddedEvent, FileUploadWithPreview } from 'file-upload-with-preview';
//import styles from 'file-upload-with-preview/dist/style.css';
import { ItemService } from '../item.service';
import { FilehandlerService } from '../filehandler.service';
import { ItemAndImageHandlerService } from '../item-and-image-handler.service';
import { Item, ItemAndImages } from '../types';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css','../../../node_modules/file-upload-with-preview/dist/style.css' ]
})

export class AddItemPageComponent implements OnInit {

  form: FormGroup = {} as FormGroup;
  id: number = 0;  // always send a 0 for id when posting.
  returnedItem: Item = {} as Item;
  upload: FileUploadWithPreview | undefined;
  numOfFilesUploaded: number = 0;


  ngOnInit() {
    this.upload = new FileUploadWithPreview('my-unique-id', { 'multiple': true });
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      estimatedValue: new FormControl(),
      imageDirectory: new FormControl("images")
    });
  }

  constructor(private itemService: ItemService,
    private fileHandlerService: FilehandlerService,
    private itemAndImageHandlerService: ItemAndImageHandlerService) {
  }

  onSubmit(form: FormGroup) {

    console.log(form);

    // MLS 6/14/23 Create FormData object for item data and images
    // this creates a multipart message which is required for back end to collect both item and image data
    var itemData = new FormData();

    // MLS 6/20/23 Get data out of FormGroup and append to FormData
    itemData.append("id", this.id.toString()); 
    itemData.append("name", this.name());
    itemData.append("category", this.category());
    itemData.append("description", this.description());
    itemData.append("estimatedValue", this.estimatedValue().toString());
    itemData.append("imageDirectory", this.imageDirectory());

    let primaryImage: File;
    if ( ((this.upload as FileUploadWithPreview).cachedFileArray).length > 0) {
      primaryImage = (this.upload as FileUploadWithPreview).cachedFileArray[0];
      itemData.append("imageName", primaryImage.name.substring(0, primaryImage.name.indexOf(":")));
    }

    let fileToUpload: File;
    let fileName: string;
    for (let file of (this.upload as FileUploadWithPreview).cachedFileArray) {
      fileToUpload = file;
      fileName = fileToUpload.name.substring(0, fileToUpload.name.indexOf(":"));
      console.log(fileName);
      itemData.append("images", fileToUpload, fileName);
    }

    this.itemAndImageHandlerService.addItem(itemData).subscribe((item: Item) => { this.returnedItem = item; });

  }

  name(): string {
    let val: string = this.form.get("name")?.value;
    console.log(val);
    return val;
  }

  category(): string {
    let val: string = this.form.get("category")?.value;
    console.log(val);
    return val;
  }

  description(): string {
    let val: string = this.form.get("description")?.value;
    console.log(val);
    return val;
  }

  // Functions to get values out of FormGroup
  estimatedValue(): number {
    let val: number = this.form.get("estimatedValue")?.value;
    console.log(val);
    return val;
  }

  imageDirectory(): string {
    let val: string = this.form.get("imageDirectory")?.value;
    console.log(val);
    return val;
  }

}
