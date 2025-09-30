/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BIRTHDAY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
