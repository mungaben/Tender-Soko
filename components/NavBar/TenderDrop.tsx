"use client";
import React from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import Link from "next/link";

const TenderDrop = () => {
  return (
    <div >
      <Menubar className=" flex-col flex md:flex-row h-full border-none">
        <MenubarMenu>
          <MenubarTrigger>Tenders</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Tender type<MenubarShortcut>20</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Tender type <MenubarShortcut>30</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              <Button>
                <Link href="/Subscribe"> Subscribe</Link>
              </Button>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Tender</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <Link href="/Tenders/Government">Government</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/Tenders/Ngos">NGO's</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/Tenders/Private">Private</Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Sectors</MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>Technology</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Agriculture</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Blogs</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default TenderDrop;
