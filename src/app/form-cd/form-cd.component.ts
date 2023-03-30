import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Cd } from '../../models/cd';
import { CdsService } from '../service/cds.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-cd',
  templateUrl: './form-cd.component.html',
  styleUrls: ['./form-cd.component.scss']
})
export class FormCDComponent {
  formulaire!: FormGroup;
  currentCd$!: Observable<Cd>;

  

  constructor(private formBuilder: FormBuilder, private cdsService: CdsService, private router: Router) { };

  ngOnInit(): void {
    let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$'); 

    this.formulaire = this.formBuilder.group({
      title:[null, [Validators.required, Validators.minLength(3)]],
      author:[null, [Validators.required, Validators.minLength(1)]],
      price:[null, [Validators.required, Validators.min(1)]],
      thumbnail:[null, [Validators.required, Validators.pattern(thumbRegex)]],
      dateRelease:[null, [Validators.required, Validators.minLength(1)]],
      quantity:[null, [Validators.required, Validators.min(1)]]
    },
    {
      updateOn: 'blur'
    });

    this.currentCd$ = this.formulaire.valueChanges.pipe(map(formValue=>(
      {
        id:0,
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        dateRelease: formValue.dateRelease,
        quantity: formValue.quantity
      }
    )));
  }

  addCD(){
    let newCd: Cd = {
      id: 0,
      title: this.formulaire.get("title")?.value,
      author: this.formulaire.get("author")?.value,
      price: this.formulaire.get("price")?.value,
      thumbnail: this.formulaire.get("thumbnail")?.value,
      dateRelease: this.formulaire.get("dateRelease")?.value,
      quantity: this.formulaire.get("quantity")?.value
    };

    this.cdsService.addCD(newCd).pipe(
      tap(() => this.router.navigate(['/catalog'])
      )).subscribe();
    // console.log(this.formulaire.value);
  }
}
