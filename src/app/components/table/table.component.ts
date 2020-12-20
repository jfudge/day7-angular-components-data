// Note that we added the Input import
import { Component, OnInit, Input } from '@angular/core';
import Table from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  // The data property is going to be a placeholder for data that
  // the component can accept. This data property must be a Table interface.
  // To make this property able to accept data from a parent component you need to use
  // the @Input() decorator
  @Input() data: Table;
  @Input() title: string;

  // ngOnInit() is a lifecycle method that runs at a certain point
  // in the components lifecycle.
  // You can use ngOnInit() to add custom code that you need to run
  // after the component has initialized.
  // There are a variety of lifecycle methods (hooks) that you can use to access
  // different points in the component lifecycle.
  // https://angular.io/guide/lifecycle-hooks
  ngOnInit(): void {
    // Indicate which table is loading
    console.log("Initializing the " + this.title + " table!");
  }

}
