import { SliderComponent } from "./ui/Slider";

export const HistorySection = () => {
  return (
    <section
      className="bg-peak bg-cover h-screen bg-no-repeat relative"
      id="history"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-2/3 relative">
          <h4 className="font-Oswald text-[8.5rem] text-[#677896] font-black">
            01.
          </h4>
          <span className="text-[2rem] font-black text-[#414f6b] absolute left-[8.3rem] top-24">
            HISTORY
          </span>
          <p className="sm:ml-24 text-justify">
         <h1>
         WHAT DOES FREIGHT DISPATCHING INCLUDE?
         </h1>
         <ul>
         1. Obtain the best, highest-paid load.
         </ul>
         <ul>
         2. Run credit for all Brokers and Shippers.
         </ul>
         <ul>
         3. Carrier set up.
         </ul>
         <ul>
         4. Send you copies of all rate confirmations.
         </ul>
         <ul>
         5. Keep track of all your loads’ miles.
         </ul>
         <ul>
         6. Road Assistance and Direction.
         </ul>
         <ul>
         7. Weekly Reports.
         </ul>
        
          </p>
        </div>
      </div>

      <SliderComponent />
    </section>
  );
};
