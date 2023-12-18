import cn from "@/type/clsxm";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-secondary bg-opacity-20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
