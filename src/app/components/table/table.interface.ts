// Create the interfaces for our table data
/*
We are aiming for the following data structure with this interface:
{
  headings: [
    "heading1", "heading2", "heading3"
  ],
  rows: [
    ["data1", "data2", "data3"],
    ["data1", "data2", "data3"],
    ["data1", "data2", "data3"],
    ["data1", "data2", "data3"],
  ]
}
*/

export default interface Table {
  headings: string[];
  rows: string[][];
}

