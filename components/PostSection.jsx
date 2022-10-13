import Image from 'next/image'
import TweetBox from './TweetBox'


const PostSection = () => {
  return (
    <div className='lg:col-span-5 col-span-9 scrollbar-hide border-x overflow-scroll border-zinc-600  h-screen'>
      <TweetBox />
    </div>
  )
}

export default PostSection