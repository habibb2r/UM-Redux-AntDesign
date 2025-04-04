import { NavLink } from "react-router-dom";
import { TSideBarItem, TUserPath } from "../types";

export const sideBarItemsGenerator = (items : TUserPath[], role) =>{
    const sideBarItems = items.reduce((acc: TSideBarItem[], item)=>{
        if(item.name && item.path){
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            })
        }
        if(item.children){
           acc.push({
               key: item.name,
               label: item.name,
               children: item.children.map((child)=>({
                key: child.name,
                label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
            }))
           })
        }
        return acc;
    }, []);
    return sideBarItems;
}