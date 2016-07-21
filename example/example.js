//import * as {Handsontable} from 'lib\handsontable.0.26.0.full.js';

 var
    example = document.getElementById('example'),
    example2 = document.getElementById('example2'),
    hot;

/*
  hot = new Handsontable(example,{
    //data: Handsontable.helper.createSpreadsheetData(1000, 1000),
    width: 1900,
    height: 900,
    colWidths: 50,
    minCols: 100,
    minRows: 100,
    rowHeights: 25,
    rowHeaders: true,
    colHeaders: true
  });
*/

  hot2 = new Handsontable(example2,{
    width: 1900,
    height: 900,
    colWidths: 75,
    rowHeights: 30,
    minCols: 26,
    minRows: 50,
    rowHeaders: true,
    colHeaders: true
  });
