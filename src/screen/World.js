import React, { useState } from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
const svgUrl =
   'https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg';

const World = () => {
   const [countryCodes, setCountryCodes] = useState(['co', 'ru']);

   return (
      <div>
         <SvgLoader path={svgUrl}>
            {/* Important! this proxy will reset the color to black,
          otherwise old elements would still be shown in red
          because this library doesn't store previous states */}
            <SvgProxy selector={'path'} fill='black' />
            {countryCodes.map((code) => (
               <SvgProxy
                  key={code}
                  selector={'#' + code + ',#' + code + ' path'}
                  fill='red'
               />
            ))}
         </SvgLoader>

         <button
            onClick={() => {
               setCountryCodes(['br', 'pe', 'us']);
            }}
            style={{
               margin: '20px',
               display: 'block',
               padding: '20px',
               fontWeight: 'bold',
            }}
         >
            Change selection
         </button>
         <div> Map by https://github.com/flekschas/simple-world-map </div>
      </div>
   );
};

export default World;
