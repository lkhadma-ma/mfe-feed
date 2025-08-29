import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authur',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="pt-3">
  <div class="flex">
    <div class="relative">
      <img class="object-cover w-12 h-12 mr-2 rounded-full"
           [src]="avatar.url"
           [alt]="name" />
      @if (isOnline) {
          <div
               class="absolute w-4 h-4 bg-green-700 border-2 border-white rounded-full right-2 top-8"></div>
      } @else {
          <div class="absolute flex items-center justify-center w-3.5 h-3.5 bg-green-700 rounded-full right-2 top-8">
            <p class="w-2 h-2 bg-white rounded-full"></p>
          </div>
      }
    </div>

    <div>
      <p class="text-md font-medium">{{ name }}</p>
      <div class="flex flex-wrap space-x-2 capitalize">
            <p class="text-xs text-gray-500">{{profession}}</p>
      </div>
      <p class="text-xs text-gray-600">2h</p>
    </div>
  </div>
</div>

  `
})
export class AuthurComponent {
  @Input() avatar: { url: string } = { url: '' };
  @Input() profession: string  = '';
  @Input() name!: string;
  @Input() id!: string;
  @Input() isOnline = false;
}
