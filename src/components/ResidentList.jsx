import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  
  
  useEffect(() => {
    setCurrentPage(1)
  }, [residents])
  


  return (
    <section>
      <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10 my-10">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>

      {/* Paginacion */}
      <ul className="text-lg flex gap-20 justify-center flex-wrap pb-10 max-w-[1000px] mx-auto">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`text-white p-2 ${
                page === currentPage && "bg-slate-800"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentList;
