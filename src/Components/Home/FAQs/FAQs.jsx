import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { types } from './faqsData';
import AccordionMain from './AccordionMain';
import { general, preICO, token, client, legal } from './faqsData';

export const TypesState = createContext();

function FAQs() {
  const [listTypes, setListTypes] = useState(types);
  const [accordionData, setAccordionData] = useState(general);

  const accordionDataMemo = useMemo(() => {
    return accordionData;
  }, [accordionData]);

  useEffect(() => {
    listTypes.forEach((type) => {
      if (type.typeName === 'General' && type.selected === true) {
        setAccordionData(general);
      } else if (type.typeName === 'Pre ICO & ICO' && type.selected === true) {
        setAccordionData(preICO);
      } else if (type.typeName === 'Token' && type.selected === true) {
        setAccordionData(token);
      } else if (type.typeName === 'Client' && type.selected === true) {
        setAccordionData(client);
      } else if (type.typeName === 'Legal' && type.selected === true) {
        setAccordionData(legal);
      }
    });
  }, [listTypes]);

  // Fetched list type mapping
  const list = listTypes.map((type) => {
    return <List key={type.id} {...type} />;
  });

  return (
    <TypesState.Provider value={{ listTypes, setListTypes }}>
      <div className="FAQs py-14 bg-tertiaryMain">
        <div className="container  p-5 text-center">
          <h2 className="mt-10 mb-3">Have Any Questions?</h2>
          <p className="mb-10">
            Join the industry leaders to discuss where the markets are heading.
            We accept token payments.
          </p>
          <div className="max-w-[547px] mx-auto">
            <ul className="FAQsList flex justify-center items-center gap-5 flex-col md:flex-row">
              {list}
            </ul>
          </div>

          <AccordionMain accordionData={accordionDataMemo} />
        </div>
      </div>
    </TypesState.Provider>
  );
}

// List type names display component
const List = ({ ...type }) => {
  const { id, typeName, selected } = { ...type };

  const { listTypes, setListTypes } = useContext(TypesState);

  const handleSelectedType = (id) => {
    const updatedListTypes = listTypes.map((type) => {
      return type.id === id
        ? { ...type, selected: true }
        : { ...type, selected: false };
    });
    setListTypes(updatedListTypes);
  };

  return (
    <li
      className={
        selected ? 'border-b-4 border-b-interactiveMain selected' : null
      }
      onClick={() => {
        handleSelectedType(id);
      }}
    >
      <p
        className={
          !selected
            ? 'opacity-30 text-base sm:text-lg md:text-xl'
            : 'opacity-100 text-base sm:text-lg md:text-xl text-surface'
        }
      >
        {typeName}
      </p>
    </li>
  );
};

export default FAQs;
