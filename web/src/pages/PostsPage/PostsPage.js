import PostsLayout from 'src/layouts/PostsLayout'
import PostsCell from 'src/components/PostsCell'

const PostsPage = () => {
  console.log('postspage')
  return (
    <PostsLayout>
      <PostsCell />
    </PostsLayout>
  )
}

export default PostsPage
