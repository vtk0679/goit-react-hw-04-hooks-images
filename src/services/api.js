import axios from "axios";
import { toast } from "react-toastify";

export default function getImages(searchQuery, page) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=22945587-13dcce98a35cac559e6949163&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((resp) => {
      const data = resp.data.hits;
      if (data?.length === 0) {
        toast("Уточните критерии поиска!");
        return;
      }
      return data;
    })
    .catch((error) => {
      toast(error);
    });
}
