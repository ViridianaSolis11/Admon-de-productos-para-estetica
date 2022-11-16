import { Show, Update, Delete } from "./Button"


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
                        <Show/>
                        <Update/>
                        <Delete/>
                    </div>
                </div>
            </div>
        </div>   
    )
}