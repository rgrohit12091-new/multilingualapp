import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multilingualapp';
  buttonDisplayText = "Click Here";
  
  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    //translate.set("Click Here", "ClickOse");
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
