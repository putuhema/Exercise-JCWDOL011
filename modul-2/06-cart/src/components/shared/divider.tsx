const Divider = ({ h = "h-[4px]", m = "my-2" }: { h?: string; m?: string }) => {
  return <div className={`bg-gray-100 ${h} ${m} w-full`}></div>;
};

export default Divider;
