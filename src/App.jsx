import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/ABout'
import Product from './components/Product'
import Footer from './components/Footer'
import data from './data/data.json'
import Review from './components/Review'

function App() {
  const componentsMap = {
    Hero, About, Product, Review
  }

  return (
    <div className='bg-white'>
      <Navbar/>
      {data.sections.map((section) => {
        const SectionComponent = componentsMap[section.component];
        return (
          <div key={section.id} id={section.id}>
            <SectionComponent />
          </div>
        );
      })}
      <Footer/>
    </div>
  )
}

export default App
