import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import HowItWorks from '../widgets/HowitWorks'
import Solutions from '../widgets/Solutions'

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <Header></Header>
      <main className="mt-20">
        <Hero></Hero>

        <section className="md:p-20">
          <Solutions />
        </section>

        <section className="mt-20">
          <HowItWorks />
        </section>
      </main>
    </div>
  )
}

export default Index
