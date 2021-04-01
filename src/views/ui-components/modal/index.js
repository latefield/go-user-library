import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Button from "./../../../components/button";
import ConfirmModal from "./../../../components/modal";
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <ConfirmModal
    title="this is a modal"
    message="This is the content"
    okText="OK"
  />
);

const ModalPage = () => {
  const [modalReveal, setModalReveal] = useState(false);
  const handleDeleteConfirmed = () => {
    setModalReveal(false);
  };

  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Modal</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a Modal and this is some information</p>
          </div>
        </div>
      </div>
      <div className="tab__wrap">
        <Tabs>
          <TabList>
            <Tab>Example</Tab>
            <Tab>Code</Tab>
          </TabList>

          <TabPanel>
            <Button
              size="small"
              type="primary-filled"
              onClick={() => {
                setModalReveal(true);
              }}
            >
              Open modal
            </Button>
            {modalReveal ? (
              <ConfirmModal
                title="this is a modal"
                message="This is the content"
                okText="OK"
                onClose={handleDeleteConfirmed}
              />
            ) : null}
          </TabPanel>
          <TabPanel>
            <Code source={`${htmlString}`} />
          </TabPanel>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default ModalPage;
