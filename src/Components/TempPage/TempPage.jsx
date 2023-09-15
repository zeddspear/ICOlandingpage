import React from 'react';

function TempPage() {
  return (
    <>
      <div className="bg-tertiaryMain h-[60vh] py-8">
        <div className="px-5 py-5 flex justify-center items-center flex-col h-[100%] text-center">
          <h1>Not A 404 Error</h1>
          <p className="my-3">
            Hey you can add components of your own so when you click a link it
            will render component according to your need!
            <br />
            App is using React router you also have to set the routes too
            manually.
          </p>
        </div>
      </div>
    </>
  );
}

export default TempPage;
