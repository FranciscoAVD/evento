export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center h-[500px] w-full px-4">
      <div className="h-10 w-full max-w-md bg-gray-700 animate-pulse rounded-md mb-8" />
      <div className="h-8 w-[70%] max-w-sm bg-gray-700 animate-pulse rounded-md mb-2"/>
      <div className="h-8 w-[50%] max-w-[18rem] bg-gray-700 animate-pulse rounded-md mb-2"/>
      <div className="h-8 w-[60%] max-w-xs bg-gray-700 animate-pulse rounded-md mb-2"/>
    </main>
  );
}
