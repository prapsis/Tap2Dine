import { HandPlatter, Home, ShoppingBag, ShoppingBasket, Utensils } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar.tsx"

import {HORIZONTAL_LOGO, LOGO } from "../../constants/images.ts"
import { cn } from "../../lib/utils.ts";
import { Link } from "react-router";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Menus",
    url: "/menu",
    icon: HandPlatter,
  },
  {
    title: "Table",
    url: "/table",
    icon: Utensils,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: ShoppingBasket,
  },
]

export function AppSidebar() {
  const {state} = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn(state === "collapsed" ? "" : "flex items-center justify-center")}>
        <img src={state === "collapsed" ? LOGO : HORIZONTAL_LOGO} alt="logo" className={cn(state === "collapsed" ? "w-16" : "w-8/12")}/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
