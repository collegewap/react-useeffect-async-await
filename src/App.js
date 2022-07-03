import { useCallback, useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState();

  const fetchCatImage = useCallback(async () => {
    const response = await fetch("https://aws.random.cat/meow");
    const data = await response.json();
    setImageUrl(data.file);
  }, []);

  useEffect(() => {
    fetchCatImage();
  }, [fetchCatImage]);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Random Cat" style={{ width: "300px" }} />
      )}
    </div>
  );
}

export default App;
