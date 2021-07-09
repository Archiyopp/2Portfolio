type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return (
    <h1 className="text-5xl font-bold my-6 text-base-content font-sans tracking-wide">
      {children}
    </h1>
  );
}
