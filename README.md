# coop-component-test3

> Donation Component Test in VueJS

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

## Methodology
This section will try and articulate my inner thoughts on how the app came to be, including the decision-making process.

### 1. Picking a toolkit
Since I'm more familiar with VueJS, I picked it as my go-to tool for creating interactive components. I used `vue-cli` to bootstrap the project quickly, SCSS as a styles pre-processor and ESLint for checking my code.

Next came the baseline functionality, which after some trial and error finally started working together. Leaning heavily on VueJS documentation and examples, I've been able to create a basic app flow, storing data in VM temporarily.

After the main look and feel was done, I used API data to provide some dynamic functionality in a form of "donate" action. There's currently no inline error validation, but it definitely should be added, but you cannot submit an empty value.

Currently, the click method doesn't do anythign apart from changing component state from `default` to `success`, but in reality it would display a progress indicator for submitting data over AJAX and work some API magic to process the payment, etc.

Component states use simple CSS keyframe aminations (via transforms) to createa card flip effect.

Since I'm generally pretty conscious about the quality of my code, I didn't have too much to clean or refactor to make the app work reliably and perform decently in poor network conditions.

The component isn't fully-responsive and I relied on the provided UI kit from Co-op, though I still had to create most of the card/panel styles myself.
