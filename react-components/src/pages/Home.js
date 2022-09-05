import Navbar from '../components/Navbar'
import HomeAccordion from './HomeAccordion'

//prettier-ignore
function Home() {
  return (
    <div className='container bg-slate-200 p-2 flex flex-row'>
      <div className="container basis-3/4">
        <h1 className='font-serif text-xl font-bold'>Home: React Component Repository</h1>
        <div className="home-content">
          <HomeAccordion>
          </HomeAccordion>
        </div>
      </div>



      <Navbar />

    </div>
  )
}

export default Home
