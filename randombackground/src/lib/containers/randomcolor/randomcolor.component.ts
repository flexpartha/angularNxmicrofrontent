import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'customer-admin-portal-randomcolor',
  templateUrl: './randomcolor.component.html',
  styleUrls: ['./randomcolor.component.scss'],
})
export class RandomcolorComponent implements OnInit {

  color!: any;

  @ViewChild('bgDiv', { static: true }) BgDiv!: ElementRef;

  constructor(private render:Renderer2){}

  ngOnInit(): void {
    
  }

  changBackColor(){
    //const colorPick = Math.floor(Math.random() * 12);
    const colorPick = Math.floor(Math.random()*16777215).toString(16);
    this.color = '#' + colorPick;
    console.log(this.color);
    this.render.setStyle(this.BgDiv.nativeElement,'background-color', this.color);
  }
}
