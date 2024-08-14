import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "om-shine-border",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-shine-border.component.html",
  styleUrl: "./ngx-shine-border.component.scss",
})
export class NgxShineBorderComponent {
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
}
