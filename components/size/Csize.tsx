interface Props {
    coatSize: boolean,
    setcoatSize: (coatSize: boolean) => void,
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
      getwaistaround: number, 
      setgetwaistaround: (getwaistaround: number) => void,
      getBeltFit: number, 
      setgetBeltFit: (getBeltFit: number) => void,
      gethipLine: number, 
      setgethipLine: (gethipLine: number) => void,
      gethip: number, 
      setgethip: (gethip: number) => void,
  }
  
  
  
  const Csize = ({ coatSize, setcoatSize, gethip, setgethip, gethipLine, setgethipLine, getBeltFit, setgetBeltFit, getwaistaround, setgetwaistaround, AiOutlineLeft, FcCheckmark, MdOutlineKeyboardBackspace, nosizewarn, setnosizewarn, Warnmine, setWarnmine, getpant, setgetpant, pant, setpant, pocket, setpocket ,collar, setcollar, sleeve, setsleeve, setgetshoulder, getshoulder, setgetsleeve, getsleeve, setgetcollar, getcollar, setgetchest, getchest, setgetlast, getlast, warn, setwarn, warney, setwarney, getstok, setgetstok, sSkirt, setsSkirt, ReactPlayer, sizemPage, setsizemPage, toSizeSelect, settoSizeSelect }: Props) => {
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
    return (
    <>
    <div className="Size-wrapper">
      <div className="size-Cw">
      <div className="Size-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => {setcoatSize(false); setWarnmine(false); settoSizeSelect('small')}}>
          <AiOutlineLeft />
          <span className="heading">Cancel Measurement</span>
        </button>

        {sizemPage === 'p1' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/tYiY-HcE56c' className='vid' muted={true} loop={true} controls={false} /></div>
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
            <div className='vid-holder'><ReactPlayer url='https://youtu.be/MokRSc2X1CU' className='vid' muted={true} loop={true} controls={false} /></div>
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
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/Ro3vd61ph8g' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                <div>
                <div className='fill-prob'>Chest <input type="number" className='size-definer' id="getchest" name="getchest" onChange={handleChestchange} value={getchest}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p2'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getchest < 1){ setwarn(true)}else if(getchest >= 1){ setsizemPage('p4'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p4' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/kxtjFc8H6lE' className='vid' muted={true} loop={true} controls={false} /></div>
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
        ) 
        :
        (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='size-text-holder'>
                <div>
                  <div>Lenght : {getstok}</div>
                  <div>Shoulder : {getshoulder}</div>
                  <div>Chest : {getchest}</div>
                  <div>Waist : {getcollar}</div>
                </div>
              </div>
              <div className='vid-holder'></div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p4')}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext save-prob'><p className='gonext-p save-prob' onClick={() => {setcoatSize(false); settoSizeSelect('mine'); setnosizewarn(false); setnosizewarn(false); setWarnmine(false);}}>Save</p></div>
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
  
  export default Csize 
     
