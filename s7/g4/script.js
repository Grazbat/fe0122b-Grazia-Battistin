fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let table = document.createElement('table');
        table.classList.add = 'table'
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let row1 = document.createElement('tr');
        let heading1 = document.createElement('th');
        heading1.innerHTML = "Nome";
        let heading2 = document.createElement('th');
        heading2.innerHTML = "Cognome";
        let heading3 = document.createElement('th');
        heading3.innerHTML = "Email";
        row1.append(heading1, heading2, heading3);
        thead.append(row1);

        res.forEach(utenti => {



            let row2 = document.createElement('tr');
            let row2Data1 = document.createElement('td');
            row2Data1.innerHTML = utenti.name;
            let row2Data2 = document.createElement('td');
            row2Data2.innerHTML = utenti.lastname;
            let row2Data3 = document.createElement('td');
            row2Data3.innerHTML = utenti.email;

            row2.append(row2Data1, row2Data2, row2Data3);
            tbody.append(row2);



           
        }); 
        table.append(thead, tbody);
        document.querySelector('body').append(table);
    });
