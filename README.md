# This is my journey towards learning next js properly.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure of a Next JS project.

- public - Contains the static assets (eg: logo, etc.)
- Every component is a server component or a client component.
- To make a client component you need to add "use client" directive on top the file.

# Important - Learning.

- Focus on learning the routing system in next js.
    - Using the page.tsx.
    - Nested routing (eg: dashboard/user, dashboard/admin)

- Focus on layouts.
    - Root layout is always required.
    - You can create additional layouts if necessary.

- How does error handling work in next js.
    - Error boundaries are client components.
    - Error will take the neares error.tsx file.
    - Same as layouts but differes when it comes to which one is going to take the priority.


