import Navbar from "../shared/navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mt-24 w-[1280px] mx-auto">{children}</main>
    </>
  );
};

export default Container;
