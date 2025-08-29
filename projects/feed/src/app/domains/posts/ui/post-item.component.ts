import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthurComponent } from './authur.component';
import { PostHandlersComponent } from './post-handlers.component';
import { ReactionsComponent } from './reactions.component';


@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [AuthurComponent, PostHandlersComponent, ReactionsComponent],
  template:`
  
  <div class="mb-4 border md:rounded-lg bg-primary">
  <div class="p-4">
    <div class="flex justify-between mb-3">
      <div class="flex space-x-2 justify-center items-center">
              <img [src]="authur.avatar.url" class="w-6 h-6 rounded-full" alt="Post media" />
              <span class="text-xs font-medium">{{authur.name}}</span>
              <span class="text-xs text-gray-600">likes this</span>
      </div>
    </div>

    <hr />
    <div class="flex items-center justify-between">
        <app-authur [avatar]="authur.avatar"
                [profession]="authur.profession"
                [name]="authur.name"
                [id]="authur.id"
                [isOnline]="authur.isOnline">
        </app-authur>
        <div class="p-1 transition duration-300 rounded-full hover:bg-gray-200 cursor-pointer">
            <i class="fa-solid fa-ellipsis"></i>
        </div>
    </div>

    <div class="text-sm">
        @if (showCaption) {
            <div>
              <p [innerHTML]="description?.markdown"></p>
            </div>
        } @else {
            <div class="relative">
                <p class="line-clamp-2">{{ description?.markdown }}</p>
                <button class="absolute bottom-0 right-1 text-gray-500 bg-white hover:underline hover:text-blue-500"
                        (click)="toggleCaption()">
                    ...see more
                </button>
            </div>
        }
    </div>
  </div>
  @if(image) {
      <img [src]="image.url" class="w-full" alt="Post media" />
  }

  <app-reactions></app-reactions>

  <div class="px-4 pt-5">
    <hr />
    <app-post-handlers></app-post-handlers>
  </div>
</div>
`,
})
export class PostItemComponent {
  @Input() authur: {
    avatar: {url: string};
    profession: string;
    name: string;
    id: string;
    isOnline: boolean} ={
    avatar: {url: ''},
    profession: '',
    name: '',
    id: '',
    isOnline: false
  };
  @Input() description: any;
  @Input() image: any;
  @Input() likes: any[] = [];

  showCaption = false;

  toggleCaption() {
    this.showCaption = true;
  }
}
