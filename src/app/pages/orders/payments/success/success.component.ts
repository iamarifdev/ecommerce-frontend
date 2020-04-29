import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  public params: any;
  private queryParams: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.params = { ...this.route.snapshot.queryParams };
    this.queryParams = { ...this.route.snapshot.queryParams };
    this.clearParams();
  }

  public clearParams(): void {
    Object.keys(this.queryParams).forEach((key) => (this.queryParams[key] = null));
    this.router.navigate([], {
      queryParams: { ...this.queryParams },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
