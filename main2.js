//CHALLENGE 1
const checkValues = (obj, value) => {
  if (Object.values(obj).includes(value)) {
    return true;
  }
  return false;
};
//or if (Object.values(obj).indexOf(value) > -1)

//CHALLENGE 2
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  return Object.getOwnPropertyNames(obj);
  // or return Object.keys(obj);
};

//CHALLENGE 3
const updateNumbers = (obj) => {
  let newarr = [];
  for (const property in obj) {
    newarr.push(`${property}: ${obj[property]}`);
  }
  return newarr;
  // newarr[newarr.length] = `${property}: ${obj[property]}`
};

//CHALLENGE 4
const PassedOrFailed = function (obj) {
  for (const property in obj) {
    if ((obj[property].grade / obj[property].total) * 100 < 50) {
      return "The student have  failed";
    }
  }
  return "The student have passed";
};

//CHALLENGE 5 done
const totalCharacters = (arr) => {
  let lengthw = 0;
  for (let i = 0; i < arr.length; i++) {
    lengthw += arr[i].length;
  }
  return lengthw;
};

//CHALLENGE 6  i think its wrong
const houseSize = (arr) => {
  let sizes = [];
  for (let i = 0; i < arr.length + i; i++) {
    let objj = {};
    objj.house = arr.shift();
    objj.members = arr.shift();
    sizes.push(objj);
  }
  return sizes;
};

//7
const uniqueDogs = {
  max: { breed: "Labrador Retriever", color: "blond" },
  rex: { breed: "German Shepherd", color: "black and brown" },
  lucy: { breed: "Bulldog", color: "white" },
  lucifer: { breed: "Chihuahua", color: "brown" },
};

const createDog = function (name, dogBreed, furColor) {
  for (const keys in uniqueDogs) {
    if (keys == name) {
      return "The dog isn't unique enough";
    }
  }
  uniqueDogs[name] = { bread: dogBreed, color: furColor };
  return "Added the dog successfully";
};
