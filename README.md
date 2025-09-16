## Project Overview

- I chose track 2
- This project converts JSON file inputs into responsive and reusable styled card components.
- **Stack:** React, TypeScript
- **Libraries:** TailwindCSS, Prettier

## Setup Instructions

1. Clone Repo

```
git clone
cd heywaAssignment
```

2. Install dependencies

```
npm i
```

3. Build and run app

```
npm run build
npm run preview
```

## My Approach

**Code Structure**

```
/src
  ├── components/               # PageComponents
    ├── filteringComponents/    # Filtering section components
        └── FilteringTab.tsx
    ├── cardComponents/         # Folder for all card related components
        ├── Card.tsx
        ├── CardDisplay.tsx
        └── Tag.tsx
    ├── Button.tsx
    ├── Dropdown.tsx
    ├── Heading.tsx
    └── TextHighlight.tsx
  ├── assets/                   # JSON files
  └── types.ts                  # General types for the app
```

### File structure

- I chose to separate all of the components to ensure reusability and scalability if I needed to expand on the project

### Libraries

- **TailwindCSS:** I chose this library as I find it allows me to work quicker and makes my code look cleaner, while still being able to produce effective styling and responsiveness.
- **Prettier:** I have been using this to ensure that all my code looks standardised making it more readable

### Card components

- Each reusable card component renders information dynamically according the the type of the object passed into it
- They are responsive and will change sizes according to the size of the screen

### Interactions

- **Filtering:** Dropdown and Checkbox element at the top allowing for filtering by type or by tag respectively.
- **Keyword Highlighting:** Input element allows highlighting of text in the title or the content / snippet / summary or the item, as well as filtering the results that have positive matches for the keywords.

### Future improvements

- I would add unit tests to ensure that any future changes maintained the UI, and cover edge cases
- I would further split the card components, to improve reusability
- I would further abstract the utility code, to make it more reusable

## AI Tool usage

- I used AI to help find the colors for the tag elements.
- I initially wrote the entire application myself.
    - I used ChatGPT to help optimize two specific parts of the project: the card filtering function for keyword highlighting and the tag component. The initial implementation and design decisions were mine, but I used AI to refine the performance and readability of these functions.
