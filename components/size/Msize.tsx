interface Props {
    maleSize: boolean,
    setmaleSize: (maleSize: boolean) => void,
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



const Msize = ({ AiOutlineLeft, FcCheckmark, MdOutlineKeyboardBackspace, nosizewarn, setnosizewarn, Warnmine, setWarnmine, getpant, setgetpant, pant, setpant, pocket, setpocket ,collar, setcollar, sleeve, setsleeve, setgetshoulder, getshoulder, setgetsleeve, getsleeve, setgetcollar, getcollar, setgetchest, getchest, setgetlast, getlast, warn, setwarn, warney, setwarney, getstok, setgetstok, sSkirt, setsSkirt, ReactPlayer, sizemPage, setsizemPage, maleSize, setmaleSize, toSizeSelect, settoSizeSelect }: Props) => {
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
        onClick={() => {setmaleSize(false); settoSizeSelect('small');}}>
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
                    <div><div className={sSkirt === 'skirt1' ? 'SkT1 skione SkT-click' : 'SkT1 skione'} onClick={() => {setsSkirt('skirt1')}}>{ sSkirt === 'skirt1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={sSkirt === 'skirt1' ? 'selected-size-color' : 'un-size-color'}>Cerved Cut</span></div>
                    <div><div className={sSkirt === 'skirt2' ? 'SkT2 skitwo SkT-click' : 'SkT2 skitwo'} onClick={() => {setsSkirt('skirt2')}}>{ sSkirt === 'skirt2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={sSkirt === 'skirt2' ? 'selected-size-color' : 'un-size-color'}>Squared Cut</span></div>
                  </div>
                  <div className='fill-prob'>Lenght <input type="number" className='size-definer' id="getstok" name="getstok" onChange={handleStokchange} value={getstok}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Skirt-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
                <div className='goback'><p className='goback-p'></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getstok < 1){ setwarn(true); setwarney(false);}else if(sSkirt !== 'skirt1' && sSkirt !== 'skirt2'){setwarney(true); setwarn(false);}else if(getstok >= 1){setwarney(false); setsizemPage('p2'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
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
            <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p1'); setwarn(false);}}>< MdOutlineKeyboardBackspace /></p></div>
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
                  <div className='sleeve-types'>
                    <div><div className={sleeve === 'sleeve1' ? 'ST1 sleione ST-click' : 'ST1 sleione'} onClick={() => {setsleeve('sleeve1');}}>{ sleeve === 'sleeve1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={sleeve === 'sleeve1' ? 'selected-size-color' : 'un-size-color'}>Rounded</span></div>
                    <div><div className={sleeve === 'sleeve2' ? 'ST2 sleitwo ST-click' : 'ST2 sleitwo'} onClick={() => {setsleeve('sleeve2');}}>{ sleeve === 'sleeve2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={sleeve === 'sleeve2' ? 'selected-size-color' : 'un-size-color'}>Cuff</span></div>
                  </div>
                  <div className='fill-prob'>Sleeve <input type="number" className='size-definer' id="getsleeve" name="getsleeve" onChange={handleSleevechange} value={getsleeve}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Sleeve-Type</p>}
                </div>
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p'  onClick={() => {setsizemPage('p2'); setwarn(false); setwarney(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getsleeve < 1){ setwarn(true); setwarney(false);}else if(sleeve !== 'sleeve1' && sleeve !== 'sleeve2'){setwarney(true); setwarn(false);}else if(getsleeve >= 1){setwarney(false); setsizemPage('p4'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p4' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/c3oko6p20TE' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='collar-types'>
                    <div><div className={collar === 'collar1' ? 'CT1 CT-problem colione CT-click' : 'CT1 CT-problem colione'} onClick={() => {setcollar('collar1')}}>{collar === 'collar1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={collar === 'collar1' ? 'selected-size-color' : 'un-size-color'}>Pakistani</span></div>
                    <div><div className={collar === 'collar2' ? 'CT2 CT-problem colitwo CT-click' : 'CT2 CT-problem colitwo'} onClick={() => {setcollar('collar2')}}>{collar === 'collar2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={collar === 'collar2' ? 'selected-size-color' : 'un-size-color'}>Spread</span></div>
                    <div><div className={collar === 'collar3' ? 'CT3 CT-problem colithree CT-click' : 'CT3 CT-problem colithree'} onClick={() => {setcollar('collar3')}}>{collar === 'collar3' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={collar === 'collar3' ? 'selected-size-color' : 'un-size-color'}>Shahbazi</span></div>
                  </div>
                  <div className='fill-prob'>Collar <input type="number" className='size-definer' id="getcollar" name="getcollar" onChange={handleCollarchange} value={getcollar}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Collar-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p3'); setwarn(false); setwarney(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getcollar < 1){ setwarn(true); setwarney(false);}else if(collar !== 'collar1' && collar !== 'collar2' && collar !== 'collar3'){setwarney(true); setwarn(false);}else if(getcollar >= 1){setwarney(false); setsizemPage('p5'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
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
                <div className='gonext'><p className='gonext-p' onClick={() => {if(getchest < 1){ setwarn(true); setwarney(false);}else if(getchest >= 1){setwarney(false); setsizemPage('p6'); setwarn(false)}}}>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p6' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/1U5gX8CwRCw' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='sleeve-types'>
                    <div><div className={pocket === 'pocket1' ? 'ST1 pocketone ST-click' : 'ST1 pocketone'} onClick={() => {setpocket('pocket1')}}>{pocket === 'pocket1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pocket === 'pocket1' ? 'selected-size-color' : 'un-size-color'}>Top Pocket</span></div>
                    <div><div className={pocket === 'pocket2' ? 'ST2 pockettwo ST-click' : 'ST2 pockettwo'} onClick={() => {setpocket('pocket2')}}>{pocket === 'pocket2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pocket === 'pocket2' ? 'selected-size-color' : 'un-size-color'}>Sides-Pocket</span></div>
                  </div>
                  <div className='fill-prob'>Wasit <input type="number" className='size-definer' id="getlast" name="getlast" onChange={handlegetlastchange} value={getlast}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Pocket-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
                <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p5'); setwarn(false); setwarney(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(getlast < 1){ setwarn(true); setwarney(false);}else if(pocket !== 'pocket1' && pocket !== 'pocket2'){setwarney(true); setwarn(false);}else if(getlast >= 1){setwarney(false); setsizemPage('p7'); setwarn(false)}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
              </div>
            </div>
          </div>
        ) : sizemPage === 'p7' ? (
          <div className="Sizing-info">
            <div className='handreader'>
              <div className='vid-holder'><ReactPlayer url='https://youtu.be/fVRVv1DtZIk' className='vid' muted={true} loop={true} controls={false} /></div>
              <div className='size-text-holder'>
                <div>
                  <div className='collar-types'>
                    <div><div className={pant === 'pant1' ? 'CT1 pt-problem panione CT-click' : 'CT1 pt-problem panione'} onClick={() => {setpant('pant1')}}>{pant === 'pant1' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant1' ? 'selected-size-color' : 'un-size-color'}>Normal</span></div>
                    <div><div className={pant === 'pant2' ? 'CT2 pt-problem panitwo CT-click hidepant' : 'CT2 pt-problem panitwo hidepant'} onClick={() => {setpant('pant2')}}>{pant === 'pant2' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant2' ? 'selected-size-color hidepant' : 'un-size-color hidepant'}>Trouser</span></div>
                    <div><div className={pant === 'pant3' ? 'CT3 pt-problem panithree CT-click' : 'CT3 pt-problem panithree'} onClick={() => {setpant('pant3')}}>{pant === 'pant3' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant3' ? 'selected-size-color' : 'un-size-color'}>Gabby</span></div>
                    <div><div className={pant === 'pant4' ? 'CT3 pt-problem panifour CT-click hidepant' : 'CT3 pt-problem panifour hidepant'} onClick={() => {setpant('pant4')}}>{pant === 'pant4' && <div className="mark-the-types"><FcCheckmark className="mark-of-the-types"/></div>}</div><span className={pant === 'pant4' ? 'selected-size-color hidepant' : 'un-size-color hidepant'}>Gabby</span></div>
                  </div>
                  <div className='fill-prob'>Pant length <input type="number" className='size-definer' id="getpant" name="getpant" onChange={handlePantchange} value={getpant}/></div>
                  {warn && <p className='warning'>Please fill the box</p>}
                  {warney && <p className='warning'>Please choose your Pant-Type</p>}
                </div>
              </div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p6'); setwarn(false); setwarney(false);}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext' onClick={() => {if(getpant < 1){ setwarn(true); setwarney(false);}else if(pant !== 'pant1' && pant !== 'pant2' && pant !== 'pant3' && pant !== 'pant4'){setwarney(true); setwarn(false);}else if(getpant >= 1){setwarney(false); setsizemPage('p8'); setwarn(false)}}}><p className='gonext-p'>< MdOutlineKeyboardBackspace className='nextp-prob' /></p></div>
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
                  <div>Collar-Type : {collar === 'collar1'? "Pakistani":collar === 'collar2'? "Spread": "Shahbazi"}</div>
                  <div>Sleeve-Type : {sleeve === 'sleeve1'? "Rounded" : "Cuff"}</div>
                  <div>Skirt-Type : {sSkirt === 'skirt1'? "Cerved Cut" : "Squared Cut"}</div>
                  <div>Pant-Type : {pant === 'pant1'? "Normal":pant === 'pant2'? "Trouser":pant === 'pant3'? "Gabby" :pant === 'pant4' && "Gabby"}</div>
                  <div>Pocket-Type : {pocket === 'pocket1'? "Top Pocket" : "Two Sides Pocket"}</div>
                </div>
              </div>
              <div className='vid-holder'></div>
              <div className='gonextback'>
              <div className='goback'><p className='goback-p' onClick={() => {setsizemPage('p7')}}>< MdOutlineKeyboardBackspace /></p></div>
                <div className='gonext save-prob'><p className='gonext-p save-prob' onClick={() => {setmaleSize(false); settoSizeSelect('mine'); setWarnmine(false); setnosizewarn(false)}}>Save</p></div>
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

export default Msize
  
