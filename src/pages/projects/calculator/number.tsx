type Props = {
  children: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};
export default function Number({ children, setValue }: Props) {
  return (
    <button
      className="btn btn-accent text-2xl"
      onClick={() => setValue((value: string) => value + children.toString())}
    >
      {children}
    </button>
  );
}
