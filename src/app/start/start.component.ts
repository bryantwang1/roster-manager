import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [MemberService]
})
export class StartComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetails(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
