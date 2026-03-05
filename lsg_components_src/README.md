# @lsg/components: React Components of the Living Styleguide (LSG)

## Special NPM Scripts

-   _story_: Start Storybook for a specific component.
    -   The environmental variable `LSG_STORY` may be used to run Storybook only for one specified
        component. This greatly reduces the startup time (see also `.storybook/main.js`).

## Testing

For more details see **README_coverage_testing.md**.

When there are no test-snapshots initially (folder 'component/**test-samples**/'), new images are generated
automatically.

## Playwright Tests

The testing environment was successively migrated to the Playwright test library and Playwright test runner. For the
time being, tests are executed with the command `npm run test`. The result can be viewed in `playwright-report/index.html`.

To run a single test, run the command: `npm run test {componentname}.spec.ts`, e.g. `npm run test Button.spec.ts`.

## Playwright renews snapshots of a component

Frequent mismatches can occur due to various reasons. These include screen density differences (e.g. 1.5 on the
client and 1.0 on the build server). These are frequent on notebooks or high-resolution screens on local machines.
Snapshots are scaled on the client but not on the server which leads to mismatches. Additionally, using
different browsers such as Edge, Safari, or Firefox on the client and server can cause mismatches. Another factor is
the font rendering differences between operating systems like macOS and Windows. Also, the used graphics card might
cause different render results.

The current method to update snapshots by using the server-rendered test results is the following:

1. Download the test-snapshots.zip file from the server (on TeamCity: Go to your last (failed) build overview site,
   then to the 'Artifacts' tab, open the 'dist' folder -> the zip file should be there) and place it in the root
   directory of the monorepo (the top-level directory of your project).
2. Execute `npm run test:import` in the root of the monorepo to fill the `__test-report__`-directories with the
   server-rendered test results.

Screenshot files follow this pattern:

```
[StoryTitle]_[StoryName]--[reducedParams].png                    # Baseline in __test-samples__/
[StoryTitle]_[StoryName]--[reducedParams]--[fullParams]__[interaction]__accepted.png   # Copy in of the old snapshot __test-report__/
[StoryTitle]_[StoryName]--[reducedParams]--[fullParams]__[interaction]__current.png    # New screenshot in __test-report__/
[StoryTitle]_[StoryName]--[reducedParams]--[fullParams]__[interaction]__diff.png       # Diff in __test-report__/
```

Example:

```
Button_Primary--variant_primary_size_medium.png                                    # Baseline
Button_Primary--variant_primary_size_medium--variant_primary_size_large__hover__current.png   # Current
Button_Primary--variant_primary_size_medium--variant_primary_size_large__hover__diff.png      # Diff
```

3. Execute `npm start` in `packages/lsg.components` to start a local instance of Storybook and to review the test
   results. For all test stories, there is a Matrix test component e.g. `Checkbox/Test/Checkbox Matrix` with a
   Checkbox to display the test images instead of the real components.
4. For each failed test, check the results:
    - If there have been new requirements and the component has a new look, the snapshots can be safely updated at
      step 5.
    - If the previous expected result was wrong, and the new result is correct, the snapshots can be safely updated at
      step 5.
    - If the new snapshot are not as expected, the snapshots should not be updated.
5. If the snapshots have been checked and are okay, the snapshots can be updated with the command `npm run test:accept`
   in the root of the monorepo. If the results are partially okay, the changes that are not okay must be reverted after
   executing `npm run test:accept`.
6. Note: If the snapshots change in size, no `__diff` files are generated. To accept the new files even if there's
   no diff, run: `npm run test:accept -- --all`. You can also compare the old and new snapshots in the commit view of
   IntelliJ.

Make sure only thoroughly checked snapshots are updated. The snapshots are the reference for the visual appearance of
the components. If the snapshots are wrong, the components will be wrong as well.

## Development

### Coding Standards and Tools

Detailed information and prop lists for the implementation of Living Styleguide (LSG) components can be found on the
[LSG websites](https://markenportal.commerzbank.com/styleguide/).

You can contact the Living Styleguide team at the following email address: livingstyleguide@commerzbank.com.

#### Static Typing (TypeScript)

#### Linting

-   [AirBnB React](https://github.com/airbnb/javascript/tree/master/react)
-   [Commerzbank Programmierrichtlinie JavaScript](http://comrules.intranet.commerzbank.com/comrules/faces/de/comruleshauptebene/it_portal/thema_266/qm20_21_3022/cr-20170106-0001.jsp)
-   [AirBnB JavaScript](https://github.com/airbnb/javascript)

#### Conventions

##### File Structure

In this section, the locations of the most important source files are listed.

| Directory          | Contents                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `/dist/`           | Result of the build task: JS/CSS bundle and a static sample pages and styleguidist build                       |
| `/public/`         | Assets including images and videos                                                                             |
| `/public/images/`  | Images that are bundled. Subdirectories are not directly added as assets, but processed by various build tasks |
| `/src/`            | Source directory                                                                                               |
| `/src/components/` | Component directory, bundled with `npm run build` and locally started with `npm start`                         |
| `/src/styles/`     | Basic CSS styling which is used by the LSG components                                                          |
| `/src/utils/`      | TypeScript(Extended) helper classes and functions                                                              |

File Conventions for Components:

Inside the `/src/components/` directory, the following rules are applied:

-   Components are categorized according to the Atomic Design methodology into Atoms, Molecules and Organisms. **_This
    might be subject to change in future version._**
-   Each component or set of related components (e.g. IconLink, IconLinkGroup) has a dedicated subdirectory. Directories
    are written in CamelCase and start with an uppercase letter. Components that are not intended to be used by consumers of
    the component library are prefixed with an underline (e.g. `_Drawer`).
    A component directory contains the following files and subdirectories (`[ComponentName]` is the name of the
    component):

| File / Directory                                                     | Role                                                                                                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/src/components/[ComponentName]/[ComponentName].tsx`                | TypeScriptExtended React implementation and interface definition with prop descriptions for customers.                                           |
| `/src/components/[ComponentName]/[ComponentName].mdx`                | Markdown eXtended file containing the documentation and embedded code examples for websites on https://markenportal.commerzbank.com/styleguide/. |
| `/src/components/[ComponentName]/examples`                           | Contains code examples for the .mdx file of the component.                                                                                       |
| `/src/components/[ComponentName]/[ComponentName]sgn.stories.tsx`     | Contains args and parameters for the Monaco Editor that presents the code examples on the LSG websites.                                          |
| `/src/components/[ComponentName]/[ComponentName].stories.tsx`        | Contains internal Storybook stories for the component using the [ComponentName].tsx file.                                                        |
| `/src/components/[ComponentName]/shared/`                            | Subdirectory for internal component code files and test files                                                                                    |
| `/src/components/[ComponentName]/shared/[ComponentName].styles.ts`   | TypeScript file for CSS styling                                                                                                                  |
| `/src/components/[ComponentName]/shared/[ComponentName].stories.tsx` | Contains internal Storybook stories for the component where the internal [ComponentName]Presentation.tsx file is used.                           |
| `/src/components/[ComponentName]/_[SubComponentName].tsx`            | Component which is only used inside the component directory                                                                                      |
| `/src/components/[ComponentName]/[RelatedComponentName].tsx`         | Component which relates to the main component of this directory                                                                                  |
| `/src/components/[ComponentName]/index.tsx`                          | File that exports the components of this directory                                                                                               |
| `/src/components/[ComponentName]/shared/[ComponentName].test.tsx`    | Component render test file                                                                                                                       |
| `/src/components/[ComponentName]/shared/__test-samples__`            | Subdirectory with generated snapshot tests                                                                                                       |

##### CSS Conventions

-   Basics
    -   Fonts, Typography
    -   Colors, Theming
    -   Building Units (BU)
        -   1 bu = 4 px
        -   1 burem = 0.25 rem
    -   Viewports
-   Block Element Modifier (BEM)

##### TSX Conventions

-   Basic props
-   Interface definition
    -   Props, State, Options
-   Class Components
    -   General Structure
-   Functional Components
    -   Intro
        -   avoid frequent conversions between functional and class components
        -   Higher-Order Components and Wrapper Components are used for some LSG components internally to
            e.g. split an interaction logic to a Wrapper file.

#### State vs. Props in React and in the Living Styleguide

In this section, a short recap of how to use state and props in an efficient and robust way is summarized. See
https://react.dev/learn for further introductory information on React.

-   Don't change this.props and this.state directly.
-   If a state or prop is an object, ensure that it remains immutable (e.g. change values by assigning a deep clone).
-   The data flows in one direction -> from the parent to the child. Use props to pass data.

##### Understanding State

-   State works differently when compared to props.
-   State is internal to a component, while props are passed to a component.
-   State in React is used within components to keep track of information.
-   Anytime there is data that is going to change within a component, state can be used.

Keep in mind not to update state directly using this.state. The state is set in the constructor of a component.
Subsequent state updates such as updates inside callback function need to be done with `this.setState({...})`, for
example:

```jsx static
class MyControlledComponent extends React.Component {
    constructor(props) {
        super(props); // always call super(props) in the constructur first.
        this.state = { field: "" }; // initialize state here
        this.keyDownHandler = this.keyDownHandler.bind(this); // Binding needed, so that this.state is available
    }

    keyDownHandler() {
        //...
        this.setState({ field: "exampleString" }); // CORRECT
        //...
        this.setState({ field: this.state.field + "_for_LSG" }); // WRONG: this.state may have changed asynchroneously
        this.setState(prevState => ({ field: prevState.field + "for_LSG" })); // CORRECT
        //...
    }

    render() {
        return (
            //...
            <Button onClick={() => this.setState({ field: "" })} onKeyDown={this.keyDownHandler} />
            //...
        );
    }
}
```

Using setState re-renders the component and all the child components. Manual re-renders can be triggered by simply
mutating the state.

##### Difference between state and class variables

-   When to use class variables
-   When to use state
-   Where to use the state (parent / child)

A common pattern in React is to use 'state' as rarely as possible. Most components should keep no internal state but the
state should be managed from outside, by a wrapping component. The common pattern is:

`<Component value={myValue} onChange={myChangeHandler} />`

The component, e.g. an LSG `<TextField>`, does not maintain its own internal state for the value, but instead receives it
exclusively via the `value` prop. Changes are reported to the parent component using the `onChange()` callback provided as a prop.
The parent component is therefore responsible for state management.

A good example of stateless components are form input fields. To send your data to the backend of your application in a
robust way, you should keep the form data in a structure you have access to (e.g. the state of the page component).
See https://markenportal.commerzbank.com/styleguide/forms-pattern/ for a user-input form code example with LSG components.

#### Controlled vs. Uncontrolled Components

A _controlled_ component, as described above, receives its data through props and notifies changes through callbacks
like onChange(). A parent component "controls" it by handling the callback and managing its own state as well as passing
the new values as props to the controlled component.

An _uncontrolled_ component is one that stores its data without a React state object as part of the input element
instances. Data is collected by using refs to access the DOM node. Using uncontrolled components is strongly
discouraged, because React is not informed of any change, and the visual representation can get out of sync with the
internal component state.

For examples, see: https://reactjs.org/docs/forms.html#controlled-components

### Living Styleguide Components

As of 2025, most Living Styleguide (LSG) components use Functional Components of React and useState Hooks to manage their state. For further information on React Hooks, see
https://react.dev/learn#using-hooks.

Information about LSG components regarding design guidelines, usage, accessibility recommendations and editable code examples
can be found on the LSG websites: https://markenportal.commerzbank.com/styleguide/.

Overview of components: https://markenportal.commerzbank.com/styleguide/component-overview/.
User Experience Patterns: https://markenportal.commerzbank.com/styleguide/ux-patterns/.

### Contributor Guidelines

#### Preparation

There is a need to keep the component library small and maintainable and to avoid redundancies and an inconsistent
corporate identity. New components shall only be developed, if there are no suitable existing components and the favored
result cannot be archived by combining existing components. Also adapting existing components or making components more
general needs to be considered. There should always be a designer involved in the decision to check the business
requirements from a visual point of view. There also need be checks concerning implementation consistency from a library
maintainer:

-   Are elements designed in a consistent way (e.g. consistent coloring, hover effects, margins, responsive behavior)?
-   Does the design offer a light theme variant and a dark theme variant?
-   Can the components be used in manifold contexts?
-   Are the common usage scenarios described?
-   Is the responsive behavior defined, so that pages are responsive out of the box?
-   Are non-visual requirements like accessibility, keyboard interactions and other UX best practices addressed?
-   Is there a usage guide for business teams and content administrators (e.g. allowed image sizes or maximum text
    lengths)?

If there is a new component that needs to be developed, it needs to be checked if existing components can be used as
subcomponents. Using existing components reduces the library size, the implementation effort and the amount of graphical
or functional inconsistencies. A typical example is the usage of the Icon component for non-interactive symbols and the
IconLink component for interactive symbols. They have a limited set of colors, sizes and variants, which results in a
consistent appearance.

#### General

The project language of the Living Styleguide is English. This covers code, API and documentation files. The implementation
is done in TypeScript, React and CSS.

Components need to be developed as isolated units. Components must not have a different styling or other special
behavior depending on their parents. Instead, components should be configured by setting the appropriate props.
Furthermore, styling pages with custom CSS (e.g. for fine-tuning margins) is not permitted.

A component needs to have a defined usage context. One or more IconLinks for example needs to be wrapped by an
IconLink.Group, a Section may only be defined on a page scope or inside a Drawer. A SubSection for example is only
allowed inside a Section.

#### Styling

For the naming of CSS classes, the Block Element Modifier (BEM) schema is used. It has a block identifier ("lsg" for the React component library), element identifier (the name of the component) and a modifier (e.g. a variant
like color). The naming is: block--element**modifier or block--element-subelement**modifier, e.g. lsg--headline**bold,
lsg--icon**large, or lsg--input-errormessage.

Concerning the styling it has to be ensured that there is no global styling on tags. The styling also must not affect
other components.

Allowed:

```css
p.lsg--paragraph {
    border: 1px;
}
.lsg--paragraph {
    border: 1px;
}
```

Not allowed:

```css
p {
    border: 1px;
}

- {
    box-sizing: border-box;
}
```

When styling components for the Living Styleguide, the provided helpers for colors, font styling and spacings need to be
used. Pixels are measured in building units (4px = 1bu, 0.25rem = 1burem).

#### Component Interface

For naming, use short, consistent and meaningful names. Prioritize function over appearance.

| Example Topic                     | Good                                          | Bad                                                     |
| --------------------------------- | --------------------------------------------- | ------------------------------------------------------- |
| Color                             | primary, secondary, disabled                  | yellow, light-gray, gray2                               |
| Props                             | cancelButtonLabel, primaryButtonLabel         | firstButtonLeftText                                     |
| Callbacks                         | onCancel, onSuccess                           | secondButtonClickAction                                 |
| Use naming of existing components | value, onChange, label, helperText, errorText | currentStep, onTextChange, labelText, helperInfo, error |

Minimize the number of props that need to be set by the component consumer. Define default props and set them to
reasonable values.

Good Example (React):

```html
<Pagination numPages={5} currentPage={3} onClick={(page, event) => {/_ ... _/}} />
```

Bad Example (React):

```html
<Pagination numPages={5} currentPage={3} firstPage={1} onPageClick={() => {/_ ... _/}} onLeftArrowClick={() => {/_ ...
_/}} onRightArrowClick={() => {/_ ... _/}} label={""} />
```

In addition to following the naming conventions, props need to be documented using a TypeScript interface and Javadoc
comments. There need to be examples and a technical introduction which includes constraints for the usage.

#### Contributing

Commit messages for the repository need to follow these conventions:
https://www.conventionalcommits.org/en/v1.0.0-beta.4/
New components and component changes need to be listed in that CHANGELOG.md file.
Besides, semantic versioning is used for LSG releases. See https://semver.org/ for more information.

#### Properties

Which properties are a must for each component?

-   id (wrapper)
-   className (each component does have its own className. Another className passed by a property will be added at the end.)

Form components

-   value
-   onChange @return -> new value

Define the props at the beginning of the class as a const and assign it to the class at the end.

```js static
 const propTypes = {
     // A hint to the browser for which keyboard to display, e.g. text, password, email, or url.
     type: PropTypes.string,
     ...
 }

const defaultProps = {
    type: "latin",
    ...
}
...

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
```

#### Feature detection

1. **WhatInput**

    [WhatInput](https://github.com/ten1seven/what-input) adds data attributes to the window based on the type of input
    being used. It also exposes a simple API that can be used for scripting interactions.

    Thus, you can add focus rings to highlight the current tab position when a keyboard is used, and avoid them when a
    mouse or touch is used.

[//]: # "3. **User Defined Colors**"
[//]: #
[//]: # "    Since we use SVG icons, they will still be displayed if a vision impaired user has user defined colors that override all browser colors."
[//]: #
[//]: # "    Since a black icon on black background is invisible, we provide a feature detection for user defined colors. In this case the CSS class `.lsg--user-color` is added to the root element."
[//]: #
[//]: # "    Additionally, the user defined colors are checked if they are more bright or more dark. So on a user defined dark background, in your CSS you can change the SVG stroke fill to a bright color. There are the following classes available:"
[//]: #
[//]: # "    - `.lsg--user-color__color-light || .lsg--user-color__color-dark`"
[//]: # "    - `.lsg--user-color__bg-color-light || .lsg--user-color__bg-color-dark`"
[//]: #
[//]: # "    For testing, you can set custom colors in [Firefox](https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use#w_custom-font-color), or [Internet Explorer](https://www.bltt.org/software/ie/colours.htm). In Chrome, there are custom themes available."
