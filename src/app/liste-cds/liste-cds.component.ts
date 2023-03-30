import { Component, OnInit } from '@angular/core';
import { Cd } from 'src/models/cd';
import { CdsService } from '../service/cds.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-cds',
  templateUrl: './liste-cds.component.html',
  styleUrls: ['./liste-cds.component.scss']
})
export class ListeCDsComponent implements OnInit {
  listecd$!: Observable<Cd[]>;

  constructor(private myCdsService: CdsService) { }

  ngOnInit(): void {

    this.listecd$ = this.myCdsService.getAllCDS();
  }
}
