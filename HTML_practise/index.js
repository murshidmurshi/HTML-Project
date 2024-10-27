const Books=[
    {
        Title:'Economy',
        Pages:200,
        Author:'Murshid'
    },
    {
        Title:'Math',
        Pages:500,
        Author:'Murshid'
    },
    {
        Title:'Kannada',
        Pages:100,
        Author:'Nizam'
    },
]

function DisplayBook(){
    let html="<table border=1|1 >"
    html+="<table>";
    html+="<tr>";
    html+="<th>"+'Sno'+"</th>";
    html+="<th>"+'Title'+"</th>";
    html+="<th>"+'Pages'+"</th>";
    html+="<th>"+'Author'+"</th>";
    html+="</tr>";

    for(let i=0;i<Books.length;i++){
        let sno=i+1;
        html+="<tr>";
        html+="<td>"+sno+"</td>";
        html+="<td>"+Books[i].Title+"</td>";
        html+="<td>"+Books[i].Pages+"</td>";
        html+="<td>"+Books[i].Author+"</td>";
        
        html+="</tr>";

    }
    
    html+="</table>";

    document.getElementById('table').innerHTML=html;
}
DisplayBook()