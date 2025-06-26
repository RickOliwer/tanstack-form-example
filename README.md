# TanStack Form + Zod + Next.js 15 Demo

A minimal public showcase of modern, type-safe form handling in React/Next.js using **TanStack Form** with **Zod** validation and **shadcn/ui** components.

---

## Tech Stack

| Tool              | Version | Why it’s here                             |
| ----------------- | ------- | ----------------------------------------- |
| **Next.js**       | 15.3    | Latest stable with App Router & Turbopack |
| **React**         | 19.1    | Concurrent features & Actions API         |
| **TypeScript**    | 5.5     | Strict typing everywhere                  |
| **TanStack Form** | 1.12.3  | Headless, tiny, type-safe forms           |
| **Zod**           | 4.x     | Compile- & runtime-safe validation        |
| **shadcn/ui**     | 2.6.x   | Accessible, Radix-based UI primitives     |
| **Tailwind CSS**  | 4       | Utility-first styling                     |

---

## Why TanStack Form instead of React Hook Form?

- **First-class TypeScript** generics → fully-typed field & submit payloads.
- **Zero dependencies & headless** design keeps bundles lean; bring your own UI.
- **Composable API** feels like TanStack Query—subscribe only to what you need.
- **Granular re-render control** via field subscriptions.
- **Framework-agnostic core** (React, Vue, Solid, Svelte, etc.).

---

## Why Zod for validation?

- **Single source of truth**: schema powers both TS types and runtime checks.
- **Tiny & tree-shakeable** compared to Yup/Joi.
- Excellent **integration with TanStack Form’s `schema` option**.
- Superb error-handling and custom refinement support.

---

## Folder Structure
