import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  selectedMember;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.selectedMember = this.memberService.findMember(this.memberId);
  }
}