import React from 'react';
import Featurebox from './Featurebox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
      <div className='a-container'>
        <Featurebox image={featureimage1} title='Development Course' />
        <Featurebox image={featureimage2} title='Money Saving Services'/>
        <Featurebox image={featureimage3} title='Usability Interface' />
      </div>
    </div>
  );
}

export default Feature;

