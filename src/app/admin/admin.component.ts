import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Member } from '../member.model';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, genre: string, description: string) {
    var newMember: Member = new Member(name, genre, description);
    this.memberService.addMember(newMember);
  }

}
