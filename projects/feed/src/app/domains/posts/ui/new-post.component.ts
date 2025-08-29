import { Component } from '@angular/core';
import { NewPostItemComponent } from "./new-post-item.component";

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [NewPostItemComponent],
  template: `
  <div class="hidden p-4 border rounded-lg md:block bg-primary">
  <div>
    <!-- Avatar + Input -->
    <div class="flex items-center mb-1">
      <img class="w-12 h-12 mr-2 rounded-full" src="/images/my-avatar.jpeg" alt="Avatar" />
      <input
        placeholder="Start a post"
        type="text"
        class="w-full px-4 py-2 font-medium border border-gray-300 rounded-full focus:outline-none"
      />
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-between">
      <app-new-post-item label="Photo" icon="fa-solid fa-image text-[#70B4F8]"></app-new-post-item>
      <app-new-post-item label="Video" icon="fa-solid fa-play text-[#7FC05E]"></app-new-post-item>
      <app-new-post-item label="Event" icon="fa-solid fa-calendar text-[#E7A33E]"></app-new-post-item>
      <app-new-post-item label="Write article" icon="fa-regular fa-newspaper text-[#F5987D]"></app-new-post-item>
    </div>
  </div>
</div>

  `
})
export class NewPostComponent {}
