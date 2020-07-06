import React from 'react';
import Modal from "../Modal"
const TitleComponent = () => {
  return <h3>This is the TitleComponent</h3>;
};
const Test = () => {
  
  return <>
  <Modal show={true} component={<TitleComponent/>}>
    
  </Modal>
    <p>done, im on test component</p>
  </>
}
export default Test