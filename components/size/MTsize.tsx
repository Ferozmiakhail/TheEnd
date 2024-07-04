interface Props {
  maleSizeT: boolean,
  setmaleSizeT: (maleSizeT: boolean) => void,
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
  
  
  
  const MTsize = ({ maleSizeT, setmaleSizeT, gethip, setgethip, gethipLine, setgethipLine, getBeltFit, setgetBeltFit, getwaistaround, setgetwaistaround, AiOutlineLeft, FcCheckmark, MdOutlineKeyboardBackspace, nosizewarn, setnosizewarn, Warnmine, setWarnmine, getpant, setgetpant, pant, setpant, pocket, setpocket ,collar, setcollar, sleeve, setsleeve, setgetshoulder, getshoulder, setgetsleeve, getsleeve, setgetcollar, getcollar, setgetchest, getchest, setgetlast, getlast, warn, setwarn, warney, setwarney, getstok, setgetstok, sSkirt, setsSkirt, ReactPlayer, sizemPage, setsizemPage, toSizeSelect, settoSizeSelect }: Props) => {
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
        onClick={() => {setmaleSizeT(false); setWarnmine(false); settoSizeSelect('small');}}>
          <AiOutlineLeft />
          <span className="heading">Cancel Measurement</span>
        </button>

        {sizemPage === 'p1' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/OkJFO-CtAok' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='size-type-holder'>Size by Inches</div>
                  <div className='skirt-types'>
                    <div><div className={sSkirt === 'skirt1' ? 'SkT1 skione SkT-click' : 'SkT1 skione'} onClick={() => {setsSkirt('skirt1');}}>{ sSkirt === 'skirt1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={sSkirt === 'skirt1' ? 'selected-size-color' : 'un-size-color'}>Cerved Cut</span></div>
                    <div><div className={sSkirt === 'skirt2' ? 'SkT2 skitwo SkT-click' : 'SkT2 skitwo'} onClick={() => {setsSkirt('skirt2');}}>{ sSkirt === 'skirt2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={sSkirt === 'skirt2' ? 'selected-size-color' : 'un-size-color'}>Squared Cut</span></div>
                  </div>
                  <div className='fill-prob'>Lenght <input type="number" className='size-definer' id="getstok" name="getstok" onChange={handleStokchange} value={getstok}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Skirt-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
                <div className='goback'><p className='goback-p'></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getstok < 1){ setwarn(true); setwarney(false);}else if(sSkirt !== 'skirt1' && sSkirt !== 'skirt2'){setwarney(true); setwarn(false);}else if(getstok >= 1){ setsizemPage('p2'); setwarn(false); setwarney(false);}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p2' ? (
          <div className="Sizing-info">
            <div className='handreader'>
            <div className='vid-holder'><ReactPlayer url='https://youtu.be/tVRdjbwT8_I' className='vid' muted={true} loop={true} controls={false} /></div>
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
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/P6jhZJTZLuo' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                <div>
                  <div className='fill-prob'>Sleeve <input type="number" className='size-definer' id="getsleeve" name="getsleeve" onChange={handleSleevechange} value={getsleeve}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p2'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getsleeve < 1){ setwarn(true)}else if(getsleeve >= 1){ setsizemPage('p4'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p4' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/c3oko6p20TE' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Collar <input type="number" className='size-definer' id="getcollar" name="getcollar" onChange={handleCollarchange} value={getcollar}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p'  onClick={() => {setsizemPage('p3'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getcollar < 1){ setwarn(true)}else if(getcollar >= 1){ setsizemPage('p5'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p5' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/7duQ1KhWsw8' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Chest <input type="number" className='size-definer' id="getchest" name="getchest" onChange={handleChestchange} value={getchest}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p4'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getchest < 1){ setwarn(true)}else if(getchest >= 1){ setsizemPage('p6'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
      
        ): sizemPage === 'p6' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/1U5gX8CwRCw' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='fill-prob'>Waist <input type="number" className='size-definer' id="getlast" name="getlast" onChange={handlegetlastchange} value={getlast}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p5'); setwarn(false)}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getlast < 1){ setwarn(true)}else if(getlast >= 1){ setsizemPage('p7'); setwarn(false)}else {"none"}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
      
        ): sizemPage === 'p7' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/fVRVv1DtZIk' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='collar-types'>
                    <div><div className={pant === 'pant1' ? 'CT1 pt-problem panione CT-click' : 'CT1 pt-problem panione'} onClick={() => {setpant('pant1');}}>{ pant === 'pant1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant1' ? 'selected-size-color' : 'un-size-color'}>Normal</span></div>
                    <div><div className={pant === 'pant2' ? 'CT2 pt-problem panitwo CT-click hidepant' : 'CT2 pt-problem panitwo hidepant'} onClick={() => {setpant('pant2');}}>{ pant === 'pant2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant2' ? 'selected-size-color hidepant' : 'un-size-color hidepant'}>Trouser</span></div>
                    <div><div className={pant === 'pant3' ? 'CT3 pt-problem panithree CT-click' : 'CT3 pt-problem panithree'} onClick={() => {setpant('pant3');}}>{ pant === 'pant3' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant3' ? 'selected-size-color' : 'un-size-color'}>Gabby</span></div>
                  </div>
                  <div className='fill-prob'>Pant length <input type="number" className='size-definer' id="getpant" name="getpant" onChange={handlePantchange} value={getpant}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Pant-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p6'); setwarn(false); setwarney(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(getpant < 1){ setwarn(true); setwarney(false);}else if(pant !== 'pant1' && pant !== 'pant2' && pant !== 'pant3'){setwarney(true); setwarn(false);}else if(getpant >= 1){ setsizemPage('p8'); setwarn(false); setwarney(false);}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
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
                  <div>Collar : {getcollar}</div>
                  <div>Chest : {getchest}</div>
                  <div>Waist : {getlast}</div>
                  <div>Pant length : {getpant}</div>
                  <div>Skirt-Type : {sSkirt === 'skirt1'? "Cerved Cut" :sSkirt === 'skirt2'&& "quared Cut"}</div>
                  <div>Pant-Type : {pant === 'pant1'? "Normal":pant === 'pant2'? "Trouser":pant === 'pant3'&& "Gabby"}</div>
                </div>
              </div>
              <div className='vid-holder'></div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p7');}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext save-prob'><p className='gonext-p save-prob' onClick={() => {setmaleSizeT(false); settoSizeSelect('mine'); setWarnmine(false); setnosizewarn(false);}}>Save</p></div>
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
  
  export default MTsize 
     
