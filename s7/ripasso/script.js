fetch('pizze.json')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            res.forEach(pizza => {
                
                if(pizza.disponibile){
                    
                    let div = document.createElement('div')//<div></div>
                    div.classList.add('pizza')//<div class="pizza"></div>
                    
                    let h3 = document.createElement('h3')//<h3></h3>
                    h3.innerText = pizza.nome
                    
                    let small = document.createElement('small')//<small></small>
                    small.innerText = pizza.tipo
                    
                    let p = document.createElement('p')//<p></p>
                    p.innerText = pizza.prezzo + '€'
                    
                    
                    div.append(h3,small,p)
                    document.querySelector('body').append(div)
                    }
		})
	})