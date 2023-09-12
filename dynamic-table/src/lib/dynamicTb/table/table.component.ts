import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-admin-portal-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() tabularData:any;
  constructor(){}

  ngOnInit(): void {
    
  }
}
