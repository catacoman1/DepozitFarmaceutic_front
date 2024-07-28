import { Component, OnInit } from '@angular/core';
import { ProdusService } from '../../Services/produs.service';

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {
  produse: any[] = [];

  constructor(private produsService: ProdusService) { }

  ngOnInit(): void {
    this.produsService.getProduse().subscribe(data => {
      this.produse = data;
    });
  }
}