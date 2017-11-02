import { Component, OnInit, AfterContentInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterContentInit {

  @Input() title: string;
  @Input() body: string;
  @Input() author: string;
  @Input() date: Date;
  @Input() likeCount: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const body = this.elementRef.nativeElement
      .querySelector('p');

    // this.renderer.setStyle(body, 'font-size', '40px');
  }

  updateLike() {
    this.likeCount++;
  }

}
