// @ts-nocheck
import * as __fd_glob_18 from "../content/docs/components/toast.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/components/switch.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/components/slider.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/components/select.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/components/radio.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/components/popover.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/components/menu.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/components/field.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/dialog.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/combobox.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/checkbox.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/checkbox-group.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/button.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/avatar.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/alert-dialog.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/accordion.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/components/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "components/meta.json": __fd_glob_1, }, {"index.mdx": __fd_glob_2, "components/accordion.mdx": __fd_glob_3, "components/alert-dialog.mdx": __fd_glob_4, "components/avatar.mdx": __fd_glob_5, "components/button.mdx": __fd_glob_6, "components/checkbox-group.mdx": __fd_glob_7, "components/checkbox.mdx": __fd_glob_8, "components/combobox.mdx": __fd_glob_9, "components/dialog.mdx": __fd_glob_10, "components/field.mdx": __fd_glob_11, "components/menu.mdx": __fd_glob_12, "components/popover.mdx": __fd_glob_13, "components/radio.mdx": __fd_glob_14, "components/select.mdx": __fd_glob_15, "components/slider.mdx": __fd_glob_16, "components/switch.mdx": __fd_glob_17, "components/toast.mdx": __fd_glob_18, });