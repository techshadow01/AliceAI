import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import './components/BubblyButton.css'
import './components/components.css'
import defaultbg from './assets/defaultbg.svg'
import load from './assets/load.gif'
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
  const [Ratio, setRatio] = useState("Ratio_3")
  const [Style, setStyle] = useState("Style_1")
  const [Imageurl, setImageurl] = useState("/")

  const imgstyle = useRef("")

  const animateButton = (e) => {
    e.preventDefault();

    // Reset animation
    e.target.classList.remove('animate');

    // Add animation class
    e.target.classList.add('animate');
    setTimeout(() => {
      e.target.classList.remove('animate');
    }, 700);
  };


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
    animateButton(e)
    setImageurl(load)

    if (Style === "Style_1") { imgstyle.current = ""; }
    else if (Style === "Style_2") { imgstyle.current = "in a cyberpunk theme in 400x400 pixels"; }
    else if (Style === "Style_3") { imgstyle.current = "in a old drawing and vintage theme"; }
    else if (Style === "Style_4") { imgstyle.current = "in a Renaissance Painting theme"; }
    else if (Style === "Style_5") { imgstyle.current = "in a abstract theme"; }
    else if (Style === "Style_6") { imgstyle.current = "in a origami theme"; }
    else if (Style === "Style_7") { imgstyle.current = "in a graffiti theme"; }
    else if (Style === "Style_8") { imgstyle.current = "in a anime theme"; }
    else if (Style === "Style_9") { imgstyle.current = "in a pop art theme"; }
    else if (Style === "Style_10") { imgstyle.current = "in a manga panel theme"; }

    const Image1 = "https://image.pollinations.ai/prompt/" + msg + imgstyle.current
    setTimeout(() => {
      setImageurl(Image1)
    }, 5000);
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
              <div className=' h-[140px]'><textarea className='h-full w-full break-words outline-none resize-none overflow-y-auto bg-transparent border border-white text-white p-1' type="text" value={msg} placeholder='Type here' onChange={handlechange} /></div>

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

              <div className='text-center'>
                <button
                  className="bubbly-button cursor-pointer text-white bg-[#B11372] focus:outline-none text-2xl w-[200px] rounded-full px-5 py-2.5 text-center me-2 mb-2 " disabled={((msg.trim()).length < 3)}
                  onClick={Generate}
                >
                  Generate
                </button>
              </div>
            </div>
            <div id='r1' className='right_1'  >
              <div className='flex flex-col items-center justify-center gap-2 border border-white rounded-lg h-[90%] w-[90%] p-1'>
                {/* {Imageurl == "/" && <div className='flex flex-col items-center justify-center gap-2  text-[#B11372] text-7xl font-semibold'>
                  <div>GENERATE</div>
                  <div>AI</div>
                  <div>IMAGE</div>
                </div>} */}
                {Imageurl == "/" && <img className='object-cover overflow-hidden' src={defaultbg} alt="" />}

                {Imageurl === load && <img className='object-cover overflow-hidden' src={Imageurl} alt="" />}

                {(Imageurl != "/" && Imageurl != load && Ratio == "Ratio_1") && <img className='object-cover overflow-hidden aspect-[16/8] ' src={Imageurl} alt="" />}
                {(Imageurl != "/" && Imageurl != load && Ratio == "Ratio_2") && <img className='object-cover overflow-hidden  aspect-[16/10]' src={Imageurl} alt="" />}
                {(Imageurl != "/" && Imageurl != load && Ratio == "Ratio_3") && <img className='object-cover overflow-hidden  aspect-[1/1]' src={Imageurl} alt="" />}
                {(Imageurl != "/" && Imageurl != load && Ratio == "Ratio_4") && <img className='object-cover overflow-hidden  aspect-[3/4]' src={Imageurl} alt="" />}
                {(Imageurl != "/" && Imageurl != load && Ratio == "Ratio_5") && <img className='object-cover overflow-hidden  aspect-[9/16]' src={Imageurl} alt="" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App