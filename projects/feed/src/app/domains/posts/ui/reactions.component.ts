import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactions',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex items-center p-4 space-x-3 text-sx">
  <div class="flex items-center space-x-2">
    <div class="bg-[#1885BD] flex items-center justify-center h-4 w-4 rounded-full">
      <i class="fa-solid fa-thumbs-up text-white text-[10px]"></i>
    </div>
    <p class="text-xs text-gray-600">20</p>
  </div>
  <div class="flex items-center space-x-2">
    <div class="bg-[#E0704C] flex items-center justify-center h-4 w-4 rounded-full">
      <i class="fa-solid fa-heart text-white text-[10px]"></i>
    </div>
    <p class="text-xs text-gray-600">32</p>
  </div>
  <div class="flex items-center space-x-2 text-xs text-gray-600">
    <p>. 12</p>
    <p>comments</p>
  </div>
</div>

  `
})
export class ReactionsComponent {}
