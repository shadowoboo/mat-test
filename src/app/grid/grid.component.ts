import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  progress=50;
  buf:any;
  posts$=[
    {
      title:'aaaa',
      subtitle:'sub-aaa'
    },
    {
      title:'bbb',
      subtitle:'sub-aaa'
    },
    {
      title:'aaaa',
      subtitle:'sub-aaa'
    },
    {
      title:'bbb',
      subtitle:'sub-aaa'
    },
    {
      title:'aaaa',
      subtitle:'sub-aaa'
    },
    {
      title:'bbb',
      subtitle:'sub-aaa'
    },
    {
      title:'aaaa',
      subtitle:'sub-aaa'
    },
    {
      title:'bbb',
      subtitle:'sub-aaa'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
