declare module "jsvectormap" {
  interface JsVectorMapOptions {
    selector?: string;
    map?: string;
    backgroundColor?: string;
    zoomButtons?: boolean;
    zoomOnScroll?: boolean;
    zoomOnScrollSpeed?: number;
    draggable?: boolean;
    showTooltip?: boolean;
    regionStyle?: Record<string, unknown>;
    series?: Record<string, unknown>;
    [key: string]: unknown;
  }

  class JsVectorMap {
    constructor(options: JsVectorMapOptions);
    destroy(): void;
  }

  export default JsVectorMap;
}
