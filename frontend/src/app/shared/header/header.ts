import { Component } from '@angular/core';
import { LucideHouse, LucideHeart, LucideShoppingCart, LucideUser } from '@lucide/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideHouse, LucideHeart, LucideShoppingCart, LucideUser],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header { }