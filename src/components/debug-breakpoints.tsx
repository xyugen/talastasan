const DebugBreakpoints = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-lg text-sm shadow-lg">
      <p className="block sm:hidden">Extra SM</p>
      <p className="hidden sm:block md:hidden">Small</p>
      <p className="hidden md:block lg:hidden">Medium</p>
      <p className="hidden lg:block hlg:hidden">Large</p>
      <p className="hidden hlg:block xl:hidden">H Large</p>
      <p className="hidden xl:block">Extra LG</p>
    </div>
  );
};

export default DebugBreakpoints;
