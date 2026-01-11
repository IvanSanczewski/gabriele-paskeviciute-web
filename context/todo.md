# To-Do List for Website Styling

This document outlines the steps to be taken for implementing the design requirements, starting with the desktop version and preparing for mobile and tablet responsiveness.

## Phase 1: Desktop Styling (Current Session)

- [pending] Review existing `style.css` to understand current styles and identify areas for modification based on design requirements.
- [pending] Adjust `--margin-slider` variable in `style.css` to control menu's available space, ensuring menu items and slide arrows are the sole occupants of this area.
- [pending] Implement styling for `h2` titles to ensure consistent positioning at the same height, maintaining a minimum distance of 1.5em from background image borders and the menu area.
- [pending] Refine image scaling behavior across the site, specifically addressing `ISP_KOKEDAMA_WSP_394.jpg` to grow/shrink similarly to `Gabriele-portrait-1.jpg`, preventing undesirable vertical growth.
- [pending] Address the styling of `.comments` elements within forms:
    - [pending] Resolve the issue where `.comments` skips the gap in `.form` when its height is set to `4em`.
    - [pending] Ensure `.comments` has the exact same width as other `.form-row` elements for proper visual alignment.
- [pending] Modify the `.form` layout in the "organise a workshop" section (`kokedama-workshops.html`) to ensure it shrinks and centers itself effectively, similar to content in the "workshops" page, overriding the `left: 22.50vw` rule.
- [pending] Investigate and provide a solution for selecting the `textarea` within the `.form` element specifically on `contact.html` without introducing new classes, addressing the `.form:last-child textarea` issue.

## Phase 2: Mobile & Tablet Styling (Next Session)

- [pending] Adjust `--margin-slider__mobile` for appropriate menu spacing on smaller screens.
- [pending] Implement conditional scrolling within the `.content` area for screens with a height less than 800px to accommodate lengthy text or images.
- [pending] Introduce a media query breakpoint to refactor the layout of textareas in forms (e.g., "organise a workshop") to stack them in a single column on smaller screens.
- [pending] At the defined breakpoint, ensure the width of `.comments` textareas matches that of other textareas for visual uniformity.
- [pending] Conduct a comprehensive review of all desktop styling changes and adapt them for optimal responsiveness on mobile and tablet devices.
- [pending] Thoroughly test all responsive layouts across various mobile and tablet screen sizes to ensure design integrity and functionality.
