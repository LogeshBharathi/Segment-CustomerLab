import React, { useState, useCallback } from 'react';
import '../SchemaDropdown/SchemaDropdown.scss';
import '../NewSchemaDropdown/NewSchemaDropdown.scss';
import NewSchemaOption from '../NewSchemaOption/NewSchemaOption';

const NewSchemaDropdown = ({ array, setArray }) => {
  const [openIndex, setOpenIndex] = useState(null);


  const editNewSchema = useCallback((newElement, elementToRemove) => {
    const elementExists = array.some(item => Object.values(item)[0] === Object.values(newElement)[0]);
    
    if (elementExists) {
      console.log('Element already exists:', Object.values(newElement)[0]);
      return;
    }


    const updatedArray = array
      .filter(item => Object.values(item)[0] !== Object.values(elementToRemove)[0])
      .concat(newElement);

    setArray(updatedArray);
    console.log('Updated Array:', updatedArray);
  }, [array, setArray]);


  const handleDropdownClick = useCallback((index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);

  return (
    <>
      {array.length !== 0 && (
        <div className='new-schema-container'>
          {array.map((element, index) => (
            <div className='schema-dropdown-container' style={{ margin: '5px' }} key={Object.values(element)[0]}>
              <span className='add-schema-bullet' style={{ backgroundColor: Object.values(element)[1] }}></span>

              <div className='add-schema-container'>
                <div className='add-schema-segment-flex' onClick={() => handleDropdownClick(index)}>
                  <span className='add-schema-text'>
                    {Object.values(element)[0]}
                    {openIndex === index ? <i className="fa fa-chevron-up" /> : <i className="fa fa-chevron-down" />}
                  </span>
                </div>

                {openIndex === index && (
                  <NewSchemaOption
                    editNewSchema={editNewSchema}
                    element={element}
                    setOpenIndex={setOpenIndex}
                  />
                )}
              </div>
              <div className='dash-icon'><i className="fa fa-minus" /></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NewSchemaDropdown;
