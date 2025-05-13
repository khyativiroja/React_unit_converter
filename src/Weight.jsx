import Header from './Header';
import React, { useState, useEffect } from 'react';

function Weight() {
    const [fromValue, setFromValue] = useState('');
    const [fromUnit, setFromUnit] = useState('kg');
    const [toUnit, setToUnit] = useState('kg');
    const [result, setResult] = useState('');

    const conversionToMeters = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    p: 0.453592
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
    <h3>Weight Converter</h3>
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
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                <option value="mg">Milligram</option>
                <option value="p">Pound</option>
                </select>
            </div>
        </div>
        <div className="len-to-div">
            <label>To</label>
            <div className='converter-div'><input type='text' value={result} disabled className='txt'/> 
                <select className='select' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                <option value="mg">Milligram</option>
                <option value="p">Pound</option>
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

export default Weight;