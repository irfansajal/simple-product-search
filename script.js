const search = () =>{
 const searchBox = document.getElementById('search-item').value;
 const storeItems = document.getElementById('product-list')
 const product = document.querySelectorAll('.product')
 const productName =storeItems.getElementsByTagName('h2')
 for(i = 0; i < productName.length; i++){
    let match = product[i].getElementsByTagName('h2')[0]

    if(match){
      let textValue =  match.textContent || match.innerHTML
      
      if(textValue.indexOf(searchBox) > -1){
        product[i].style.display = '';
      }
      else{
        product[i].style.display = 'none';
      }
    }
 }
}