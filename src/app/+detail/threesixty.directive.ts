import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
declare var $: any
@Directive({
  selector: '.product1'
})
export class threeSixty implements OnInit{
  constructor(
    private el: ElementRef, 
    private route: ActivatedRoute) {
  }
  public ngOnInit() {
    let type = this.route.snapshot.params['type'];
    if (!type) {
      type = 'original';
    }
    $(this.el.nativeElement).ThreeSixty({
            totalFrames: 16, // Tota no. of image you have for 360 slider
            endFrame: 16, // end frame for the auto spin animation
            currentFrame: 1, // This the start frame for auto spin
            framerate: 8,
            imgList: '.threesixty_images', // selector for image list
            progress: '.spinner', // selector to show the loading progress
            imagePath: './assets/img/3D/' + type + '/', // path of the image assets
            ext: '.jpg', // extention for the assets
            height: 500,
            width: 500,
            navigation: false,
            disableSpin: true, // Default false
            responsive: true
          });
  }
}
