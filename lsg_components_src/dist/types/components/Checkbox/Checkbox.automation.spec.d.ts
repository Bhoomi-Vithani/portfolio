import { ActionPOM } from "../../test/playwright/ActionPOM";
interface CheckboxFixtures {
    checkboxPage: ActionPOM;
}
declare const test: import("playwright/test").TestType<import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions & CheckboxFixtures, import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions>;
export { test };
