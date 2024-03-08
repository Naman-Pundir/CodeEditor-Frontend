const reader1 = new FileReader();
const reader2 = new FileReader();

export function handleCode(file1, file2){
    const sourcefile = new Blob([file1], {type: "text/plain"});
    const inputfile = new Blob([file2], {type: "text/plain"});
    //To read data from blob
    // reader1.readAsText(sourcefile);
    // reader2.readAsText(inputfile);

    const formData = new FormData();
    formData.append('code', sourcefile, 'program.cpp');
    formData.append('input', inputfile, 'input.txt');

    
}

//function to read blob

reader1.onload = function(event){
    const content = event.target.result;
    console.log(content);
}

reader2.onload = function(event){
    const content = event.target.result;
    console.log(content);
}