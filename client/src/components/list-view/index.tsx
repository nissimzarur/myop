function ListView({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`w-full flex flex-col gap-2 items-center ${className}`}>
      {children}
    </div>
  );
}

export default ListView;
