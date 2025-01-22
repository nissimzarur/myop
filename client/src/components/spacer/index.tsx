function Spacer({ size }: { size: "sm" | "md" | "lg" }) {
  const spaceSize = new Map();

  spaceSize.set("sm", "mt-5");
  spaceSize.set("md", "mt-10");
  spaceSize.set("lg", "mt-16");

  return <div className={spaceSize.get(size)} />;
}

export default Spacer;
