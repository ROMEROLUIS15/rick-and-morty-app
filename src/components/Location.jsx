import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      
      <div>
        <img src="/imah.png" className="max-w-[900px] mx-auto block w-full" alt="" />
      </div>


      <form onSubmit={handleSubmit} className="flex justify-center border-green-600 border-4 max-w-[500px] mx-auto">
        <input
          placeholder="Type to search ..."
          name="idLocation"
          className="text-black text-center flex-1"
          type="number"
        />
        <button type="submit" className="flex items-center gap-3 bg-green-500 px-4 py-2 ">
          Search <IconSearch size={18} />
        </button>
      </form>

      {/* Local Information */}
      <section className="border-green-600 border-2 p-3 max-w-[900px] mx-auto mt-10">
        <h3 className="flex justify-center font-[poppins] max-w-[900px] mx-auto text-green-500 pb-4"><span>! Welcome to</span>{location?.name} ¡</h3>

        <ul className="flex justify-center items-center gap-10 text-slate-400 font-[poppins] mt-1">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  );
};

export default Location;
