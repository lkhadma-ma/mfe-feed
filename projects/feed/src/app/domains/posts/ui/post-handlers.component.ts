import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-handlers',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex justify-between py-5 text-gray-500 md:space-x-4 md:justify-start">
    <button class="flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md hover:bg-gray-200">
      <i class="fa-solid fa-thumbs-up text-lg"></i>
      <p>Like</p>
    </button>
    <button class="flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md hover:bg-gray-200">
      <i class="fa-solid fa-comment text-lg"></i>
      <p>Comment</p>
    </button>
    <button class="flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md hover:bg-gray-200">
      <i class="fa-solid fa-share text-lg"></i>
      <p>Share</p>
    </button>
    <div class="hidden md:block">
      <button class="flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md hover:bg-gray-200">
        <i class="fa-solid fa-paper-plane text-lg"></i>
        <p>Send</p>
      </button>
    </div>
</div>

  `
})
export class PostHandlersComponent {}
