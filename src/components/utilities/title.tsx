type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return (
    <h1 className="text-5xl my-6 text-base-content font-sans font-semibold">
      {children}
    </h1>
  );
}
