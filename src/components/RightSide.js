import React from 'react'
import PersonalInfo from './PersonalInfo';
import ChessExperienceInfo from './ChessExperienceInfo'
import StarterState from './StarterState';

function RightSide() {

  let page = 0;
  
  if (page === 0) {
    return <StarterState />;
  } else if (page === 1) {
    return <PersonalInfo />;
  } else if (page === 2) {
    return <ChessExperienceInfo />;
  }

}

export default RightSide