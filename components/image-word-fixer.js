export default function Image_word_fixer({ src, text, paragraph }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <picture>
          <img className="max-w-[34.5rem]" src={src} alt="" />
        </picture>
        <div className="flex flex-col gap-4 hover:text-blue-700">
          <h1 className="flex gap-4 text-2xl font-bold ">
          <picture className="pt-1">
              <img src="/Images/location.svg" alt="" />
            </picture>
            {text}</h1>
          <p className="pl-8">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}
