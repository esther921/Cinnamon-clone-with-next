export default function Services_fixer({src, heading, paragraph,mr}) {
    return (
        <>
            <div className={"flex flex-col gap-6 px-8 "} >
            <picture>
                <img className="w-12" src={src} alt=""/>
            </picture>
            <h1 className={"text-white text-2xl font-bold"} >
                {heading}
            </h1>
            <p className={"text-base text-gray-300 " + mr}>
                {paragraph}
            </p>
            </div>
            

        </>
    )
}