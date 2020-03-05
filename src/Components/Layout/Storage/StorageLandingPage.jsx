import { Accordion, Dimmer, Loader } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import React from 'react';
import PageMenu from '../PageMenu';
import BoxViewWithData from './BoxView';
import { GET_STORAGE_UI } from '../../Data/StorageQuery';
import AddStorageModalMutation from './AddStorageModal';
//  TODO add delete button
// #TODO change layout to breadcrumb for simplicity

const BuildAccordion = (props) => {
  /*
    Storage display utilizes nested accordions from semantic-ui
    https://react.semantic-ui.com/modules/accordion/#advanced-nested

    In order to build out the full accordion panels needs to be created first
    However panels reference accordion objects that do not yet exists
    So nested accordions are created stored in a hash table (json)
    and then the references intially created in the panels are replaced by the
    actual objects
  */

  /*
    create an array of content objects (objects in accordion)
    Boxes can be inserted directly, but place holder names are inserted
    and replaced with accordions after the accordions are built
    (build panels first, then build accordions from panels, then insert
     build accordion values into the nested panel objects)
  */

  const contentposition = (content, boxes) => {
    const contentArray = [];
    content.map((value) => {
      contentArray.push(value.name);
    });
    // if boxes don't exist don't map them into returned content
    if (boxes !== undefined) {
      boxes.map((box) => {
        // TODO create CSS so boxs line up horizontally rather than vertically
        contentArray.push(<div className="row"><BoxViewWithData boxid={box.id} /></div>);
      });
    }
    return contentArray;
  };

  /*
    rootPanels create different accordions than nested panels so they get
    their own array to iterate over
  */

  const rootPanel = [];
  const panels = {};
  const accordions = {};

  // Build the root panel list and nested panel dict
  props.storageUI.map((panel) => {
    if (panel.topLevel === true) {
      rootPanel.push({
        key: panel.key,
        title: panel.title,
        content: { content: contentposition(panel.content, panel.boxes) },
      });
    } else {
      panels[panel.title] = [{
        key: panel.key,
        title: panel.title,
        content: { content: contentposition(panel.content, panel.boxes) },
      }];
    }
  });

  // build accordions and store them
  Object.entries(panels).forEach(([key, value]) => {
    accordions[key] = (<Accordion.Accordion panels={value} />);
  });


  // fill nested panels with actual accordion where appropriate
  Object.entries(panels).forEach(([key, value]) => {
    value.map((panel) => {
      if (panel.content.content.length !== 0) {
        Object.entries(accordions).forEach(([key2, value2]) => {
          if ((panel.content.content.indexOf(key2)) !== -1) {
            const position = panel.content.content.indexOf(key2);
            panel.content.content[position] = accordions[key2];
          }
        });
      }
    });
  });

  // fill root panels with actual accordion where appropriate
  Object.entries(rootPanel).forEach(([key, value]) => {
    Object.entries(accordions).forEach(([key2, value2]) => {
      if ((value.content.content.indexOf(key2)) !== -1) {
        const position = value.content.content.indexOf(key2);
        value.content.content[position] = accordions[key2];
      }
    });
  });

  const RootAccordion = () => (
    <Accordion defaultActiveIndex={0} panels={rootPanel} styled />
  );

  return (<RootAccordion />);
};


class StorageSetup extends React.Component {
  render() {
    if (this.props.loadingUI) {
      return <Dimmer active> <Loader /> </Dimmer>;
    } else {
      // it does not load properly without this assignment unsure why
      // need to investigate
      let storagedata = this.props.storageUI;
    }
    if (this.props.errorUI) {
      return <p> Error! </p>;
    }
    return (
      <div>
        <PageMenu />
        <AddStorageModalMutation />
        <BuildAccordion storageUI={this.props.storageUI} />
      </div>
    );
  }
}

const StorageUIData = graphql(GET_STORAGE_UI, {
  props: ({ data }) => ({
    errorUI: data.error,
    loadingUI: data.loading,
    storageUI: data.storageUi,
  }),
});

const StorageWithData = compose(StorageUIData)(StorageSetup);

export default StorageWithData;
