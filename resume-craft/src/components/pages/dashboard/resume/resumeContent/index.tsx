"use client";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { TransformControls } from "./Controls";
import { NavigationHeader } from "./NavigationHeader";
import { Resumetemplate } from "./templates";
export const ResumeContent = () => {
  return (
    <section className="overflow-hidden w-full h-full flex items-center justify-center relative bg-muted dark:bg-background ">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <TransformControls />
          <NavigationHeader />
          <TransformComponent>
            <Resumetemplate />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
