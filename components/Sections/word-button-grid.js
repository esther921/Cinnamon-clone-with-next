import Button from "../button"

export default function Word_button_grid() {
    return (
        <section className="py-24 lg:py-40 relative px-6 pb-16">
        <div className="grid grid-cols-12 mx-auto gap-y-8 gap-x-8 justify-around relative z-10 pr-60 pb-24 pl-16">
          <div className="col-start-1 col-end-6 ">
            <h2 className=" text-5xl font-bold mb-8 lg:mb-0 w-max">
              Agile team
              <br />
              on demand
            </h2>
            
            
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[352px] col-start-1 col-end-13 lg:col-start-7">
            <p className="text-base text-txt-dark leading-6.5 mt-4">
              By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile and
              scalable in both directions.
            </p>
            <Button text={"See How It Works"} />
          </div>
        </div>
        <picture>
                
            </picture>
        <picture>
        <img src="/Images/agile-team-on-demand.png" 
          className="absolute right-0 bottom-0 w-83 h-56 hidden lg:block"
          alt=""
        />
        </picture>
        
      </section>
    )
}