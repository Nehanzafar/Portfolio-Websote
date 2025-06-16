import { Construction } from "lucide-react";

const RouteUnderConstruction = () => {
  return (
    <div className="flex h-screen flex-col justify-start items-center">
      <Construction size={128} className="mt-20" />
      <p className="text-white font-semibold">
        This page is under construction!
      </p>
    </div>
  );
};

export default RouteUnderConstruction;
