export default function Image_zoomer({ bg,src}) {
    return (
        <>
            <div className={"overflow-hidden " + bg}>
                <picture className="">
                    <img className="hover:scale-105 transition duration-700 ease-in-out" src={src} alt=""/>
                </picture>
            </div>
        </>
    )
}