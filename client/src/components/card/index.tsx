
function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 bg-green-200 border rounded-xl hover:scale-105 ${className}`}>{children}</div>;
}

export default Card;
