'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function IntegromedToolkit() {
  return (
    <div className="p-6 space-y-6">
      <img src="/integromed_logo.png" alt="Integromed Logo" className="w-48 mb-4" />
      <h1 className="text-3xl font-bold">Integromed Digital Toolkit</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <nav className="space-y-4">
            <Button variant="outline" className="w-full">Technical Data Sheets</Button>
            <Button variant="outline" className="w-full">Checklists</Button>
            <Button variant="outline" className="w-full">Suppliers</Button>
            <Button variant="outline" className="w-full">Bill of Quantities</Button>
            <Button variant="outline" className="w-full">Drawings</Button>
          </nav>
        </div>

        <div className="col-span-1 md:col-span-3 space-y-4">
          <div className="flex items-center gap-4">
            <Input placeholder="Filter by title" className="flex-1" />
            <Button variant="outline">Sort by</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-blue-600">Wall Systems</h2>
                <p className="text-sm">Technical data sheet</p>
                <a
                  href="/wall-systems.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 underline block mt-2"
                >
                  View PDF
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-blue-600">Project Checklist</h2>
                <p className="text-sm">Interactive checklist</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-blue-600">Approved Suppliers</h2>
                <p className="text-sm">Supplier database</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-blue-600">Project Drawings</h2>
                <p className="text-sm">Drawings and projects</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="suppliers" className="mt-6">
            <TabsList>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="boq">Bill of Quantities</TabsTrigger>
              <TabsTrigger value="checklists">Checklists</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
