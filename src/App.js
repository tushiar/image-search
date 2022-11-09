import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageContainer from "./components/ImageContainer";
import axios from "axios";
import { ACCESS_KEY, BASE_URL } from "./config";
import { useRef, useState } from "react";
function App() {
  const [images, setImages] = useState([]);
  const [pgNo, setPgNo] = useState(1);
  const [searchElem, setSearchElem] = useState("");
  const searchKey = useRef(null);

  const fetchImages = async (pageNo) => {
    const searchVal = searchKey.current.value;
    setSearchElem(searchVal);
    const url =
      BASE_URL +
      "/?client_id=" +
      ACCESS_KEY +
      "&query=" +
      searchVal +
      "&page=" +
      pageNo +
      "&per_page=12";
    const response = await axios.get(url);
    if (response.status == 200) {
      if (pageNo == 1) {
        return setImages(response.data.results);
      } else {
        return setImages(images.concat(response.data.results));
      }
    }
    return setImages([]);
  };
  const onSearchHandler = async () => {
    const searchVal = searchKey.current.value;
    if (searchVal !== searchElem) {
      setImages([]);
      await fetchImages(1);
    }
  };
  return (
    <div>
      <div className="header">
        <div className="app-header">Image Search</div>
        <SearchBar ref={searchKey} onSearchHandler={onSearchHandler} />
      </div>
      <div className="App">
        <ImageContainer
          images={images}
          pgNo={pgNo}
          fetchImages={fetchImages}
          setPgNo={setPgNo}
        />
      </div>
    </div>
  );
}

export default App;
