import Artistecomponent from "@/components/Artistecomponent";
import Navbar from "@/components/Navbar";
import Sidecomponent from "@/components/Sidecomponent";


export default function Home() {
  return (
    <>
    <Navbar/>
    <div  className="grid w-full  mt-18 shadow lg:grid-cols-12 bg-[#000000]">
<div className="lg:col-span-3">
<Sidecomponent/>
</div>
<div className="lg:col-span-9">
<Artistecomponent/>
</div>
    </div>
    </>
  );
}
