interface ImportMetaEnv {
  readonly POSTHOG_KEY: string;
  readonly POSTHOG_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
