import Header from './Header';
import React, { useState, useEffect } from 'react';

function Area() {
    const [fromValue, setFromValue] = useState('');
    const [fromUnit, setFromUnit] = useState('sqm');
    const [toUnit, setToUnit] = useState('sqm');
    const [result, setResult] = useState('');

    const conversionToMeters = {
    sqm: 1,
    sqkm: 1_000_000,       
    sqcm: 0.0001,       
    sqmm: 0.000001
  };

  useEffect(() => {
    if (fromValue === '') {
      setResult('');
      return;
    }

    const valueInMeters = parseFloat(fromValue) * conversionToMeters[fromUnit];
    const convertedValue = valueInMeters / conversionToMeters[toUnit];

    setResult(convertedValue.toFixed(2)); 
  }, [fromValue, fromUnit, toUnit]);
    return ( <>
    
    <Header/>
    <div className="len-div">
    <h3>Area Converter</h3>
    <div className="len-converter-div">
        <div className="len-from-div">
            <label>From</label>
            <div className='converter-div'><input type='number' className='txt' value={fromValue}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*\.?\d*$/.test(val)) {
                    setFromValue(val);
                  }
                }} /> 
                <select className='sel'value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                <option value="sqm">Square meter</option>
                <option value="sqkm">Square kilometer</option>
                <option value="sqcm">Square centimeter</option>
                <option value="sqmm">Square millimeter</option>
                </select>
            </div>
        </div>
        <div className="len-to-div">
            <label>To</label>
            <div className='converter-div'><input type='text' value={result} disabled className='txt'/> 
                <select className='select' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                <option value="sqm">Square meter</option>
                <option value="sqkm">Square kilometer</option>
                <option value="sqcm">Square centimeter</option>
                <option value="sqmm">Square millimeter</option>
                </select>
            </div>
        </div>
    </div>
    <div className='result-div'>
        <p>Conversion Result</p>
        <p className='result-p'> {result ? `${fromValue} ${fromUnit} = ${result} ${toUnit}` : ''}          
        </p>
    </div>
    </div>
    </> );
}

export default Area;