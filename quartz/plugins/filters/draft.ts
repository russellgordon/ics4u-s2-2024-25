import { QuartzFilterPlugin } from "../types"

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    const draftFlag: boolean = vfile.data?.frontmatter?.draftSectionTwo || false
    return !draftFlag
  },
})
