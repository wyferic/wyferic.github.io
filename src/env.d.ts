/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BIRTHDAY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
