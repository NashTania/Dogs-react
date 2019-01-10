import React from 'react';
import renderer from 'react-test-renderer';
import AllImgesBreed from '../src/components/images-breed.js';
import sinon from 'sinon';


  it ('render correctly', () => {
    const callback = sinon.stub();
    callback.returns(new Promise(resolve => resolve()))
    const tree = renderer.create(
      <AllImgesBreed
      match={{params: {breed: 'affenpinscher'}}}
      setBreedImages={callback}
      breedImages={{affenpinscher:twenty}}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(callback.callCount).toEqual(0);
  })

  it ('renders correctly when an empty array', () => {
    const callback = sinon.stub();
    callback.returns(new Promise(resolve => resolve()))
    const tree = renderer.create(
      <AllImgesBreed
      match={{params: {breed: 'affenpinscher'}}}
      setBreedImages={callback}
      breedImages={{affenpinscher:emptyArr}}/>).toJSON();
      expect(tree).toMatchSnapshot();
      expect(callback.callCount).toEqual(0);
  });

  it ('renders correctly when there is one item', () => {
    const callback = sinon.stub();
    callback.returns(new Promise(resolve => resolve()))
    const tree = renderer.create(
      <AllImgesBreed
      match={{params: {breed: 'affenpinscher'}}}
      setBreedImages={callback}
      breedImages={{affenpinscher: one}}/>).toJSON();
      expect(tree).toMatchSnapshot();
      expect(callback.callCount).toEqual(0);
  });

  it ('renders correctly when there is four item', () => {
    const callback = sinon.stub();
    callback.returns(new Promise(resolve => resolve()))
    const tree = renderer.create(
      <AllImgesBreed
      match={{params: {breed: 'affenpinscher'}}}
      setBreedImages={callback}
      breedImages={{affenpinscher:four}}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(callback.callCount).toEqual(0);
  })

  it ('renders correctly when there are multiple items', () => {
    const callback = sinon.stub();
    callback.returns(new Promise(resolve => resolve()))
    const tree = renderer.create(
      <AllImgesBreed
      match={{params: {breed: 'affenpinscher'}}}
      setBreedImages={callback}
      breedImages={{affenpinscher:twenty}}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(callback.callCount).toEqual(0);
  })














  const emptyArr = [];
  const one = ["https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg"];
  const four = ["https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg",
   "https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg"];
  const twenty = ["https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg",
   "https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10447.jpg",
   "https://images.dog.ceo/breeds/affenpinscher/n02110627_10680.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10848.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_10859.jpg",
   "https://images.dog.ceo/breeds/affenpinscher/n02110627_10986.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11211.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11262.jpg",
   "https://images.dog.ceo/breeds/affenpinscher/n02110627_11263.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11279.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11283.jpg",
   "https://images.dog.ceo/breeds/affenpinscher/n02110627_11345.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11365.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11422.jpg", "https://images.dog.ceo/breeds/affenpinscher/n02110627_11422.jpg"]
