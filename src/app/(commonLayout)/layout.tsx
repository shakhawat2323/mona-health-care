import Footer from "@/components/module/Footer/Footer";
import Navbar from "@/components/module/header/Navbar";

export default function layout({children}:{children:React.ReactNode}) {

  return (
    <div>
        <Navbar/>
     <main className="min-h-dvh">{children}</main>
      <Footer/>
    </div>
  );
}