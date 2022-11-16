export default function Search(){
    return(
        <div class = "mr-28 my-3 h-fit w-fit self-end border-solid flex">
        <form action="" class="relative mx-auto w-max">
            <input type="search" 
                class="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border border-old-lavender bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-persian-pink focus:pl-16 focus:pr-4" />
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-old-lavender stroke-old-lavender px-3.5 peer-focus:border-persian-pink peer-focus:stroke-persian-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </form>
    </div>
    )
}