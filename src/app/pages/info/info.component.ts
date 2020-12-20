import { Component, OnInit } from '@angular/core';
import Table from 'src/app/components/table/table.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  pageTitle: string = "Information"

  infoData: Table = {
    headings: ["Name", "Email"],
    rows: [
      ["Frodo Baggins", "frodo@lotr.com"],
      ["John Wick", "john@email.com"],
      ["Elon Musk", "elon@tesla.com"],
    ],
  };

  ngOnInit(): void {
    // console.log("Info Component has initialized.")
  }

  // Add lifecycle methods whenever you need them
  ngOnChanges(): void {
    // Here you would put some custom code
  }

}
