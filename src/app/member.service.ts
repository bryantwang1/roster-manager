import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getGenres() {
    var genres: string[] = [];
    this.members.forEach((memberList) => {
      memberList.forEach((member) => {
        if(genres.indexOf(member.genre) < 0) {
          genres.push(member.genre);
        }
      });
    });
    return genres;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  findMember(searchId: string) {
    return this.angularFire.database.object('members/' + searchId);
  }

  updateMember(updatedMember) {
    var memberInFirebase = this.findMember(updatedMember.$key);
    memberInFirebase.update({
      name: updatedMember.name,
      genre: updatedMember.genre,
      description: updatedMember.description
    });
  }

  deleteMember(memberToDelete) {
    var memberInFirebase = this.findMember(memberToDelete.$key);
    memberInFirebase.remove();
  }
}
