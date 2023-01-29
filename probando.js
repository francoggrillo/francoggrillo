const cardscontainer= document.querySelector(".cards-container");
const carrito= document.querySelector(".navbar-shopping-cart");
carrito.addEventListener("click",apareceydesaparecelista);
const carritomenu= document.querySelector(".cil");
function apareceydesaparecelista(){
    carritomenu.classList.toggle("inactive");
    menuAparecido.classList.add("inactive");
    menu2.classList.add("inactive");
    console.log("click");

}
const logo= document.querySelector(".menu");
const menu2= document.querySelector(".mobile-menu");
logo.addEventListener("click",apareceydesaparece2);
/* EN TODAS LAS FUNCIONES TUBE QUE AGREGAR EL EVENTO DEL CLIK Y EL CAMBIO DE CLASE PERO ES VES DE PONER TOGGLE FUE ADD
ESO SIRVE PARA QUE CAMBIE LA CLASES DIRECTRAMENTE Y CON TOGGLE LO QUE HACES ES CAMBIAR POR LA QUE NO ESTA ,
CON ADD LA CAMBIAS DIRECTO A LA QUE QUERES */

function apareceydesaparece2(){
    menu2.classList.toggle("inactive");
    carritomenu.classList.add("inactive");
}
const menu= document.querySelector(".navbar-email");
menu.addEventListener("click",apareceydesaparece);
const menuAparecido = document.querySelector(".desktop-menu");
function apareceydesaparece(){
    menuAparecido.classList.toggle("inactive");
    carritomenu.classList.add("inactive");
};
/*¿Qué es classList Toggle?
classList. toggle("class") – agrega la clase si no existe, si no la remueve*/




/* lo que voy a hacer ahora es la parte del carrito , los productos , voy a crear un array con objetos adentro 
en js y luego tengo que hacer un ciclo for praa que lo lea y lo lleve a html o algo asi */


const productList= [];
productList.push({
  Prueba:'decimebatmansapequememuero',
  Color:'white',  
  Name:'dog',
    Price:1000,
    Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,})
    productList.push({
      Prueba:'decimebatmansapequememuero',
      Color:'white',  
      Name:'cat',
        Price:1000,
        Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",})
        productList.push({
          Prueba:'decimebatmansapequememuero',
          Color:'white', 
          Name:'bird',
          Price:1000,
            Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",})
/* aca esta el ciclo for of , la palabra product le podes poner cualquier cosa le puedo poner pijas 
no pasa nada ese nombre va a tomar cada elemento y luego si nombrar el arrar */
            for (product of productList) {console.log(product);
            /*  const productcolorparrafo=document.createElement('p');
                    productcolorparrafo.innerText='CHUPALA PUTO'+ product.Color;/* MAS CLARO ECHALE AGUA , HACES CONTENEDOR , PONES DATA, AGREGAS AL DIV
                   productcolorparrafo.classList.add('franco-sape') ;
                
/*PRIMERO HACE LOS CONTENEDORES Y DESPUES LLENALOS PAAAA*/
                
                /*const ultimaprueba=document.createElement('p');
                ultimaprueba.innerText=product.Prueba;*/
                

              const productcard= document.createElement('div');
                      productcard.classList.add('product-card');
                      const img= document.createElement('img');
                      img.setAttribute('src',product.Image) ;
                      const productinfo= document.createElement('div');
                      productinfo.classList.add('product-info');
                      const divvacio= document.createElement('div');
                      const productprice= document.createElement('p');
                      productprice.innerText= '$'+ product.Price;
                      const productname= document.createElement('p');
                      productname.innerText=product.Name;
                      const figure=document.createElement('figure');
                      const imgfigure=document.createElement('img');
                      imgfigure.setAttribute('src','./icons/bt_add_to_cart.svg');

                 /*       ultimaprueba.classList.add('franco-sape')*/
                      productcard.appendChild(img);
                      productcard.appendChild(productinfo);
/*esto realmente es un kilombo en sintesis  me dan un html y yo lo quiero hacer desde js
entonces voy creando desde js los elementos como hago ?
const nombre = documente.createelement ( elemento div img seccion lo que de );
despues le pongo una clases que ya esta seteada en css por eso uso ese nombre con
nombre la const.classlist.add(la clases que le quiero poner)
despues los elementos escritos los meto con document.innertext
finalmente meto los que hice en los div utilizando
nombre del elemento creando.appenchild(lo que le quiero meter adentro)
y como ultimo me traigo la clases del html utilizando el queryselector hago una constatnte y hago lo mismo es decir
meto todo lo que hice ahi adentro .*/
                      divvacio.appendChild(productprice);
                      divvacio.appendChild(productname);
                    /*  productinfo.appendChild(ultimaprueba);*/
                      figure.appendChild(imgfigure);
                      productinfo.appendChild(divvacio);
                      productinfo.appendChild(figure);
/*productinfo.appendChild(productcolorparrafo);*/
                      cardscontainer.appendChild(productcard);
                      }

const productcard1=document.querySelector('.product-card');
productcard1.addEventListener('click',productcard);
const productcardimg=document.querySelector('.product-detailuno inactive');
function productcard(){productcardimg.classList.add(product-detailuno);}


/* y ahora se pone interesante me copio un carrito y le voy a mandar datos desde js creeooo , esto es para hacer
solo un div y cargarle informacion y no hacer todo manual en html , nose si me explico  esto esta   ARRIBA

lo que estoy haciendo es traerme todo a js , osea abajo de esto tengo el html pero tengo que trasnformarlo a js*/

/*<section class="main-container">
                <div class="cards-container">
            
                  <div class="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    <div class="product-info">
                      <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                      </div>
                      <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                      </figure>
                    </div> */