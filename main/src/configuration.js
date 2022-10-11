import React from 'react'

const Configuration = () => {
    return ({
        /**
         * Id of Element that should contain Editor instance
         */
        holder: "editor",
        autofocus: true,
  
       /**
        * Available Tools list.
        * Pass Tool's class or Settings object for each Tool you want to use
        */
        tools: {

        },
       /**
        * Previously saved data that should be rendered
        */
      //  onReady: () => {
      //     console.log('Editor.js is ready to work!')
      //  },
      //  onChange: (api, event) => {
  
      //     console.log('Now I know that Editor\'s content changed!', event)
      // },
      data:
          {

          }
    });
  };

export default Configuration