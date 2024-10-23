import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import './components/components.css'
import style1 from './assets/style1.jpg'
import style2 from './assets/style2.jpg'
import style3 from './assets/style3.jpg'
import style4 from './assets/style4.jpg'
import style5 from './assets/style5.jpg'
import style6 from './assets/style6.jpg'
import style7 from './assets/style7.jpg'
import style8 from './assets/style8.jpg'
import style9 from './assets/style9.jpg'
import style10 from './assets/style10.jpg'

function App() {
  const [msg, setmsg] = useState("")
  const [Ratio, setRatio] = useState("Ratio_1")
  const [Style, setStyle] = useState("Style_1")
  const [Imageurl, setImageurl] = useState("/")

  const imageGenerate = async () => {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_URL,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: msg,
          n: 1,
          size: "512x512",
        })
      }
    );
    let data = await response.json();
    console.log(data);
  }


  const handlechange = (e) => {
    setmsg(e.target.value);
  }

  const cur_ratio = (e) => {
    setRatio(e.target.id)
  }

  const cur_style = (e) => {
    setStyle(e)
  }

  const Generate = (e) => {
    imageGenerate();
  }

  return (
    <>
      <div>
        <Navbar />

        <div className='main_box'>
          <div className=' box'>
            <div className='left_1'>
              {/* promopt */}
              <div className='heading'>Enter a prompt :</div>
              <div className=' h-[140px]'><textarea className='h-full w-full break-words outline-none resize-none overflow-y-auto bg-transparent border border-white text-white p-1' type="text" value={msg} onChange={handlechange} /></div>

              {/* select aspect ratio */}
              <div className='heading'> Select Aspect Ratio : </div>


              <div className='flex items-center justify-around h-28 border border-white rounded-lg max-[430px]:p-2'>
                <div id="Ratio_1" className='h-10 w-20 bg-gray-600 outline-offset-2 cursor-pointer' style={Ratio == "Ratio_1" ? { outline: "solid white" } : { outline: "none" }} onClick={cur_ratio}></div>
                <div id="Ratio_2" className='h-10 w-14 bg-gray-600 outline-offset-2 cursor-pointer' style={Ratio == "Ratio_2" ? { outline: "solid white" } : { outline: "none" }} onClick={cur_ratio}></div>
                <div id="Ratio_3" className='h-10 w-10 bg-gray-600 outline-offset-2 cursor-pointer' style={Ratio == "Ratio_3" ? { outline: "solid white" } : { outline: "none" }} onClick={cur_ratio}></div>
                <div id="Ratio_4" className='h-16 w-14 bg-gray-600 outline-offset-2 cursor-pointer' style={Ratio == "Ratio_4" ? { outline: "solid white" } : { outline: "none" }} onClick={cur_ratio}></div>
                <div id="Ratio_5" className='h-20 w-14 bg-gray-600 outline-offset-2 cursor-pointer' style={Ratio == "Ratio_5" ? { outline: "solid white" } : { outline: "none" }} onClick={cur_ratio}></div>
              </div>

              <div className='heading'>Select a Style :</div>
              <div className='flex flex-wrap justify-evenly gap-4 p-2 '>
                <div id='Style_1' className='style_box' style={Style == "Style_1" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_1") }} ><img src={style1} alt="" /></div>
                <div id='Style_2' className='style_box' style={Style == "Style_2" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_2") }}><img src={style2} alt="" /></div>
                <div id='Style_3' className='style_box' style={Style == "Style_3" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_3") }}><img src={style3} alt="" /></div>
                <div id='Style_4' className='style_box' style={Style == "Style_4" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_4") }}><img src={style4} alt="" /></div>
                <div id='Style_5' className='style_box' style={Style == "Style_5" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_5") }}><img src={style5} alt="" /></div>
                <div id='Style_6' className='style_box' style={Style == "Style_6" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_6") }}><img src={style6} alt="" /></div>
                <div id='Style_7' className='style_box' style={Style == "Style_7" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_7") }}><img src={style7} alt="" /></div>
                <div id='Style_8' className='style_box' style={Style == "Style_8" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_8") }}><img src={style8} alt="" /></div>
                <div id='Style_9' className='style_box' style={Style == "Style_9" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_9") }}><img src={style9} alt="" /></div>
                <div id='Style_10' className='style_box' style={Style == "Style_10" ? { outline: "solid white" } : { outline: "none" }} onClick={() => { cur_style("Style_10") }}><img src={style10} alt="" /></div>
              </div>

              <div className='w-full flex items-center justify-center m-2'>
                <button type="button" class=" cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-2xl w-[200px] rounded-full px-5 py-2.5 text-center me-2 mb-2" disabled={msg.length < 10} onClick={Generate} >Genrate </button>
              </div>

            </div>
            <div id='r1' className='right_1'  >
              <div className='flex flex-col items-center justify-center gap-2 border border-white rounded-lg h-[90%] w-[90%]'>
                {Imageurl == "/" && <div className='flex flex-col items-center justify-center gap-2  text-white text-7xl font-semibold'>
                  <div>GENERATE</div>
                  <div>AI</div>
                  <div>IMAGE</div>
                </div>}

                {Imageurl != "/" &&
                  <img className='object-cover overflow-hidden' src={style1} alt="" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App