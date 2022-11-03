export default function Header_paragraph({ heading, paragraph }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">
            {heading}
        </h1>
        <p className=" text-base text-zinc-400">
            {paragraph}
        </p>
      </div>
    </>
  );
}
