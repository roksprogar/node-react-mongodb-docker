import React from 'react';
import Note from './Note';

function Notes() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <Note
            title="Note 1"
            description="1 Lorem ipsum dolot amer sit! Lorem ipsum dolot amer sit! Lorem
              ipsum dolot amer sit! Lorem ipsum dolot amer sit!"
          />
          <Note
            title="Note 2"
            description="2 Lorem ipsum dolot amer sit! Lorem ipsum dolot amer sit! Lorem
              ipsum dolot amer sit! Lorem ipsum dolot amer sit!"
          />
          <Note
            title="Note 3"
            description="3 Lorem ipsum dolot amer sit! Lorem ipsum dolot amer sit! Lorem
              ipsum dolot amer sit! Lorem ipsum dolot amer sit!"
          />
          <Note
            title="Note 4"
            description="4 Lorem ipsum dolot amer sit! Lorem ipsum dolot amer sit! Lorem
              ipsum dolot amer sit! Lorem ipsum dolot amer sit!"
          />
          <Note
            title="Note 5"
            description="5 Lorem ipsum dolot amer sit! Lorem ipsum dolot amer sit! Lorem
              ipsum dolot amer sit! Lorem ipsum dolot amer sit!"
          />
          <Note
            title="Note 6"
            description="6 Lorem ipsum dolot amer sit! Lorem ipsum dolot amer sit! Lorem
              ipsum dolot amer sit! Lorem ipsum dolot amer sit!"
          />
        </div>
      </div>
    </section>
  );
}

export default Notes;
