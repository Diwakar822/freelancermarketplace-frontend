import React from 'react';

const ContractCard = ({ contract }) => {
    

    return (
      
         <div>
              <h3>Contract with {contract.otherParty}</h3>
       <p>Project: {contract.projectTitle}</p>
       <p>Status: {contract.status}</p>
       <p>Milestones: {contract.milestonesCompleted}</p>
       <h2>hell</h2>

    </div>
    );
};

export default ContractCard;