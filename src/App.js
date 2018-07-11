import React, { Component, Fragment } from 'react';
import './App.css';
import { Image } from 'cloudinary-react';
import { Card, Thumbnail, Modal } from 'Elements';
import { Toggle, images, elevation } from 'Utilities';

const AppContainer = Card.extend`
  ${elevation[4]};
  @media (max-width: 460px) {
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer>
          {Object.values(images).map(image => {
            console.log(image);
            return (
              <Toggle>
                {({ on, toggle }) => (
                  <Fragment>
                    <Thumbnail onClick={toggle}>
                      <Image
                        cloudName="dvodrdrmz"
                        publicId={image}
                        width="110"
                        crop="scale"
                      />
                    </Thumbnail>

                    <Modal on={on} toggle={toggle}>
                      <Image
                        cloudName="dvodrdrmz"
                        publicId={image}
                        responsive
                        width="auto"
                        crop="scale"
                      />
                    </Modal>
                  </Fragment>
                )}
              </Toggle>
            );
          })}
        </AppContainer>
      </div>
    );
  }
}

export default App;

// {({ on, toggle }) => (
//   <Fragment>
//     <button onClick={toggle}>Login</button>
//     <div on={on} toggle={toggle}>
//       <h1>Still in modalasdfasdf</h1>
//     </div>
//   </Fragment>
// )}
