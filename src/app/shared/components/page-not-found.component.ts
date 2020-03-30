import { Component } from '@angular/core';

@Component({
  selector: 'cart-opener',
  template: `
    <nz-page-header nzBackIcon nzTitle="Go Back"></nz-page-header>
    <div class="flex flex-column center not-found-page">
      <nz-result nzStatus="404" nzTitle="404" nzSubTitle="Sorry, the page you visited does not exist.">
        <div nz-result-extra>
          <a href="/" nz-button nzType="primary">Back Home</a>
        </div>
      </nz-result>
    </div>
  `,
  styles: [
    `
      .not-found-page {
        height: 100vh;
      }
    `
  ]
})
export class PageNotFoundComponent {}
