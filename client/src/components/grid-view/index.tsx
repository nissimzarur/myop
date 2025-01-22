function GridView({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`grid grid-cols-3 text-center gap-5 ${className}`}>
      {children}
    </div>
  );
}

export default GridView;
