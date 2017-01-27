import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "byGenre",
  pure: false
})


export class ByGenrePipe implements PipeTransform {
  transform(input: any[], genre) {
    var output: Member[] = [];

    if(genre !== "none") {
      input.forEach((member) => {
        if(member.genre === genre) {
          output.push(member);
        }
      });
    } else {
      output = input;
    }

    return output;
  }
}
