import Button from "./button"
const internationalTeams = [
    'Product design',
    'Project management',
    'Web development',
    'Human resources',
    'Mobile development',
    'Sales',
    'Quality assurance',
    'Fluffy friends',
    'Marketing',
  ];
export default function Who_we_are() {
    return(
        <section className='bg-[#f6f7f7]'>
          <div className='max-w-[1168px] mx-auto px-6 py-24 lg:py-52'>
            <div className='flex flex-col gap-10 lg:gap-14'>
              <div className='max-w-[448px] relative flex flex-col gap-8'>
                <h1 className="text-5xl font-bold">Who we are</h1>
                <p>Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.</p>
              </div>
              <div className='hidden lg:grid grid-cols-2 max-w-[784px] gap-y-8'>
                {internationalTeams.map((teamName, index) => (
                  <h3 className='font-bold text-xl' key={index}>
                    {teamName}
                  </h3>
                ))}
              </div>
              <div className='lg:absolute right-0 lg:-mt-16 lg:-mr-52'>
                <picture>
                  <img
                    className='w-[60%]'
                    src='./Images/who-we-are.webp'
                    alt=''
                  />
                </picture>
              </div>
              <div className=''>
                <Button text={'Read about us'}/>
              </div>
            </div>
          </div>
        </section>
        )}