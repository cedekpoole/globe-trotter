import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const coordinates = {
    lat: searchParams.get("lat") || 0,
    lng: searchParams.get("lng") || 0,
  };
  return (
    <main
      className="w-full lg:w-2/3 p-6"
      onClick={() => {
        navigate("form");
      }}
    >
      <h1 className="text-3xl font-bold mb-6">Main Content</h1>
      <h2>
        Position: {coordinates.lat}, {coordinates.lng}
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa.
      </p>
    </main>
  );
}

export default Map;
