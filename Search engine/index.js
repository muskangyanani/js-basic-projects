const search = () =>{
    let userinput = document.getElementById('my-input').value.toUpperCase();
    let ul = document.getElementById('my-ul');
    let li = ul.getElementsByTagName('li');

    for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('h4')[0];

        let textValue = a.textContent || a.innerHTML; 

        //indexOf operator reurns +ve value if the string matches
        if(textValue.toUpperCase().indexOf(userinput) > -1){            
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }
}