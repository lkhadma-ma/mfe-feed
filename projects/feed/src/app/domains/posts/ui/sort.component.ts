import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="hidden md:block">
  <div class="flex items-center justify-between py-1">
    <hr class="flex-1 h-[1.4px] mr-2 bg-gray-400" />
    <div class="flex items-center space-y-1">
      <p class="mr-1 text-sm text-gray-600">Sorted by:</p>
      <p class="text-sm">Top</p>
      <i class="fa-solid fa-caret-down text-lg"></i>
    </div>
  </div>
</div>

  
  `,
})
export class SortComponent {}
