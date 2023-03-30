import { Component, Input } from '@angular/core';
import { Cd } from 'src/models/cd';
import { CdsService } from '../service/cds.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {
  @Input() leCd!: Cd;
  unCd! : Cd;
  

  constructor(private cdservice:CdsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const idcd = this.route.snapshot.params['id'];
    if(idcd !== undefined){
      this.cdservice.getCdById(+idcd).subscribe(cd => this.unCd = cd);
    }
    else{
    this.unCd = this.leCd;
    }
  }

  onAddCD(){
    this.leCd.quantity++;
  }
}

