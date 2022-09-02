import { useState } from 'react'

export const SubComponent = () => {
  return <div>This is more content that I wish to show and hide.</div>
}

//prettier-ignore
function ShowComponentButton() {
  return (
    <div className='read-more'>

    </div>
  )
}

const ShowComponent = () => {
  const [isShown, setIsShown] = useState(false)

  const showSubComponent = () => {
    console.log('running...')
    setIsShown(!isShown)
    console.log('isShown :>> ')
    console.log(isShown)
  }

  return (
    <div className='flex flex-row bg-slate-200'>
      <div className='basis-3/4 flex-column flex-center'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          soluta reprehenderit doloribus quidem distinctio ipsa accusantium
          dolor magnam, voluptatum facilis iusto ad quibusdam provident
          perspiciatis praesentium aut similique ea odit. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Accusamus exercitationem quam earum
          voluptas recusandae distinctio, possimus, maxime dolore vel aliquam
          eos at deserunt inventore. Fugiat facilis qui debitis labore sequi?
        </p>
        <button className='btn read-more-button' onClick={showSubComponent}>
          Show Component
        </button>
        {/* Read More Button */}
        {isShown && <SubComponent />}
      </div>
    </div>
  )
}

export default ShowComponent
