import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

const URL = 'http://localhost:4000/api/upload';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title = 'ng8fileupload';
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  @ViewChild("fileUpload") fileUpload: ElementRef;files  = []; 
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) { }
  addProductForm: FormGroup;
  file: File;

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      image: [null]
    });
    //image: new FormControl('', { validators: [Validators.required], asyncValidators: [mimeType] })
  }
  onFileChanged(event) {
    const file = event.target.files[0]
  }
  onFileAdd(file: File) {
    this.file = file;
    console.log(this.file);
    }
    
    onFileRemove() {
    this.file = null;
    }
  addProduct() {

  }
}
