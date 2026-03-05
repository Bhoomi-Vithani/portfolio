# Component-Based Tracking: Principles and Implementation

## Overview

The Google Tracking team has implemented a component-based tracking library for LSG design system components. This serves as an abstraction layer over Google Tag Manager (GTM) and Google Analytics (GA4), enabling teams to track user interactions with UI components consistently and accurately across applications.

**Related:** CCSN-92962

## Core Principles

### 1. Component Identification

All trackable components use the `data-lsg-component` attribute to identify their type.

**Placement Rules:**

-   **Clickable components** (Button, IconLink, ActionButton, etc.): Place `data-lsg-component` on the **action element** (button or link)
-   **Complex/Container components** (PortalHeader, SimpleHeader, Footer, Accordion, ClickListItem, Layer/Drawer, OnPageNavigation): Place `data-lsg-component` on the **base element**

### 2. Label Tracking

**Challenge:** Component labels can be JSX elements, not just strings.

**Solution:** Use `data-lsg-subcomponent="label"` on the element containing the actual label text.

```html
<!-- Example: IconLink with trackable label -->
<button data-lsg-component="icon-link">
    <svg>...</svg>
    <span data-lsg-subcomponent="label">Click me</span>
</button>
```

**Rationale:** Complex components may have nested structures, but the actual text can be uniquely identified with this attribute.

### 3. Special-Purpose Attributes

#### Icon Identification

-   **Attribute:** `data-lsg-icon-name`
-   **Purpose:** Identify which icon is used
-   **Example:** `<svg data-lsg-icon-name="chevron-right">`

#### Navigation Hierarchy

-   **Attribute:** `data-lsg-nav-level`
-   **Purpose:** Identify navigation level in hierarchy
-   **Values:** `"segment"`, `"topic"`, `"group"`, `"page"`
-   **Usage:** Applied to navigation links to understand their hierarchical position

#### Color Variants

-   **Attribute:** `data-lsg-color`
-   **Purpose:** Track color/theme variants for analytics
-   **Example:** `data-lsg-color="secondary"`

### 4. Header Components

**PortalHeader and SimpleHeader** use special navigation tracking:

-   Logo: `data-lsg-component="logo"`
-   Segment navigation links: `data-lsg-nav-level="segment"`
-   Topic navigation links: `data-lsg-nav-level="topic"`

### 5. Context-Based Component Identification

Instead of generic `data-role` attributes, we use specific component identifiers:

| Old Approach             | New Approach                                         |
| ------------------------ | ---------------------------------------------------- |
| `data-role="tab"`        | Parent has `data-lsg-component="tab-bar"`            |
| `data-role="jumplink"`   | Parent has `data-lsg-component="jump-links"`         |
| `data-role="pagination"` | Parent has `data-lsg-component="pagination"`         |
| `data-role="skipLink"`   | Parent has `data-lsg-component="skip-links"`         |
| `data-role="opn"`        | Parent has `data-lsg-component="on-page-navigation"` |

**Rationale:** Component context provides better semantic meaning than generic roles.

---

## Implementation Details

### Clickable Components

All clickable components have `data-lsg-component` on the **action element** (button or link).

| Component            | Attributes                                | Notes                                                                                                |
| -------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **ActionButton**     | `data-lsg-component="action-button"`      | Label: `data-lsg-subcomponent="label"`                                                               |
| **Button**           | `data-lsg-component="button"`             | Label: `data-lsg-subcomponent="label"`                                                               |
| **IconLink**         | `data-lsg-component="icon-link"`          | Label: `data-lsg-subcomponent="label"`                                                               |
| **CircleIconLink**   | `data-lsg-component="circle-icon-link"`   | Header: `data-lsg-subcomponent="header-label"`<br>Helper: `data-lsg-subcomponent="helpertext-label"` |
| **Link**             | `data-lsg-component="link"`               | Text link component                                                                                  |
| **NavigationLink**   | `data-lsg-component="navigation-link"`    | No subcomponent label needed                                                                         |
| **BreadcrumbsItem**  | `data-lsg-component="breadcrumbs-item"`   | No subcomponent label needed                                                                         |
| **ActionFlyoutItem** | `data-lsg-component="action-flyout-item"` | On action element                                                                                    |

### Complex Components

These components have `data-lsg-component` on their **base element**:

| Component               | Attributes                                                                                            | Notes                                                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Accordion**           | `data-lsg-component="accordion"`                                                                      | Label: `data-lsg-subcomponent="label"` on text element<br>Open state tracked via `aria-expanded`                                                       |
| **ClickListItem**       | Base: `data-lsg-component="click-list-item"`<br>Action: `data-lsg-component="click-list-item-action"` | Complex component that may contain TwoLineItem<br>No separate label subcomponent (uses headline prop)<br>Uses `aria-describedby` for subline and badge |
| **CardsItem**           | `data-lsg-component="cards-item"`                                                                     | On base element                                                                                                                                        |
| **ChipsItemAction**     | `data-lsg-component="chip-item-action"`                                                               | On action element                                                                                                                                      |
| **ChipsToggleItem**     | `data-lsg-component="chips-toggle-item"`                                                              | Toggle variant                                                                                                                                         |
| **NavigationLinkGroup** | `data-lsg-component="navigation-link-group"`                                                          | Used in metabar (Footer), segment (Header), etc.                                                                                                       |

### Layout & Structure Components

| Component              | Attributes                                  | Notes                                                                                                                      |
| ---------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **PortalHeader**       | `data-lsg-component="portal-header"`        | Contains Logo and navigation<br>Segment links: `data-lsg-nav-level="segment"`<br>Topic links: `data-lsg-nav-level="topic"` |
| **SimpleHeader**       | `data-lsg-component="simple-header"`        | Simplified header variant                                                                                                  |
| **Footer**             | `data-lsg-component="footer"`               | Standard footer                                                                                                            |
| **SimpleFooter**       | `data-lsg-component="simple-footer"`        | Simplified footer variant                                                                                                  |
| **SideNavigationPage** | `data-lsg-component="side-navigation-page"` | Page with side navigation                                                                                                  |
| **Layer**              | `data-lsg-component="layer"`                | Layer overlay component                                                                                                    |
| **Drawer**             | `data-lsg-component="drawer"`               | Drawer component (also used by Layer)                                                                                      |

### Navigation Components

| Component            | Attributes                                | Notes                     |
| -------------------- | ----------------------------------------- | ------------------------- |
| **OnPageNavigation** | `data-lsg-component="on-page-navigation"` | In-page navigation        |
| **JumpLinks**        | `data-lsg-component="jump-links"`         | Jump link group component |
| **SkipLinks**        | `data-lsg-component="skip-links"`         | Accessibility skip links  |
| **TabBar**           | `data-lsg-component="tab-bar"`            | Tab navigation bar        |
| **Pagination**       | `data-lsg-component="pagination"`         | Pagination component      |

### Utility & Content Components

| Component         | Attributes                                                   | Notes                                                            |
| ----------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| **Badge**         | `data-lsg-component="badge"`                                 | Badge element (for excluding badge text from tracking)           |
| **Icon**          | `data-lsg-component="icon"`<br>`data-lsg-icon-name="{name}"` | Icon with name identifier                                        |
| **Logo**          | `data-lsg-component="logo"`                                  | Logo element (used in headers)                                   |
| **FooterMetabar** | `data-lsg-component="footer-metabar"`                        | Metabar in footer (helps identify social/navigation link groups) |
| **GallerySlider** | `data-lsg-component="gallery-slider"`                        | Gallery slider component                                         |
| **ProductStage**  | `data-lsg-component="product-stage"`                         | Product stage/hero component                                     |
| **FormLink**      | `data-lsg-component="form-link"`                             | Form-style link component                                        |

---

## Not Yet Implemented

The following components are under consideration but not yet implemented:

-   **ProcessPage**: May not require tracking
-   **TwoLineItem**: May be needed for ClickListItem tracking
    -   Proposed: `data-lsg-component="two-line-item"`
    -   Proposed subcomponents: `"headline"`, `"overline"`

---

## Best Practices

### 1. Consistent Attribute Naming

Always use the `data-lsg-` prefix for LSG-specific tracking attributes:

-   ✅ `data-lsg-component`
-   ✅ `data-lsg-subcomponent`
-   ✅ `data-lsg-color`
-   ✅ `data-lsg-nav-level`
-   ❌ `data-component-type` (deprecated)
-   ❌ `data-color` (deprecated)

### 2. Action Element Priority

For clickable components, always place tracking attributes on the actual interactive element (button/link), not on wrapper divs.

### 3. Accessibility First

Tracking attributes should never interfere with accessibility attributes like `aria-label`, `aria-describedby`, etc. Use these existing attributes where possible.

### 4. Avoid Duplication

Use component context instead of adding redundant role attributes:

```html
<!-- ❌ Avoid -->
<button data-role="tab" data-lsg-component="icon-link">Tab</button>

<!-- ✅ Better -->
<div data-lsg-component="tab-bar">
    <button data-lsg-component="icon-link">Tab</button>
</div>
```

---

## Usage Examples

### Simple Button

```tsx
<Button id="submit-button" label="Submit" color="primary">
    {/* Renders with: */}
    {/* <button data-lsg-component="button" data-lsg-color="primary"> */}
    {/*     <span data-lsg-subcomponent="label">Submit</span> */}
    {/* </button> */}
</Button>
```

### Navigation with Hierarchy

```tsx
<PortalHeader>
    {/* Segment level navigation */}
    <NavigationLink data-lsg-nav-level="segment">Products</NavigationLink>

    {/* Topic level navigation */}
    <NavigationLink data-lsg-nav-level="topic">Savings Accounts</NavigationLink>
</PortalHeader>
```

### ClickListItem with Action

```tsx
<ClickListItem
    id="list-item-1"
    headline="Account Details"
    subline="View your account information"
    onClick={handleClick}
>
    {/* Renders with: */}
    {/* <div data-lsg-component="click-list-item"> */}
    {/*     <button data-lsg-component="click-list-item-action"> */}
    {/*         <span>Account Details</span> */}
    {/*     </button> */}
    {/* </div> */}
</ClickListItem>
```

---

## Migration from Old Attributes

If you're working with older code, here's how to migrate:

| Old Attribute                  | New Attribute                                         | Action                                     |
| ------------------------------ | ----------------------------------------------------- | ------------------------------------------ |
| `data-component-type="button"` | `data-lsg-component="button"`                         | Replace attribute name                     |
| `data-color="secondary"`       | `data-lsg-color="secondary"`                          | Replace attribute name                     |
| `data-floating="true"`         | `data-lsg-floating="true"`                            | Replace attribute name (ActionButton only) |
| `data-role="tab"`              | Remove, rely on parent `data-lsg-component="tab-bar"` | Remove attribute, use context              |
| `data-visible="true"`          | Remove, use `data-lsg-subcomponent="label"`           | Replace with subcomponent identifier       |

---

## Open Questions & TODOs

-   [ ] How to identify which topic has a page nav link in the MegaMenu?
-   [ ] Should menu button and mobile drawer have specific subcomponent identifiers?
-   [ ] Is back button tracking needed as `data-lsg-subcomponent="back-button"`?
-   [ ] Should Card actions be tracked analogously to ClickListItem?

---

## Support & Feedback

For questions, issues, or suggestions regarding component tracking:

-   Create a ticket with tag `google-tracking`
-   Reference: **CCSN-92962**
-   Contact: Google Tracking Team
