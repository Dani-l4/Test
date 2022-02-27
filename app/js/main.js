const productContainer = document.querySelector('.products__inner');
let items = Array.from(productContainer.children);

console.log(items);

document.onclick = (event) => {
   let elem = event.target;
   if (elem.classList[0] == 'products__item' && items.includes(elem)) {
      elem.remove();
      items.splice(items.indexOf(elem), 1)
      console.log(items);
   }
};

function addItem(getFormsVal, productContainer) {
   let item = document.createElement('div');
   item.classList = 'products__item product';
   item.innerHTML = `
      <div class="product__image">
         <img src="${getFormsVal.imgUrl}" alt="Фото товара">
      </div>
      <div class="product__info">
         <div class="product__name">
            ${getFormsVal.title}
         </div>
         <div class="product__description">
            ${getFormsVal.descr}
         </div>
         <div class="product__price">
            ${getFormsVal.price} руб.
         </div>
      </div>
   `
   items.push(item);
   productContainer.prepend(item);
};

let form = document.forms[0];

function getFormsVal(form) {
   return {
      name: form.title.value,
      descr: form.descr.value,
      imgUrl: form.imgUrl.value,
      price: form.price.value,
   }
}

const btn = document.querySelector('#addItem');
btn.addEventListener('click', addItem);
//==================Enable button===========================
const title = document.getElementById('name');
const descr = document.getElementById('descr');
const source = document.getElementById('source');
const price = document.getElementById('price');

form.oninput = () => {
   if (title.validity.valid && descr.validity.valid && source.validity.valid && price.validity.valid) {
      btn.removeAttribute('disabled');
      btn.classList.remove('disabled');
   }
}  