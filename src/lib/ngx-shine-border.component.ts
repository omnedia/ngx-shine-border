import {CommonModule, isPlatformBrowser} from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  signal,
  ViewChild
} from "@angular/core";

@Component({
  selector: "om-shine-border",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-shine-border.component.html",
  styleUrl: "./ngx-shine-border.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxShineBorderComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmShineBorderWrapper") shineBorderRef!: ElementRef<HTMLElement>;

  @Input("styleClass")
  styleClass?: string;

  @Input("gradientColorStart")
  set colorFrom(color: string) {
    this.style["--color-from"] = color;
  }

  @Input("gradientColorMiddle")
  set colorMiddle(color: string) {
    this.style["--color-middle"] = color;
  }

  @Input("gradientColorEnd")
  set colorTo(color: string) {
    this.style["--color-to"] = color;
  }

  @Input("borderRadius")
  set borderRadius(radius: string) {
    this.style["--border-radius"] = radius;
  }

  @Input("borderColor")
  set borderColor(color: string) {
    this.style["--border-color"] = color;
  }

  @Input("animationDuration")
  set animationDuration(duration: string) {
    this.style["--animation-duration"] = duration;
  }

  style: any = {};

  isInView = signal(false);
  private intersectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.isInView.set(entry.isIntersecting);
      });
      this.intersectionObserver.observe(this.shineBorderRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
