

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-post-shell',
  imports: [],
  template:`work in progress...`,
})
export class PostShell {
  protected readonly title = signal('feed');
}
