import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-post-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center px-2 py-4 transition duration-200 cursor-pointer hover:bg-[#dddddd] rounded-md">
        <i [class]="icon"></i>
        <span class="ml-2 text-sm font-semibold text-gray-600">{{ label }}</span>
    </div>
  `
})
export class NewPostItemComponent {
  @Input() label!: string;
  @Input() icon!: string;
}
