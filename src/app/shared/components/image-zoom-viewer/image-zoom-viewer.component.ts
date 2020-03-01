import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DEFAULT_PRODUCT_URL } from '../../constants';

@Component({
  selector: 'image-zoom-viewer',
  templateUrl: './image-zoom-viewer.component.html',
  styleUrls: ['./image-zoom-viewer.component.scss']
})
export class ImageZoomViewerComponent implements OnInit, AfterViewInit {
  @ViewChild('imageContainer', { static: true }) imageContainer: ElementRef;
  @Input() imageUrl: string;
  @Input() alternateTxt?: string;
  @Input() width: number;
  @Input() height: number;
  public defaultProductUrl = DEFAULT_PRODUCT_URL;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
  }

  zoomImage(event: any, zoomScale = 1): void {
    // const { pageX, pageY } = event;
    // const image = event.target;
    // const { clientWidth, offsetTop, offsetLeft, naturalWidth, naturalHeight } = image;
    // const ratio = naturalHeight / naturalWidth;
    // const percentage = ratio * 100 + '%';
    // image.style.paddingBottom = percentage;
    // const x = pageX - offsetLeft;
    // const y = pageY - offsetTop;
    // const xPercent = x / (clientWidth / 100) + '%';
    // const yPercent = y / ((clientWidth * ratio) / 100) + '%';
    // // Update styles w/actual size
    // Object.assign(image.style, {
    //   backgroundPosition: xPercent + ' ' + yPercent,
    //   backgroundSize: naturalWidth + 'px'
    // });
  }

  resetZoom(event: any): void {
    // const image = event.target;
    // Object.assign(image.style, {
    //   backgroundPosition: '',
    //   backgroundSize: ''
    // });
  }
}
