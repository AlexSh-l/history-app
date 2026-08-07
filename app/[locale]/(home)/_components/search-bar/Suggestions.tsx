export default function Suggestions({ children }: React.PropsWithChildren) {
  return (
    <div className="absolute w-full flex flex-col items-center gap-7 justify-items-start p-3 bg-white rounded-xl mt-2">
      {children}
    </div>
  );
}
