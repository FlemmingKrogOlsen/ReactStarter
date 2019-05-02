// Import Node Modules
import { configure, addDecorator,addParameters } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';

// Load stories
function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context("../src", true, /(\.|\/)stories\.js$/);
  importAll(req);
}

// Storybook Info Addon
addDecorator(
  withInfo({
    header: false,
    inline: true,
    styles: {
      header: {
        body: {
          border: 'none',
          textAlign: 'center',
        }
      },
      infoBody: {
        borderRadius: '7px', 
        backgroundColor: '#fafafa', 
        border: '1px solid gray'},
    }
  }),
  withA11y
);

// Storybook Viewport addon
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  }
});

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
global.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

configure(loadStories, module);