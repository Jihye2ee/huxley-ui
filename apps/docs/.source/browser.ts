// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/accordion.mdx": () => import("../content/docs/components/accordion.mdx?collection=docs"), "components/alert-dialog.mdx": () => import("../content/docs/components/alert-dialog.mdx?collection=docs"), "components/avatar.mdx": () => import("../content/docs/components/avatar.mdx?collection=docs"), "components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), "components/checkbox-group.mdx": () => import("../content/docs/components/checkbox-group.mdx?collection=docs"), "components/checkbox.mdx": () => import("../content/docs/components/checkbox.mdx?collection=docs"), "components/combobox.mdx": () => import("../content/docs/components/combobox.mdx?collection=docs"), "components/dialog.mdx": () => import("../content/docs/components/dialog.mdx?collection=docs"), "components/field.mdx": () => import("../content/docs/components/field.mdx?collection=docs"), "components/menu.mdx": () => import("../content/docs/components/menu.mdx?collection=docs"), "components/popover.mdx": () => import("../content/docs/components/popover.mdx?collection=docs"), "components/radio.mdx": () => import("../content/docs/components/radio.mdx?collection=docs"), "components/select.mdx": () => import("../content/docs/components/select.mdx?collection=docs"), "components/slider.mdx": () => import("../content/docs/components/slider.mdx?collection=docs"), "components/switch.mdx": () => import("../content/docs/components/switch.mdx?collection=docs"), "components/toast.mdx": () => import("../content/docs/components/toast.mdx?collection=docs"), }),
};
export default browserCollections;