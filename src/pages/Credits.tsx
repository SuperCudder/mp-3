import React, { useContext, useEffect } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Main from '../components/Main';

const Credits = () => {
  const { setTitle, setSubtitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Jonah Kastelic');
    setSubtitle('Credits');
  }, [setTitle, setSubtitle]);

  return (
    <Main>
      <div className="creds">
        <img src="/Boston_University_seal.png" alt="BU seal" width="100" height="100" />
        <a href="https://commons.wikimedia.org/wiki/File:Boston_University_seal.svg">Source</a>
        <img src="/casco-bay-logo.png" alt="CBHS logo" width="100" height="118.55" />
        <a href="https://cbhs.portlandschools.org/">Source</a>
      </div>
    </Main>
  );
};

export default Credits;