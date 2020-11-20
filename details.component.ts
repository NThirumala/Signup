import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() cdata: any[] = [];
  constructor() { }
  
  ngOnInit(): void {
  }

}
