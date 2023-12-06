export default function ImageMdx({ id }: { id: string }) {
  return (
    <div className="relative overflow-auto w-full mt-5 p-5 bg-white rounded-md shadow-sm h-[45vh]">
      <img src={`${id}`} className="w-full object-cover" />
    </div>
  );
}
