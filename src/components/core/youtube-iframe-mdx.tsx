export default function YouTube({ id }: { id: string }) {
  return (
    <div className="relative overflow-hidden w-full mt-5">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="w-full h-[45vh] rounded-md shadow-sm"
      />
    </div>
  );
}
