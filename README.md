# TanStack Form + Zod + Next.js 15 Demo

This is a small public demo where I explore building modern, type-safe forms using **TanStack Form**, **Zod**, and **shadcn/ui**, all inside a Next.js 15 project.

I’ve used React Hook Form in many projects, but wanted to try something more explicit and type-driven — and TanStack Form delivers exactly that.

---

## Tech Stack

| Tool              | Version | Why I’m using it                          |
| ----------------- | ------- | ----------------------------------------- |
| **Next.js**       | 15      | App Router, Server Actions, and Turbopack |
| **React**         | 19      | Latest stable                             |
| **TypeScript**    | 5.8     | Strong types everywhere                   |
| **TanStack Form** | 1.12.3  | Headless, minimal, type-safe forms        |
| **Zod**           | 3.x     | Runtime + compile-time validation         |
| **shadcn/ui**     | –       | Clean, accessible UI components           |
| **Tailwind CSS**  | 4       | Utility-first styling                     |

---

## Why I use TanStack Form instead of React Hook Form

Though I’ve used React Hook Form in many projects and it’s served me well, I can’t ignore what TanStack Form has to offer. It’s tiny (around 9 kB gzipped), has zero runtime dependencies, and gives me more control over how forms work — without relying on hidden context or magic.

It uses `@tanstack/store` under the hood, so I can subscribe to specific fields and avoid unnecessary re-renders. That alone has solved a few issues I’ve run into with React Hook Form before.

The API is fully typed, clean, and familiar if you’ve used TanStack Query. It doesn’t force me into a UI pattern and gives me the freedom to build forms the way I like — which makes it a better fit for how I build apps.

---

## Folder Structure

_coming soon…_

---

Let me know if you want this demo extended or explained in more depth — happy to keep exploring TanStack Form.

<meta name="google-site-verification" content="xI1lhRqMRWs6nObrrItzNzC8nJ43VUezOfYDakGLly0" />
