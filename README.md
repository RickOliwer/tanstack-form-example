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

- **First-class TypeScript** support — fully typed field and submit payloads.
- **Zero dependencies & headless** — keep your bundle lean and bring your own UI.
- **Composable API** — similar to TanStack Query; subscribe only to what you need.
- **Fine-grained re-render control** using field-level subscriptions.
- **Framework-agnostic core** — works with React, Vue, Svelte, Solid, and more.

Though I’ve used React Hook Form in many projects and it has served me well, I can’t ignore what TanStack Form has to offer. It’s small (around 9 kB gzipped), has no runtime dependencies, and gives me full control over how my forms behave — without relying on hidden context or magic.

It uses `@tanstack/store` under the hood, which means I can subscribe to specific fields and avoid unnecessary re-renders. That alone has solved a few headaches I’ve run into with React Hook Form in the past.

The API is fully type-safe with excellent TypeScript support, and since I already work a lot with TanStack Query, the developer experience feels familiar. It’s headless, composable, and doesn’t lock me into a specific UI — which makes it a great fit for how I like to build.

---

## Why Zod for validation?

- **Single source of truth**: schema powers both TS types and runtime checks.
- **Tiny & tree-shakeable** compared to Yup/Joi.
- Excellent **integration with TanStack Form’s `schema` option**.
- Superb error-handling and custom refinement support.

---

## Folder Structure
