

function Hero() {

  return (
    <section className="flex flex-col items-center  px-[clamp(2rem,15dvw,15%)] py-40 text-(--text-primary)">
        <h1 className="text-3xl">
          José Mathias
        </h1>

        <h1 className="text-5xl">
          WEB DEVELOPER
        </h1>
        
        <p className="max-w-xl text-center  mt-4 text-(--text-secondary)">
          Developer focused on System Design, integrations, and 
          building web applications end to end, from code to deployment.
        </p>
    </section>
  )
}

export default Hero
