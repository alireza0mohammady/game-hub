import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "004a72a519c249789309fa34eb5701d1",
  },
});
