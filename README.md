This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]. Also this repo supports module SASS and tailwind css out of the box.
(https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Actually i created this repo for my-self in purpose of saving time at the starting point of every project.
But i thought the others in community may like the folder structure and packages this repo contains.

#### How to know if this works with no Problem?

In the main page if you can see a `Green ` colored `bold` text that says `This is a test from TAILWIND CSS` it means the _Tailwind CSS_ works well.
Same goes for Module SASS but in purple color.

Otherwise, if you can not see the colored text or the font weight is thin this packages didnt work properly.

#### Additional Packages with this repo :

1. Axios
2. Nprogress

You can remove them and their types easily in package.json if you dont need them in your project.

## Getting Started

First, update all packages:

```bash
# The npm-check-updates check and update all package versions that used in your project package.json file
# But first we need to make sure this package itself exists on your device.
# consider using sudo command if you using mac devices
npm install -g npm-check-updates@latest
# then
ncu -u
# and finally
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js and the other packages this template supports, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Tailwind CSS](https://tailwindcss.com/docs/installation) - A utility-first CSS framework
