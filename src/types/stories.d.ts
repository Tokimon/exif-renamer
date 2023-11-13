export interface StoryConfig {
  Component: unknown;
  data?: Record<string, unknown>;
  props?: Record<string, any>;
  on?: Record<string, (e: CustomEvent<any>) => void>;
}
