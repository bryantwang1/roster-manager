import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ByGenrePipe } from './by-genre.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    MemberDetailComponent,
    AdminComponent,
    EditMemberComponent,
    ByGenrePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
