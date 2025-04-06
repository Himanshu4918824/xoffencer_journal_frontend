import axios from "axios";

const serverURL = 'http://localhost:8000'

const currentDate = () => {
      let d = new Date();
      let cd = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let ct = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      return cd + " " + ct;
}

const createdDate = (date) => {
      let d = new Date(date);
      let cd = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let ct = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      return cd + " " + ct;
}

const postData = async (url, body) => {
      try {
            let response = await axios.post(`${serverURL}/${url}`, body)
            let result = response.data;
            return result;
      }
      catch (e) {
            return e;
      }

}

const getData = async (url) => {
      if (url === null) {
         
            return null; // Prevent the request
      }

      try {
            let response = await axios.get(`${serverURL}/${url}`);
            return response.data;
      } catch (e) {
            console.error("Fetch error:", e);
            return e.response ? e.response.data : "Unknown error";
      }

}
export { postData, serverURL, currentDate, getData, createdDate }