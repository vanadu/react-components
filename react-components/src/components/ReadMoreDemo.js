import { useState } from 'react'
import Navbar from './Navbar'

//prettier-ignore
function ReadMore({ children, maxCharacterCount = 100}) {
  const text = children;

  const [ isTruncated, setIsTruncated ] = useState(true)

  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated) 
  }
  


  return (
    <p className='has-text-left p-2'>
      {resultString}
      <span 
        className='tag is-info is-small'
        onClick={toggleIsTruncated}
      >{isTruncated ? 'Read More' : 'Read Less' }</span>
    </p>)
}

//prettier-ignore
const ReadMoreDemo = () => {
  return (
    <>
    <div className='basis-3/4 devred flex-column flex-center'>
      <ReadMore maxCharacterCount={300}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolores voluptatum eum nisi. Cupiditate fugit provident minima pariatur ipsum fuga accusantium dignissimos eligendi voluptatum. Autem impedit laboriosam nostrum fuga voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores placeat temporibus neque repellat eum, similique laudantium, nobis magni deleniti molestiae quam odit molestias nesciunt saepe iure ipsam. Eligendi, qui officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nisi animi, aperiam consequatur hic voluptates perspiciatis aliquid, incidunt, dolore rerum itaque nihil tenetur magnam. Sequi natus possimus veritatis repudiandae! Impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, dolores repudiandae ab amet officiis, ex accusamus dignissimos veniam sit nihil, aperiam vitae sequi natus. Aliquam eos debitis repellat iusto numquam!
      </ReadMore>
    </div>
    <Navbar />
    </>  
  )
}

export default ReadMoreDemo
