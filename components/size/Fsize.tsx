interface Props {
    femaleSize: boolean,
    setfemaleSize: (femaleSize: boolean) => void,
    toSizeSelect: string, 
    settoSizeSelect: (toSizeSelect: string) => void,
    sizemPage: string,
    setsizemPage: (sizemPage: string) => void,
    ReactPlayer: any,
    AiOutlineLeft: any,
    FcCheckmark: any,
    MdOutlineKeyboardBackspace: any,
    sSkirt: string,
    setsSkirt: (sSkirt: string) => void,
    warn: boolean,
    setwarn: (warn: boolean) => void,
    warney: boolean, 
    setwarney: (warney: boolean) => void,
    getstok: number,
    setgetstok: (getstok: number) => void,
    getshoulder: number,
    setgetshoulder: (getshoulder: number) => void,
    getsleeve: number, 
    setgetsleeve: (getsleeve: number) => void,
    getcollar: number, 
    setgetcollar: (getcollar: number) => void,
    getchest: number,
    setgetchest: (getchest: number) => void,
    getlast: number, 
    setgetlast: (getlast: number) => void,
    getpant: number, 
    setgetpant: (getpant: number) => void,
    sleeve: string,
    setsleeve: (sleeve: string) => void,
    collar: string,
    setcollar: (collar: string) => void,
    pocket: string,
    setpocket:(pocket: string) => void,
    pant: string,
    setpant: (pant: string) => void,
    Warnmine: boolean,
    setWarnmine: (Warnmine: boolean) => void,
    nosizewarn: boolean,
    setnosizewarn: (nosizewarn: boolean) => void,
}



const Fsize = ({ AiOutlineLeft, FcCheckmark, MdOutlineKeyboardBackspace, nosizewarn, setnosizewarn, Warnmine, setWarnmine, getpant, setgetpant, pant, setpant, pocket, setpocket ,collar, setcollar, sleeve, setsleeve, setgetshoulder, getshoulder, setgetsleeve, getsleeve, setgetcollar, getcollar, setgetchest, getchest, setgetlast, getlast, warn, setwarn, warney, setwarney, getstok, setgetstok, sSkirt, setsSkirt, ReactPlayer, sizemPage, setsizemPage, femaleSize, setfemaleSize, toSizeSelect, settoSizeSelect }: Props) => {
    const handleStokchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetstok(valueAsNumber);};
    const handleShoulderChange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetshoulder(valueAsNumber);};
    const handleSleevechange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetsleeve(valueAsNumber);};
    const handleCollarchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetcollar(valueAsNumber);};
    const handleChestchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetchest(valueAsNumber);};
    const handlegetlastchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetlast(valueAsNumber);};
    const handlePantchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetpant(valueAsNumber);};
  return (
  <>
  <div className="Size-wrapper">
      <div className="size-Cw">
      <div className="Size-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => {setfemaleSize(false); settoSizeSelect('medium'); setWarnmine(false); setwarn(false)}}>
          <AiOutlineLeft />
          <span className="heading">Cancel Measurement</span>
        </button>

        {sizemPage === 'p1' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/KfEWzc1bIVk' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='size-type-holder'>Size by Inches</div>
                  <div className='fill-prob'>Lenght <input type="number" className='size-definer' id="getstok" name="getstok" onChange={handleStokchange} value={getstok}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
                <div className='goback'><p className='goback-p'></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getstok < 1){ setwarn(true);}else if(getstok >= 1){setwarn(false); setsizemPage('p2'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p2' ? (
          <div className="Sizing-info">
            <div className='handreader'>
            <div className='vid-holder'><ReactPlayer url='https://youtu.be/RBCrczI8SsE' className='vid' muted={true} loop={true} controls={false} /></div>
            <div className='size-text-holder'>
            <div>
            <div className='fill-prob'>Shoulder <input type="number" className='size-definer' id="getshoulder" name="getshoulder" onChange={handleShoulderChange} value={getshoulder}/></div>
            {warn && <p className='warning'>Please fill the box</p>}
            </div>
            </div>
            <div className='gonextback'>
            <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p1'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
            <div className='gonext'><p className='gonext-p' onClick={() => {if(getshoulder < 1){ setwarn(true)}else if(getshoulder >= 1){ setsizemPage('p3'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
            </div>
            </div>
          </div>
        ) : sizemPage === 'p3' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/dNF__MjyjPk' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                <div>
                  <div className='fill-prob'>Sleeve <input type="number" className='size-definer' id="getsleeve" name="getsleeve" onChange={handleSleevechange} value={getsleeve}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p'  onClick={() => {setsizemPage('p2'); setwarn(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getsleeve < 1){ setwarn(true);}else if(getsleeve >= 1){setsizemPage('p4'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p4' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/VAse1lVj19Y' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Waist <input type="number" className='size-definer' id="getcollar" name="getcollar" onChange={handleCollarchange} value={getcollar}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Collar-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p3'); setwarn(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getcollar < 1){ setwarn(true);}else if(getcollar >= 1){setsizemPage('p5'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>

          // p5 not done yet do it
        ) : sizemPage === 'p5' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/Xwthxhmym0U' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Bust <input type="number" className='size-definer' id="getchest" name="getchest" onChange={handleChestchange} value={getchest}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Pocket-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
                <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p4'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getchest < 1){ setwarn(true); setwarney(false);}else if(getchest >= 1){setwarney(false); setsizemPage('p6'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p6' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/fVRVv1DtZIk' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Pant length <input type="number" className='size-definer' id="getpant" name="getpant" onChange={handlePantchange} value={getpant}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p5'); setwarn(false); setwarney(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(getpant < 1){ setwarn(true); setwarney(false);}else if(getpant >= 1){setwarney(false); setsizemPage('p7'); setwarn(false)}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) :
        (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='size-text-holder'>
                <div>
                  <div>Lenght : {getstok}</div>
                  <div>Shoulder : {getshoulder}</div>
                  <div>Sleeve : {getsleeve}</div>
                  <div>Waist : {getcollar}</div>
                  <div>Bust : {getchest}</div>
                  <div>Pant length : {getpant}</div>
                </div>
              </div>
              <div className='vid-holder'></div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p6');}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext save-prob'><p className='gonext-p save-prob' onClick={() => {setfemaleSize(false); settoSizeSelect('mine'); setWarnmine(false); setnosizewarn(false)}}>Save</p></div>
              </div>
            </div>
          </div>
          
        )}
      </div>    
      </div>
    </div>
  </>
)
}

export default Fsize 
 
