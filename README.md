# Frontend Mentor Challenge - Multi-step form

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ "https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ").

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
        - [Page transition animation](#page-transition-animation)
- [Resources](#resources)

## Overview

Users should be able to:

- Complete each step of the sequence

- Go back to a previous step to update their selections

- See a summary of their selections on the final step and confirm their order

- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

- Receive form validation messages if:

   - A field has been missed

   - The email address is not formatted correctly

   - A step is submitted, but no selection has been made

Links:

- GitHub Repo: <https://github.com/xup60521/react-multi-step-form>

- Live website: <https://xup60521.github.io/react-multi-step-form/>

## My process

### Built with

- React (powered by vite)

- TailwindCSS

- shadcn/ui (toast component)

- jotai (state management)

### What I learned

#### Page transition animation

Though it is not required, I want to implement page transition animation to challenge myself.

My though is, whenever the page change, previews element should fade out, while next page should fade in.

First we need to setup animation

```tsx
// tailwind.config.js
{
  keyframes: {
      "fade-in-right": {
          "0%": {
              opacity: 0,
              transform: "translate3d(10%, 0, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          },
      },
      "fade-out-left": {
          "0%": {
              opacity: 1,
          },
          "100%": {
              opacity: 0,
              transform: "translate3d(-10%, 0, 0)",
          },
      },
  },
  animation: {
      fadeinright: 'fade-in-right 0.25s ease-in-out 0s 1',
      fadeoutleft: 'fade-out-left 0.25s ease-in-out 0s forwards;',
  },
}
```

After that, we need to know whether a page should fade in or fade out.

```tsx
const [step, setStep] = useState(1);
function handleFadeInOut(s: number) {
    if (s < step) {
        return "animate-fadeoutleft";
    }
    if (s === step) {
        return "animate-fadeinright";
    }
    return "hidden";
}

return (
  <div>
    <div
        className={`${handleFadeInOut(1)}`}
    >
        <Step1 setStep={setStep} />
    </div>
    <div
        className={`${handleFadeInOut(2)}`}
    >
        <Step2 setStep={setStep} />
    </div>
    {/* such that */}
  </div>
)
```

Without `framer-motion`, we can still implement page transition animation by ourself.

To be honest, this challenge is not that hard. Maybe it is more appropriate to categorized in the Intermediate level.

## Resources

- Google font - <https://fonts.google.com>

- TailwindCSS Docs - <https://tailwindcss.com/docs>