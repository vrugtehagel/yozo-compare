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

## Results

Each framework is built 4 times; one for each component, and once more for all three components together. The results are gzipped sizes, calculated with `gzip -c filename.js | wc -c`. If there are multiple files (like with Yozo) then the gzipped sizes are computed for each file and added, which ends up being the transferred size that a browser would need to download.

| Framework | no-op     | click-counter | toggle-switch | All together |
|:--------- | ---------:| -------------:| -------------:| ------------:|
| Lit       |  6935     |  7743         |  8485         |  8754        |
| Stencil   |  3696     |  6851         |  7487         |  8166        |
| Svelte    |  2455     |  3002         |  3282         |  3590        |
| Vanilla   |    94     |   668         |   846         |  1608        |
| Vue       | 21139     | 21643         | 21858         | 22249        |
| Yozo      |  4823     |  5090         |  5355         |  5712        |

To read more about these results, see

Not unsurprisingly, Svelte is the only one to beat Yozo.
