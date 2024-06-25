# Compare Yozo

This repo serves as a testing ground. It compares custom element definitions in a small variety of frameworks and libraries.

This is primarily useful for making fair comparisons with Yozo.

## Getting started

Each folder represents a separate framework or library that supports building custom elements. For each, except for Yozo's, you must run `npm install` and subsequently `npm run build` to run the build process. Some of the frameworks minify and/or bundle themselves, others use a bundler. Yozo itself doesn't need a package manager or bundler, and can be served as-is. Hypothetically, Yozo components can be minified using an HTML minifier, though this is excluded intentionally as to not misrepresent Yozo for those who do not wish to use bundlers or other similar tooling.

## About the codebase

Each library or framework defines three custom elements.

- `<click-counter>`: includes a button that counts up every time it is clicked. It also has a `.reset()` method.
- `<no-op>`: does nothing besides defining the custom element. It must match the `:defined` pseudo-class.
- `<toggle-switch>`: A slightly more complex component representing a toggle switch. It is form-associated and exposes an `on` attribute-property combination, defines a `name` attribute-property combination, aliases the `.on` property to `.value`, and has a `.toggle()` method to toggle the switch programmatically.

Note that there are slightly behavioral differences between them, but that's okay; different tools have different philosophies, and this should not significantly impact the comparison.
