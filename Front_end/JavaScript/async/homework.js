function makeHomework(course, callback) {
    console.log (`Okay, ok, I'm going to do my ${course} homework now`);
    setTimeout(() =>  callback(), 2000);
}

function doneWithHomework() {
    console.log(`Look, Mom/Dad, I am done with my homework!`)
}

makeHomework('math', doneWithHomework);