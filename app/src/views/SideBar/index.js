export default function SideBar(){
    return (  
		<div class="sidebar bg-old-lavender min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:shadow-lg">
		<div class="flex h-screen flex-col justify-between pt-2 pb-6">
		<div>
			<ul class="mt-6 space-y-2 tracking-wide">
			<li class="min-w-max">
				<a href="/" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-misty-rose">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
					<path class="text-misty-rose group-hover:text-persian-pink" fill-rule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clip-rule="evenodd" />
					<path class="text-misty-rose group-hover:text-persian-pink" fill-rule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
				</svg>

				<span class="group-hover:text-persian-pink">Inventario</span>
				</a>
			</li>
			<li class="min-w-max">
				<a href="/" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-misty-rose">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path class="text-misty-rose group-hover:text-persian-pink" d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
					</svg>

					<span class="group-hover:text-persian-pink">Clientes</span>
				</a>
			</li>
			<li class="min-w-max">
				<a href="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-misty-rose">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path class="text-misty-rose group-hover:text-persian-pink" d="M3.75 3A1.75 1.75 0 002 4.75v3.26a3.235 3.235 0 011.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM3.75 9A1.75 1.75 0 002 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-4.5A1.75 1.75 0 0016.25 9H3.75z" />
					</svg>

					<span class="group-hover:text-persian-pink">Categorias y lineas</span>
				</a>
			</li>
			</ul>
		</div>
		<div class="w-max -mb-3">
			<a href="/" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-misty-rose">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
				<path class="group-hover:text-persian-pink" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
			</svg>
			<span class="group-hover:text-persian-pink">Usuario</span>
			</a>
		</div>
		</div>
		</div>
    );
}