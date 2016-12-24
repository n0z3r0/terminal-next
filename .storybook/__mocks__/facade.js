import renderer from 'react-test-renderer';

const { it, expect, jasmine } = global;

export const snapshot = (name, story) => {
  it(name, function () {
    const tree = renderer.create(story).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const storiesOf = function storiesOf() {
  const api = {};
  let story;
  api.add = (name, func) => {
    story = func();
    snapshot(name, story);
    return api;
  };
  api.addWithInfo = (name, func) => {
    story = func();
    snapshot(name, story);
    return api;
  };
  return api;
};
export const action = () => {};

export const linkTo = () => {};

export const specs = (spec) => {
  spec();
};

export const describe = jasmine.currentEnv_.describe;
export const beforeEach = jasmine.currentEnv_.beforeEach;
export const afterEach = jasmine.currentEnv_.afterEach;
export const xit = jasmine.currentEnv_.xit;
export const xdescribe = jasmine.currentEnv_.xdescribe;
export const fit = jasmine.currentEnv_.fit;
export const after = () => {};
export const before = () => {};
