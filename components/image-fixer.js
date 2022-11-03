import Image_zoomer from "./image-zoomer";

export default function Image_fixer({

  bg,
  src,
  text1,
  text2,
  text3,
  heading,
  pl,
  paragraph,
}) {
  return (
    <>
      <div className="text-gray-500 pt-40 pl-16 flex flex-col gap-10 ">
        <div className="pr-16">
        <Image_zoomer bg={bg} src={src} />
        </div>
        
        <div className="flex gap-12 text-sm ">
          <p className="text-xs font-bold">{text1}</p>
          <p className="text-xs font-bold">{text2}</p>
          <p className={"text-xs font-bold "}>{text3}</p>
        </div>
        <h1 className={"text-5xl text-zinc-800 font-bold " + pl}>{heading} </h1>
        <p className={"text-gray-600 pr-[28rem]"}>{paragraph}</p>
      </div>
    </>
  );
}
