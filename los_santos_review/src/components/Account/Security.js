import React from 'react';
import Category from './Category';
import PasswordForm from './profile/PasswordForm';

function Security() {
    return ( 
        <div className = "security">
            <Category text ="Edit Password"/>
            <PasswordForm/>
        </div>
     );
}

export default Security;