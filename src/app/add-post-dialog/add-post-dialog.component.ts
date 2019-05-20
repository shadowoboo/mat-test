import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss']
})
export class AddPostDialogComponent implements OnInit {


  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any) {
    console.log(data.title);
    // console.log(title);
    console.log(this.data.title);
  }


  get title() {
    return this.data.title;
  }

  @ViewChild('dialogByTemplate') dialogByTemplate;

  ngOnInit() {
  }
  openDialogTemp() {
    this.dialog.open(this.dialogByTemplate);
  }
}
