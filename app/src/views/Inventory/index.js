import SideBar from '../SideBar';
import Item from './Item';
import Titulo from './Titulo';
import Search from './Search';
import Filters, {Brand, Category, Sort} from './Filters';
import InputName, {InputCost, InputQuantity} from './Inputs';
import ButtonAccept from './Button';



export default function Inventory(){
    return (  
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 ">
                       <Titulo/>
                       <Search/>
                    </div>

                    <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                    <Filters/>
                    <Sort/>
                    </div>

                    <div class="flex flex-row my-2 gap-3 self-center w-9/12">
                        <InputName/>
                            <Category/>
                            <Brand/>
                            <InputCost/>
                            <InputQuantity/>
                            <ButtonAccept/>
                    </div>

                    <div class = "self-center flex flex-col my-5 w-9/12">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
}