import { Component, OnInit } from '@angular/core';
import Table from '../../components/table/table.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  pageTitle: string = 'Homepage';

  // Create some data that is specific to the home page that we will be using in the table component
  // Bind the property for this data
  homeData: Table = {
    headings: [
      "Name", "Subject", "Price"
    ],
    rows: [
      ["Intro to Organic Chemistry", "Organic Chemistry", "$120.00"],
      ["Advanced Calculus", "Mathematics", "$95.00"],
      ["Genomics", "Biology", "$250.00"],
    ],
  }

  ngOnInit(): void {
  }

}
