import { useState, useEffect } from "react";
import "./user.css";
import Profile from "@/img/userProfile.svg";
import Edit from "@/img/userEditIcon.png";
import Edit2 from "@/img/userEditIcon2.svg";

export default function User() {
  const [profileImage, setProfileImage] = useState(Profile);
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState({});
  const id = localStorage.getItem('userId');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch(`http://localhost:5001/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Hubo un error:" + error.message);
      });
  };

  const formatDateForInput = (isoDate) => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    return date.toISOString().split('T')[0]; // This will return yyyy-mm-dd
  };

  const getGenderValue = (gender) => {
    if (!gender) return 'otro';
    const lowerGender = gender.toLowerCase();
    if (lowerGender.startsWith('m')) return 'masculino';
    if (lowerGender.startsWith('f')) return 'femenino';
    return 'otro';
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        setProfileImage(e.target.result);
        
        // Upload the image to the server
        const formData = new FormData();
        formData.append('image', file);
        
        try {
          const response = await fetch(`http://localhost:5001/api/user/${id}/image`, {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            fetchUserData(); // Refresh user data to get the new image URL
          } else {
            console.error('Failed to upload image');
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleEditClick = (field) => {
    setIsEditing(prev => ({ ...prev, [field]: true }));
  };

  const handleSave = async (field) => {
    setIsEditing(prev => ({ ...prev, [field]: false }));
    
    try {
      const response = await fetch(`http://localhost:5001/api/user/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: data[field] }),
      });
      
      if (response.ok) {
        fetchUserData(); // Refresh user data
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="userAll">
      <div className="userHeader">
        <h1>Foto de perfil</h1>
        <div className="userProfile">
          <div className="container-img-userprof">
            <img src={data?.urlPicture || profileImage} alt="user" className="img-profile" />
          </div>
          <img
            src={Edit}
            alt="Subir imagen"
            className="uploadImage"
            onClick={handleImageClick}
          />
        </div>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <form className="userMiddle">
        <div className="userMiddle_Container">
          <div className="userMiddle_Input1">
            <h1>Usuario: </h1>
            <input
              type="text"
              id="userInput"
              value={data?.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              readOnly={!isEditing.name}
            />
            {isEditing.name ? (
              <button onClick={() => handleSave('name')}>Guardar</button>
            ) : (
              <a className="userMiddle_A" onClick={() => handleEditClick('name')}>
                <img src={Edit2} alt="Edit2" />
              </a>
            )}
          </div>
          <div className="userMiddle_Input2">
            <h1>Correo: </h1>
            <input
              type="text"
              id="userInput2"
              value={data?.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              readOnly={!isEditing.email}
            />
            {isEditing.email ? (
              <button onClick={() => handleSave('email')}>Guardar</button>
            ) : (
              <a className="userMiddle_A2" onClick={() => handleEditClick('email')}>
                <img src={Edit2} alt="Edit2" />
              </a>
            )}
          </div>
          <div className="userMiddle_Input3">
            <h1>Celular: </h1>
            <select id="options" name="celular" defaultValue={'+57'}>
              <option value="opcion1">+1</option>
              <option value="opcion2">+20</option>
              <option value="opcion3">+27</option>
              <option value="opcion4">+30</option>
              <option value="opcion5">+31</option>
              <option value="opcion6">+32</option>
              <option value="opcion7">+33</option>
              <option value="opcion8">+34</option>
              <option value="opcion9">+36</option>
              <option value="opcion10">+39</option>
              <option value="opcion11">+40</option>
              <option value="opcion12">+41</option>
              <option value="opcion13">+43</option>
              <option value="opcion14">+44</option>
              <option value="opcion15">+45</option>
              <option value="opcion16">+46</option>
              <option value="opcion17">+47</option>
              <option value="opcion18">+48</option>
              <option value="opcion19">+49</option>
              <option value="opcion20">+52</option>
              <option value="opcion21">+54</option>
              <option value="opcion22">+55</option>
              <option value="opcion23">+56</option>
              <option value="opcion24">+57</option>
              <option value="opcion25">+58</option>
              <option value="opcion26">+60</option>
              <option value="opcion27">+61</option>
              <option value="opcion28">+62</option>
              <option value="opcion29">+63</option>
              <option value="opcion30">+64</option>
              <option value="opcion31">+66</option>
              <option value="opcion32">+81</option>
              <option value="opcion33">+82</option>
              <option value="opcion34">+84</option>
              <option value="opcion35">+86</option>
              <option value="opcion36">+90</option>
              <option value="opcion37">+91</option>
              <option value="opcion38">+92</option>
              <option value="opcion39">+93</option>
              <option value="opcion40">+94</option>
              <option value="opcion41">+95</option>
              <option value="opcion42">+98</option>
              <option value="opcion43">+212</option>
              <option value="opcion44">+213</option>
              <option value="opcion45">+216</option>
              <option value="opcion46">+218</option>
              <option value="opcion47">+220</option>
              <option value="opcion48">+221</option>
              <option value="opcion49">+222</option>
              <option value="opcion50">+223</option>
              <option value="opcion51">+224</option>
              <option value="opcion52">+225</option>
              <option value="opcion53">+226</option>
              <option value="opcion54">+227</option>
              <option value="opcion55">+228</option>
              <option value="opcion56">+229</option>
              <option value="opcion57">+230</option>
              <option value="opcion58">+231</option>
              <option value="opcion59">+232</option>
              <option value="opcion60">+233</option>
              <option value="opcion61">+234</option>
              <option value="opcion62">+235</option>
              <option value="opcion63">+236</option>
              <option value="opcion64">+237</option>
              <option value="opcion65">+238</option>
              <option value="opcion66">+239</option>
              <option value="opcion67">+240</option>
              <option value="opcion68">+241</option>
              <option value="opcion69">+242</option>
              <option value="opcion70">+243</option>
              <option value="opcion71">+244</option>
              <option value="opcion72">+245</option>
              <option value="opcion73">+246</option>
              <option value="opcion74">+248</option>
              <option value="opcion75">+249</option>
              <option value="opcion76">+250</option>
              <option value="opcion77">+251</option>
              <option value="opcion78">+252</option>
              <option value="opcion79">+253</option>
              <option value="opcion80">+254</option>
              <option value="opcion81">+255</option>
              <option value="opcion82">+256</option>
              <option value="opcion83">+257</option>
              <option value="opcion84">+258</option>
              <option value="opcion85">+260</option>
              <option value="opcion86">+261</option>
              <option value="opcion87">+262</option>
              <option value="opcion88">+263</option>
              <option value="opcion89">+264</option>
              <option value="opcion90">+265</option>
              <option value="opcion91">+266</option>
              <option value="opcion92">+267</option>
              <option value="opcion93">+268</option>
              <option value="opcion94">+269</option>
              <option value="opcion95">+290</option>
              <option value="opcion96">+291</option>
              <option value="opcion97">+297</option>
              <option value="opcion98">+298</option>
              <option value="opcion99">+299</option>
              <option value="opcion100">+350</option>
              <option value="opcion101">+351</option>
              <option value="opcion102">+352</option>
              <option value="opcion103">+353</option>
              <option value="opcion104">+354</option>
              <option value="opcion105">+355</option>
              <option value="opcion106">+356</option>
              <option value="opcion107">+357</option>
              <option value="opcion108">+358</option>
              <option value="opcion109">+359</option>
              <option value="opcion110">+370</option>
              <option value="opcion111">+371</option>
              <option value="opcion112">+372</option>
              <option value="opcion113">+373</option>
              <option value="opcion114">+374</option>
              <option value="opcion115">+375</option>
              <option value="opcion116">+376</option>
              <option value="opcion117">+377</option>
              <option value="opcion118">+378</option>
              <option value="opcion119">+380</option>
              <option value="opcion120">+381</option>
              <option value="opcion121">+382</option>
              <option value="opcion122">+383</option>
              <option value="opcion123">+385</option>
              <option value="opcion124">+386</option>
              <option value="opcion125">+387</option>
              <option value="opcion126">+389</option>
              <option value="opcion127">+420</option>
              <option value="opcion128">+421</option>
              <option value="opcion129">+423</option>
              <option value="opcion130">+500</option>
              <option value="opcion131">+501</option>
              <option value="opcion132">+502</option>
              <option value="opcion133">+503</option>
              <option value="opcion134">+504</option>
              <option value="opcion135">+505</option>
              <option value="opcion136">+506</option>
              <option value="opcion137">+507</option>
              <option value="opcion138">+508</option>
              <option value="opcion139">+509</option>
              <option value="opcion140">+590</option>
              <option value="opcion141">+591</option>
              <option value="opcion142">+592</option>
              <option value="opcion143">+593</option>
              <option value="opcion144">+594</option>
              <option value="opcion145">+595</option>
              <option value="opcion146">+596</option>
              <option value="opcion147">+597</option>
              <option value="opcion148">+598</option>
              <option value="opcion149">+599</option>
              <option value="opcion150">+670</option>
              <option value="opcion151">+672</option>
              <option value="opcion152">+673</option>
              <option value="opcion153">+674</option>
              <option value="opcion154">+675</option>
              <option value="opcion155">+676</option>
              <option value="opcion156">+677</option>
              <option value="opcion157">+678</option>
              <option value="opcion158">+679</option>
              <option value="opcion159">+680</option>
              <option value="opcion160">+681</option>
              <option value="opcion161">+682</option>
              <option value="opcion162">+683</option>
              <option value="opcion163">+685</option>
              <option value="opcion164">+686</option>
              <option value="opcion165">+687</option>
              <option value="opcion166">+688</option>
              <option value="opcion167">+689</option>
              <option value="opcion168">+690</option>
              <option value="opcion169">+691</option>
            </select>
            <input
              type="text"
              id="userInput3"
              value={data?.numberPhone || ''}
              onChange={(e) => handleInputChange('numberPhone', e.target.value)}
              readOnly={!isEditing.numberPhone}
            />
            {isEditing.numberPhone ? (
              <button onClick={() => handleSave('numberPhone')}>Guardar</button>
            ) : (
              <a className="userMiddle_A3" onClick={() => handleEditClick('numberPhone')}>
                <img src={Edit2} alt="Edit2" />
              </a>
            )}
          </div>
          <div className="userMiddle_Input4">
            <h1>Sexo: </h1>
            <select
              id="sexOptions"
              name="sexo"
              value={getGenderValue(data?.gender)}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              disabled={!isEditing.gender}
            >
              <option value="femenino">F</option>
              <option value="masculino">M</option>
              <option value="otro">Otro</option>
            </select>
            {isEditing.gender ? (
              <button onClick={() => handleSave('gender')}>Guardar</button>
            ) : (
              <a className="userMiddle_A41" onClick={() => handleEditClick('gender')}>
                <img src={Edit2} alt="Edit2" />
              </a>
            )}
            <h2>Fecha de nacimiento: </h2>
            <input
              type="date"
              id="userInput4"
              value={formatDateForInput(data?.birthDate)}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              readOnly={!isEditing.birthDate}
            />
            {isEditing.birthDate ? (
              <button onClick={() => handleSave('birthDate')}>Guardar</button>
            ) : (
              <a className="userMiddle_A4" onClick={() => handleEditClick('birthDate')}>
                <img src={Edit2} alt="Edit2" />
              </a>
            )}
          </div>
        </div>
      </form>
      <div className="userBottom4">
        <div className="userBottom4_center">
          <h1>Métodos de pago</h1>
          <input type="text" placeholder="Añadir método de pago" />
          <input type="text" placeholder="Añadir método de pago" />
        </div>
      </div>
    </div>
  );
}