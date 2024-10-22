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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


**NOTES:**
After commit "Installation of Supabase", refer to the below steps to install Supabase on the machine you're going to work on ::::

1. Install Supabase by installing Scoop on your machine by this command, without admin privilages : 

    ```console
    irm get.scoop.sh | iex
    ```
2. Verify the installation by running this command : 
    ```console
    scoop --version
    ```

3. Install supabase, follow the URL : 
    [https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=windows](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=windows)

4. After this, do a Supabase Logout and Login cycle in your machine.

5. Follow the guide to link Supabase to your project locally : 
    [https://supabase.com/docs/reference/javascript/typescript-support#generating-typescript-types](https://supabase.com/docs/reference/javascript/typescript-support#generating-typescript-types)

6. Done.