import {useState} from 'react';
import axios from 'axios';

function App() {


  const [img, setImg] = useState(null);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vmvrpojg');

    const cloudinaryName = 'hyderly'

    try{
      axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryName}/upload`, formData)
      .then((response) => setImg(response.data.secure_url));
      
    }catch(err){
      console.log(err);
    }

  }


  return (
    <div className="App">
      <input type="file" onChange={uploadFile}/>
      {
        img && <img src={img} alt="img" style={{width: "200px"}}/>
      }
      
    </div>
  );
}

export default App;
