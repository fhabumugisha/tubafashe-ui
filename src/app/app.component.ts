import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tubafashe';

  language: string;
  constructor(

    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.language = 'en';

  }
  changerLanguage(language: string) {
    this.translate.use(language).subscribe(() => {
      this.language = language;
    });
  }
}
