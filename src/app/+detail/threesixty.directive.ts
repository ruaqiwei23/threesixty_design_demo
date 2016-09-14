import { Component, Directive, ElementRef, OnInit } from '@angular/core';
declare var $: any
@Directive({
  selector: '.product1'
})
export class threeSixty implements OnInit{
  constructor(private el: ElementRef) {

  }
  public ngOnInit() {
    $(this.el.nativeElement).ThreeSixty({
            totalFrames: 16, // Tota no. of image you have for 360 slider
            endFrame: 16, // end frame for the auto spin animation
            currentFrame: 1, // This the start frame for auto spin
            framerate: 8,
            imgList: '.threesixty_images', // selector for image list
            progress: '.spinner', // selector to show the loading progress
            imagePath: './assets/img/3D/original/', // path of the image assets
            ext: '.jpg', // extention for the assets
            height: 500,
            width: 500,
            navigation: false,
            disableSpin: true, // Default false
            responsive: true
          });
  }
}