export default function Filters(){
    return(
        <select id="filter" class="bg-gray-50 border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-full p-2.5">
            <option selected>Seleccione un filtro</option>
            <option value="1">Filtro 1</option>
            <option value="2">Filtro 2</option>
            <option value="3">Filtro 3 </option>
        </select>
    )
}

export function Sort(){
    return(
        <select id="order" class="bg-gray-50 border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-full p-2.5">
            <option selected>Ordenar Por...</option>
            <option value="1">Orden 1</option>
            <option value="2">Orden 2</option>
            <option value="3">Orden 3 </option>
        </select>
    )
}

export function Category(){
    return(
        <select id="category" class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5">
            <option selected>Categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3 </option>
        </select>
    )
}

export function Brand(){
    return(
        <select id="brand" class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5">
            <option selected>Linea</option>
            <option value="1">Linea 1</option>
            <option value="2">Linea 2</option>
            <option value="3">Linea 3 </option>
        </select>
    )
}