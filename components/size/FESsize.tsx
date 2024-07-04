interface Props {
  fesecSize: boolean,
  setfesecSize: (fesecSize: boolean) => void,
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
      getdotpoint: number, 
      setgetdotpoint: (getdotpoint: number) => void,
      getblouse: number, 
      setgetblouse: (getblouse: number) => void,
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
      getwaistaround: number, 
      setgetwaistaround: (getwaistaround: number) => void,
      getBeltFit: number, 
      setgetBeltFit: (getBeltFit: number) => void,
      gethipLine: number, 
      setgethipLine: (gethipLine: number) => void,
      gethip: number, 
      setgethip: (gethip: number) => void,
  }
  
  
  
  const FESsize = ({ fesecSize, setfesecSize, getblouse, setgetblouse, getdotpoint, setgetdotpoint, gethip, setgethip, gethipLine, setgethipLine, getBeltFit, setgetBeltFit, getwaistaround, setgetwaistaround, AiOutlineLeft, FcCheckmark, MdOutlineKeyboardBackspace, nosizewarn, setnosizewarn, Warnmine, setWarnmine, getpant, setgetpant, pant, setpant, pocket, setpocket ,collar, setcollar, sleeve, setsleeve, setgetshoulder, getshoulder, setgetsleeve, getsleeve, setgetcollar, getcollar, setgetchest, getchest, setgetlast, getlast, warn, setwarn, warney, setwarney, getstok, setgetstok, sSkirt, setsSkirt, ReactPlayer, sizemPage, setsizemPage, toSizeSelect, settoSizeSelect }: Props) => {
      const handleStokchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetstok(valueAsNumber);};
      const handleShoulderChange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetshoulder(valueAsNumber);};
      const handleSleevechange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetsleeve(valueAsNumber);};
      const handleCollarchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetcollar(valueAsNumber);};
      const handleChestchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetchest(valueAsNumber);};
      const handlegetlastchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetlast(valueAsNumber);};
      const handlePantchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetpant(valueAsNumber);};
      const handlewaistaroundchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetwaistaround(valueAsNumber);};
      const handleBeltFitchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetBeltFit(valueAsNumber);};
      const handlehipLinechange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgethipLine(valueAsNumber);};
      const handlehipchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgethip(valueAsNumber);};
      const handlegetdotpointchange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetdotpoint(valueAsNumber);};
      const handlegetblousechange = (event: React.ChangeEvent<HTMLInputElement>) => {const valueAsNumber: number = parseFloat(event.target.value); setgetblouse(valueAsNumber);};
    return (
    <>
        <div className="Size-wrapper">
      <div className="size-Cw">
      <div className="Size-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => {setfesecSize(false); setWarnmine(false); settoSizeSelect('nothing');}}>
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
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getstok < 1){ setwarn(true)}else if(getstok >= 1){ setsizemPage('p2'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
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
              <div className='goback'><p className='goback-p'  onClick={() => {setsizemPage('p2'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => { setsizemPage('p4'); setwarn(false) }}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
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
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p3'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getcollar < 1){ setwarn(true)}else if(getcollar >= 1){ setsizemPage('p5'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p5' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/Xwthxhmym0U' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Bust <input type="number" className='size-definer' id="getchest" name="getchest" onChange={handleChestchange} value={getchest}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p4'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getchest < 1){ setwarn(true)}else if(getchest >= 1){ setsizemPage('p6'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p6' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/JQtq592tGmE' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Pant length <input type="number" className='size-definer' id="getpant" name="getpant" onChange={handlePantchange} value={getpant}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p5'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => { setsizemPage('p7'); setwarn(false) }}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p7' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/O7KEZeqzkec' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Hip <input type="number" className='size-definer' id="gethip" name="gethip" onChange={handlehipchange} value={gethip}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p6'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(gethip < 1){ setwarn(true)}else if(gethip >= 1){ setsizemPage('p8'); setwarn(false)}else {"none"}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ): sizemPage === 'p8'? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/XENSOH_0gWA' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Blouse <input type="number" className='size-definer' id="getblouse" name="getblouse" onChange={handlegetblousechange} value={getblouse}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p7'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(getblouse < 1){ setwarn(true)}else if(getblouse >= 1){ setsizemPage('p9'); setwarn(false)}else {"none"}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ): sizemPage === 'p9' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/SmQTTaya6Os' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Dot Point <input type="number" className='size-definer' id="getdotpoint" name="getdotpoint" onChange={handlegetdotpointchange} value={getdotpoint}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p8'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(getdotpoint < 1){ setwarn(true)}else if(getdotpoint >= 1){ setsizemPage('p10'); setwarn(false)}else {"none"}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ):
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
                  <div>Hip : {gethip}</div>
                  <div>Blouse : {getblouse}</div>
                  <div>Dot Point : {getdotpoint}</div>
                </div>
              </div>
              <div className='vid-holder'></div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p9');}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext save-prob'><p className='gonext-p save-prob' onClick={() => {settoSizeSelect('mine'); setWarnmine(false); setfesecSize(false); setnosizewarn(false);}}>Save</p></div>
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
  
  export default FESsize 
  
