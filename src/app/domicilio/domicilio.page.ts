import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


import SwiperCore, { Autoplay,Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination, Navigation]);

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.page.html',
  styleUrls: ['./domicilio.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DomicilioPage implements AfterContentChecked {
@ViewChild('swiper') swiper: SwiperComponent;

config: SwiperOptions = {
  slidesPerView: 5,
 navigation: true,
 effect: "slide",
 autoplay: {
  delay: 2500,
  disableOnInteraction: true
},
 pagination: true
 }
 images =[
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg"

 ];
  constructor() { }
ngAfterContentChecked(): void {
  if(this.swiper) {
    this.swiper.updateSwiper({ });
  }
}


}
