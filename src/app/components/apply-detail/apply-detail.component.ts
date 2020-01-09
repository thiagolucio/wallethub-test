import { Component, OnInit } from '@angular/core';
import {ApplyService} from '../../shared/services/apply.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-apply-detail',
  templateUrl: './apply-detail.component.html',
  styleUrls: ['./apply-detail.component.scss'],
})
export class ApplyDetailComponent implements OnInit {

currencies = [
  {abbrev: 'USD'},
  {abbrev: 'BRL'},
  {abbrev: 'EUR'},
  {abbrev: 'CAD'},
  {abbrev: 'INR'},
  ];

  form = new FormGroup({
    currency: new FormControl(this.currencies[0]),
  });

  applyList = [];

  constructor(
    private applyService: ApplyService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.bringApply();
  }

  bringApply() {
    this.applyService.getApply()
      .subscribe((res: any) => {
        this.applyList = res;
        console.log('Success bring detail data!', this.applyList);
      }, error => {
        console.log('Error bring detail data!', error);
      });
  }
}
