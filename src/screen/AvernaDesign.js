import React, { useState } from 'react';
import { SvgLoader, SvgProxy, AttributeMotion } from 'react-svgmt';
const AvernaDesign = ({ color }) => {
   const ids = [
      { sel: 'vertical1', state: 0, color },
      { sel: 'horizontal3', state: 0, color },
      { sel: 'vertical2', state: 0, color },
      { sel: 'horizontal1', state: 0, color },
      { sel: 'circle1', state: 0, color },
      { sel: 'horizontal2', state: 0, color },
      { sel: 'vertical3', state: 0, color },
      { sel: 'rect', state: 0, color },
      { sel: 'text1', state: 0, color },
      { sel: 'text2', state: 0, color },
      { sel: 'contanier', state: 0, color },
   ];
   const [selectorOpacity, setselectorOpacity] = useState(ids);
   const [isReset, setReset] = useState(false);
   const [wait, setwait] = useState(false);
   const onClick = () => {
      console.log(wait);
      if (wait) return false;

      if (isReset) {
         setwait(false);
         setReset(false);
         return setselectorOpacity(ids);
      }
      setwait(true);
      let i = 0;
      setInterval(() => {
         if (i < selectorOpacity.length) {
            selectorOpacity[i].state = 1;
            setselectorOpacity([...selectorOpacity, selectorOpacity[i]]);
            i++;
            if (i === selectorOpacity.length) {
               setwait(false);
               return setReset(true);
            }
         }
      }, 250);
   };

   return (
      <div
         className={`AvernaDesign ${color === '#fff' ? 'black' : 'white'}`}
         onClick={onClick}
      >
         <SvgLoader className='svgLoader' path='/logoAD.svg'>
            <SvgProxy
               selector='text'
               onElementSelected={(items) => {
                  items.map((item) => {
                     consoleText(item.innerHTML, item.id);
                  });
               }}
            />
            <SvgProxy selector={`#vertical1`} stroke={color} />
            <SvgProxy selector={`#horizontal3`} stroke={color} />
            <SvgProxy selector={`#vertical2`} stroke={color} />
            <SvgProxy selector={`#horizontal1`} stroke={color} />
            <SvgProxy selector={`#circle1`} stroke={color} />
            <SvgProxy selector={`#horizontal2`} stroke={color} />
            <SvgProxy selector={`#vertical3`} stroke={color} />
            <SvgProxy selector={`#rect`} fill={color} />
            <SvgProxy selector={`#text1`} fill={color} />
            <SvgProxy selector={`#text2`} fill={color} />
            <SvgProxy selector={`#contanier`} stroke={color} />
            {selectorOpacity.map((element, ix) => (
               <AttributeMotion
                  key={ix}
                  selector={`#${element.sel}`}
                  start={{
                     opacity: 0,
                  }}
                  target={{
                     opacity: element.state,
                  }}
               />
            ))}
         </SvgLoader>
      </div>
   );

   /* <SvgProxy key={ix} selector={selector} fill='blue' /> */
};

const consoleText = (word, id) => {
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id);
   window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
         waiting = true;
         target.innerHTML = word.substring(0, letterCount);
         window.setTimeout(() => {
            x = 1;
            letterCount += x;
            waiting = false;
         }, 500);
      } else if (letterCount === word.length + 1 && waiting === false) {
         waiting = true;
         window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
         }, 2000);
      } else if (waiting === false) {
         target.innerHTML = word.substring(0, letterCount);
         letterCount += x;
      }
   }, 120);
};
export default AvernaDesign;
