import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hello, I'm yiniyin 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert mb-4">
        {`I'm a software engineer. I currently work at `}
        <Link href="https://www.kiwibank.co.nz">Kiwibank</Link>
        {` where my team helps bring the best digital banking 
        experience possible to every Kiwi. `}
        {`I ponder upon various things such as `}
        <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {`, and `}{' '}
        <Link href="https://youtu.be/BXNROiWvxpY?si=DofJolOiNNQ4Xtm6">
          time
        </Link>
        {`.`}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I enjoy running. I find it therapeutic. I also enjoy tinkering with
          code and making something neat, not just visually but also
          programmatically.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Over the past few years, I've written content on `}
          <Link href="https://yiniski.medium.com/">Medium</Link>
          {`. `}
          {`You'll find my papers about technologies I'm interested
          in at the time, or things and experiences I learned in my 
          career, which I try to share along the way.`}
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  )
}
