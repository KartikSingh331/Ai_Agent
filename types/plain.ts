export type ComponentNode = {
  type: string
  props: Record<string, any>
  children?: ComponentNode[]
}

export type UIPlan = {
  layout: "single-column" | "two-column" | "dashboard"
  components: ComponentNode[]
  modification_summary: string
  full_regeneration: boolean
}
