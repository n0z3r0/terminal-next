import React from 'react';
import { mount } from 'enzyme';
import { storiesOf, action, describe, specs,
beforeEach, afterEach } from '../facade';

const { expect, it } = global;

const stories = storiesOf('Button - CI JEST Sample', module);

stories.add('Hello World', function () {
  const helloWorldStory =
    (<button onClick={action('Hello World')}>
      Hello World
    </button>);

  specs(() => describe('Hello World', function () {
    let output;
    beforeEach(() => {
      /* eslint-disable no-console*/
      console.log('BEFORE EACH');
      /* eslint-enable no-console*/
      output = mount(helloWorldStory);
    });

    afterEach(() => {
      /* eslint-disable no-console*/
      console.log('AFTER EACH');
      /* eslint-enable no-console*/
    });

    it('Should have the Hello World label', function () {
      expect(output.text()).toContain('Hello World');
    });

    it('Should have the Hello World label', function () {
      expect(output.text()).toContain('Hello World');
    });
  }));
  return helloWorldStory;
});

stories.add('Hello Earth', function () {
  const helloEarthStory =
    (<button onClick={action('Hello Earth')}>
      Hello Earth
    </button>);

  specs(() => describe('Hello Earth', function () {
    it('Should have the Hello Earth label', function () {
      const output = mount(helloEarthStory);
      expect(output.text()).toContain('Hello Earth');
    });
  }));

  return helloEarthStory;
});
