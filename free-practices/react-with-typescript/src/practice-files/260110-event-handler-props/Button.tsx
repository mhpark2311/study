export default function Button({
  handleClick,
  children,
  message,
}: {
  handleClick: (message: string) => void;
  children: React.ReactNode;
  message: string;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
