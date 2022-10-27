export default function Item(){
    return(
        <div>
            <script src="//unpkg.com/alpinejs" defer></script>
            <div class="border-solid border-old-lavender border-2 bg-pale-pink mb-3 flex w-full max-w-screen-xl transform flex-col justify-between p-6 text-old-lavender lg:flex-row lg:p-4">
                <div class="flex w-full flex-row lg:w-3/12">
                    <div class="relative flex flex-col">
                        <div class="flex h-12 w-12 flex-shrink-0 flex-col justify-center rounded-full bg-slate-200 bg-opacity-50 dark:bg-slate-600">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0878%2F3986%2Fproducts%2F71F3oQEOF9L._SL1500.jpg%3Fv%3D1565981435&f=1&nofb=1&ipt=a13333874bac76d9077dd410207d825dda1f96ac39f3b7957fc115e598aa56bc&ipo=images" 
                                class="z-10 h-12 w-12 rounded-full object-cover shadow hover:shadow-xl" 
                                alt="Rocky Balboa" />
                        </div>
                    </div>

                    <div class="ml-4 self-center overflow-x-hidden">
                        <div class="w-full truncate text-xl font-bold leading-5 tracking-tight">Cepillo de Cerda Suave</div>
                        <div class="text-sm">Cantidad: 1</div>
                    </div>
                </div>

                <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
                    <div >
                        <div class="text-xl font-bold leading-5 tracking-tight">Precio: $1,234.56</div>
                    </div>
                </div>

                <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
                    <div class="ml-1">
                        <div class="text-xl font-bold leading-5 tracking-tight">
                            <span class="align-middle">Linea - Categoria</span>
                        </div>
                    </div>
                </div>

                <div class="w-full self-center px-1 pt-4 pb-2 lg:w-1/6 lg:px-0 lg:pt-0 lg:pb-0">
                    <div class="flex flex-row space-x-5 lg:pr-6">
                        <button class="border-solid border-old-lavender border-2 text-old-lavender h-8 w-8 bg-white content-center hover:bg-old-lavender hover:text-pale-pink">
                            <div class="pl-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </button>
                        <button class="border-solid border-old-lavender border-2 text-old-lavender h-8 w-8 bg-white content-center hover:bg-old-lavender hover:text-pale-pink">
                            <div class="pl-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </button>
                        <button class="border-solid border-old-lavender border-2 text-old-lavender h-8 w-8 bg-white content-center hover:bg-old-lavender hover:text-pale-pink">
                            <div class="pl-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>   
    )
}