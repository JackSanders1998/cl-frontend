"use client";

import {
  Dropdown,
  DropdownButton,
} from "@/components/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
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
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  MapPinIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import { Avatar } from "@/components/avatar";
import { useLocation } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/tanstack-start";

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  let pathname = useLocation().pathname;

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <SignedIn>
                  <span className="flex min-w-0 items-center gap-3">
                    <UserButton />
                  </span>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal" />
                </SignedOut>
              </DropdownButton>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
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
              <SidebarItem
                href="/seshes"
                current={pathname.startsWith("/seshes")}
              >
                <ArrowTrendingUpIcon />
                <SidebarLabel>Seshes</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/locations"
                current={pathname.startsWith("/locations")}
              >
                <MapPinIcon />
                <SidebarLabel>Locations</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/climbs"
                current={pathname.startsWith("/climbs")}
              >
                <BoltIcon />
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
                <span className="flex">
                  <SignedIn>
                    <UserButton
                      showName
                      appearance={{
                        elements: {
                          userButtonBox: {
                            flexDirection: "row-reverse",
                            color: "white",
                          },
                        },
                      }}
                    />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal" />
                  </SignedOut>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
