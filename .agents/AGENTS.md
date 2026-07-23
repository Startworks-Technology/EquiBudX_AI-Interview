# MockMate Development Guidelines

## 1. Responsive Design First
- **Mobile-Friendly Requirement**: ALL pages, layouts, and components built must be fully responsive.
- **Implementation**: Always use Tailwind CSS responsive modifiers (e.g., `md:`, `lg:`) to ensure the UI looks pristine on mobile screens, tablets, and desktops.
- **Layout Adjustments**: 
  - On mobile, sidebars should ideally be hidden behind a hamburger toggle or implemented as off-canvas drawers (`absolute z-50`).
  - Grids should collapse to single columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
  - Padding and margins should be reduced on smaller screens (`p-4 md:p-8`).

## 2. Database Safety
- **No Destructive Commands**: NEVER run destructive database commands (e.g., `prisma db push --force-reset`, `prisma migrate reset`, dropping tables) without EXPLICITLY telling the user first and receiving their strict approval.
- **Data Preservation**: Always assume the local database contains important data unless told otherwise.
