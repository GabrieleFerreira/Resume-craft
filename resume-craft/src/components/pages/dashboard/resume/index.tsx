"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FormProvider, useForm } from "react-hook-form";
import { InfoSidebar } from "./infoSidebar";
import { ResumeContent } from "./resumeContent";
import { StructureSidebar } from "./structureSidebar";

export const ResumePage = () => {
  const defaultValues: ResumeData = {
    content: {
      image: {
        url: "",
        visible: true,
      },
      infos: {
        email: "",
        fullName: "",
        headline: "",
        location: "",
        phone: "",
        website: "",
      },
    },
  };
  const methods = useForm<ResumeData>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <main className=" w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full  ">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={40}>
            <InfoSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
};
