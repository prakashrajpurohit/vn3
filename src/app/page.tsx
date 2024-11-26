import Navbar from './Navbar/page'
import First from './component/firstvideo/page'
import Aboutsec from './component/Aboutsection/page'
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Navbar/>
      </div>
      <div className="w-full mx-auto overflow-hidden">
      <First/>
      </div>
      <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Aboutsec/>
      </div>
    </>
  );
}
