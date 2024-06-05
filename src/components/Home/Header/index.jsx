import mainCover from "@/assets/img/maincover.png";

function Header() {
  return (
    <section className="h-auto relative">
      <img src={mainCover} alt="Sea Picture" className="w-full h-100" />
      <header className="w-full absolute top-[25%] flex-col drop-shadow-md mt-20 font-fjalla">
        <h1 className="flex justify-center items-center text-9xl text-white mb-12 font-medium antialiased tracking-wide h-5/6">Yara
        <span className=" font-medium text-orange-500 antialiased">App</span> 
        </h1>
        <p className="text-center text-indigo-50 text-3xl font-roboto font-normal tracking-wide drop">
          Tecnologia e Ancestralidade unidas pela proteção marinha.
        </p>
      </header>
    </section>
  );
}

export default Header;
