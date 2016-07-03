'use strict';

function gen(){
  return typeof null === "undefined";
}

function rbool(){
  var i = 0,
    range = Math.floor(Math.random() * (150 - 100 + 1)) + 100,
    b = true;
  for(i; i < range; i++){
    b = gen();
  }
  return b;
};

module.exports = rbool;
