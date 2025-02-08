"use client";

import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dropdown";
import { Navbar } from "@/components/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/sidebar";
import { SidebarLayout } from "@/components/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import { Avatar } from "@/components/avatar";
import { useLocation } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/tanstack-start";

function AccountDropdownMenu({
  anchor,
}: {
  anchor: "top start" | "bottom end";
}) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ShieldCheckIcon />
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <LightBulbIcon />
        <DropdownLabel>Share feedback</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  let pathname = useLocation().pathname;

  return (
    <SidebarLayout
      navbar={<Navbar></Navbar>}
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem>
              <Avatar src="/favicon-32x32.png" />
              <SidebarLabel>cl-frontend</SidebarLabel>
            </SidebarItem>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/" current={pathname === "/"}>
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/seshes"
                current={pathname.startsWith("/seshes")}
              >
                <Square2StackIcon />
                <SidebarLabel>Seshes</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/locations"
                current={pathname.startsWith("/locations")}
              >
                <TicketIcon />
                <SidebarLabel>Locations</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/climbs"
                current={pathname.startsWith("/climbs")}
              >
                <TicketIcon />
                <SidebarLabel>Climbs</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/settings"
                current={pathname.startsWith("/settings")}
              >
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <div className="ml-auto">
                    <SignedIn>
                      <span className="flex min-w-0 items-center gap-3">
                        <UserButton />
                        <span className="min-w-0">
                          <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                            user name
                          </span>
                          <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                            user email
                          </span>
                        </span>
                      </span>
                    </SignedIn>
                    <SignedOut>
                      <SignInButton mode="modal" />
                    </SignedOut>
                  </div>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
