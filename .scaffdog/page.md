---
name: "page"
root: "./app/"
output: "**/*"
ignore: []
questions:
  path: "Please enter the path of the page (eg. about/me)"
---

# {{ inputs.path }}/page.tsx

```tsx
export default function Page() {
  return <></>;
}

```