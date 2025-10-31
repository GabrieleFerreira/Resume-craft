import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { Columns3 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { SectionTitle } from "../../infoSidebar/SectionTitle";
import { LayoutDragList } from "../LayoutDragList";

export const LayoutSection = () => {
  const { control } = useFormContext<ResumeData>();
  const {
    fields: mainFields,
    move: moveMainField,
    insert: inserteMainField,
    remove: removeMainField,
  } = useFieldArray({
    control,
    name: "structure.layout.mainSections",
  });

  const {
    fields: sidebarFields,
    move: moveSidebarField,
    insert: inserteSidebarField,
    remove: removeSidebarField,
  } = useFieldArray({
    control,
    name: "structure.layout.sidebarSections",
  });
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      switch (destination.droppableId) {
        case "mainFields":
          inserteMainField(destination.index, sidebarFields[source.index]);
          removeSidebarField(source.index);
          break;
        case "sidebarFields":
          inserteSidebarField(destination.index, mainFields[source.index]);
          removeSidebarField(source.index);
          break;
      }
    }

    if (source.droppableId === "mainFields") {
      moveMainField(source.index, destination.index);
    } else {
      moveSidebarField(source.index, destination.index);
    }
    console.log(source, destination);
  };
  return (
    <div>
      <SectionTitle title="Estrutura" icon={Columns3} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Droppable droppableId="mainFields">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <LayoutDragList title="Principal" fields={mainFields} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="mainFields">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <LayoutDragList title="Barra Lateral" fields={sidebarFields} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};
