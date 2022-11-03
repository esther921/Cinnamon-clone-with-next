export default function Small_image_word_fixer({src, heading1, text1, text2, text3, heading2}) {
    return (
      <>
      <div className="flex flex-col gap-4 hover:text-blue-700">
        <picture>
            <img src={src} alt=""/>
        </picture>
        <h1 className="text-xs font-bold text">
            {heading1}
        </h1>
        <p className="flex gap-2.5 text-gray-500">
            {text1}
            <span className="bg-amber-400 text-5xl rounded-full w-1.5 h-1.5 mt-2"></span>
            {text2}
            <span className="bg-amber-400 text-5xl rounded-full w-1.5 h-1.5 mt-2"></span>
            {text3}
        </p>
        <h1 className="text-xl font-bold">
            {heading2}
        </h1>
      </div>
        
      </>
    )
  }