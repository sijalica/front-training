import { Component, OnInit } from '@angular/core';
import { Appoitment } from '../models/appoitment';

@Component({
  selector: 'app-appoitment-list',
  templateUrl: './appoitment-list.component.html',
  styleUrls: ['./appoitment-list.component.css']
})
export class AppoitmentListComponent implements OnInit {
  newAppoitmentTitle: string = "";
  newAppoitmentDate: Date = new Date();

  appoitments: Appoitment[] = [];

  ngOnInit(): void {
    let savedAppoitments = localStorage.getItem("appoitments");
    this.appoitments = savedAppoitments ? JSON.parse(savedAppoitments) : []
  }

  add() {
    if(this.newAppoitmentTitle.trim().length && this.newAppoitmentDate) {
      let appoitment: Appoitment = {
        id: Date.now(),
        title: this.newAppoitmentTitle,
        date: this.newAppoitmentDate
      }

      this.appoitments.push(appoitment);

      this.newAppoitmentTitle = "";
      this.newAppoitmentDate = new Date();

      localStorage.setItem("appoitments", JSON.stringify(this.appoitments));
    }
  }

  delete(index: number) {
    this.appoitments.splice(index, 1);
    localStorage.setItem("appoitments", JSON.stringify(this.appoitments));
  }
}
