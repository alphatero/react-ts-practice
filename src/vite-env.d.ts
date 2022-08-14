/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  VITE_APP_BASE_URL: string;
}
