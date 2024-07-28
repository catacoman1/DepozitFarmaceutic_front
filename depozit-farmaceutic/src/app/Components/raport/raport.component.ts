import { Component, OnInit } from '@angular/core';
import { RaportService } from '../../Services/raport.service';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.css']
})
export class RaportComponent implements OnInit {
  raport: any[] = [];

  constructor(private raportService: RaportService) { }

  ngOnInit(): void {
    this.raportService.getReport().subscribe(data => {
      this.raport = data;
    });
  }
}