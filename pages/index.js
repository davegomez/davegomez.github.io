import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

const BLOG_TITLE = '{ davegomez.io }'

const renderPosts = (post, idx) => (
  <article key={`post-${idx}`}>
    <h1>
      <a href={post.data.url}>{post.data.title}</a>
    </h1>
    <Content {...post} excerpt />
  </article>
)

export default withPosts(({ posts }) => {
  return (
    <div>
      <header>
        <h1 className='blog-title'>{BLOG_TITLE}</h1>
      </header>
      <div>{posts.map(renderPosts)}</div>
    </div>
  )
})
