type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return <main className="p-4">{children}</main>;
}
