import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ContentService} from '../../shared/services/content.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class ContentComponent implements OnInit {

  contentList = [];
  showMore = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private contentService: ContentService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }

  ngOnInit() {
    this.bringContent();
  }

  bringContent() {
    this.contentService.getContent()
      .subscribe((res: any) => {
        this.contentList = res;
        console.log('Success bring data!', this.contentList);
      }, error => {
        console.log('Error bring data!', error);
      });
  }
}
