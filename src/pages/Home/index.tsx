import { useEffect, useState } from "react";
import { MainItem } from "../../domain/items/main";
import { TemplateHome, TemplateHomeProps } from "./template";
import { AiOutlinePlus } from "react-icons/ai";
import { ItemEntityType } from "../../domain/items/types/item";

export const Home = () => {
  const [items] = useState(new MainItem());
  const [description, setDescription] = useState<string>("");
  const [doneList, setDoneList] = useState<ItemEntityType[]>([]);
  const [undoneList, setUndoneList] = useState<ItemEntityType[]>([]);

  const handleAddItem = async () => {
    await items.createTODOItem({ description, done: false });
  };

  const handleEditStatus = async (item: ItemEntityType) => {
    await items.editStatusItem(item, !item.done);
  };

  const handleEditDescription = async (
    item: ItemEntityType,
    description: string
  ) => {
    await items.editDescriptionItem(item, description);
  };

  const handleDelete = async (item: ItemEntityType) => {
    await items.removeTODOItem(item.id);
  };

  useEffect(() => {
    async function handleGetItems() {
      await items.listTodoItems();
      setDoneList(items.allData.doneList);
      setUndoneList(items.allData.undoneList);
    }
    handleGetItems();
  }, [items]);

  const templateHome: TemplateHomeProps = {
    headerStatement: {
      title: "Todo List Pleno",
      createInput: {
        value: description,
        onChange: (e) => setDescription(e.target.value),
        hasBottomBorder: true,
        icon: <AiOutlinePlus />,
        onClickIcon: handleAddItem,
      },
    },
    listStatement: {
      doneTitle: "Done",
      undoneTitle: "Undone",
      doneItems: doneList,
      undoneItems: undoneList,
      onDelete: handleDelete,
      onEditDescription: handleEditDescription,
      onEditStatus: handleEditStatus,
    },
  };

  return (
    <div style={{ margin: "20px" }}>
      <TemplateHome {...templateHome} />
    </div>
  );
};
