import { useSession } from "@/lib/auth-client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar"
import { Plus } from "lucide-react"
import { Span } from "next/dist/trace"

const menuItemsByRole={
    seeker:[

    ],
    recruiter:[

    ],
    admin:[

    ]
}
const DashboardSidebar = () => {

    const{data:session,isPending}=useSession();
    const role = session?.user?.role || "seeker";

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroup>
            {
                // menuItemsByRole[role].map(item=>(
                //     <SidebarMenuItem key={item.id}>
                //         <SidebarMenuButton render={<a href={item.url}/>}>
                //             <item.icon/>
                //             <span>{item.name}</span>
                //         </SidebarMenuButton>
                //     </SidebarMenuItem>
                // ))
            }
          </SidebarGroup>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter /> 
    </Sidebar>
  )
}

export default DashboardSidebar
