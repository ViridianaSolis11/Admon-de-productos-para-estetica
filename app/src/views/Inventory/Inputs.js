export default function InputName(){
    return(<input id="floating_name" class="border-2 border-old-lavender text-old-lavender text-sm  
    focus:ring-old-lavender focus:border-old-lavender block w-80 p-2.5" type="text" placeholder="Nombre del Producto"/>)
}

export function InputCost(){
    return( <input class="border-2 border-old-lavender text-old-lavender text-sm  
    focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5" type="number" placeholder="$Precio"/>)
    
}


export function InputQuantity(){
    return(<input class="border-2 border-old-lavender text-old-lavender text-sm  
    focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5" type="number" placeholder="Cantidad"/>)
}