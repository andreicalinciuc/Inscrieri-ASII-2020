import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCarouselComponent } from 'igniteui-angular';

@Component({
  selector: 'app-carousel',
  styleUrls: ['carousel-screen.component.scss'],
  templateUrl: 'carousel-screen.component.html'
})
export class CarouselAnimationsSampleComponent implements OnInit {
  @ViewChild('carousel', { static: true }) public carousel: IgxCarouselComponent;

  public slides: any[] = [];
  public animations = ['none'];

  public ngOnInit() {
    this.addSlides();
  }

  public addSlides() {
    this.slides.push(
      {
        title: 'Asii',
      },
      {
        title: 'Departamente',
      },
      {
        title: 'IDK',
      }
    );
  }
}
