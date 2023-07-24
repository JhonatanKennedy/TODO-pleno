import { useEffect, useState } from "react";
import { MainItem } from "../../domain/items/main";
import { TemplateHome, TemplateHomeProps } from "./template";
import { AiOutlinePlus } from "react-icons/ai";
import { ItemEntityType } from "../../domain/items/types/item";
import "./styles.scss";

export const Home = () => {
  const [items] = useState(new MainItem());
  const [description, setDescription] = useState<string>("");
  const [loadingAdd, setLoadingAdd] = useState<boolean>(false);
  const [loadingDone, setLoadingDone] = useState<boolean>(false);
  const [loadingUndone, setLoadingUndone] = useState<boolean>(false);

  const handleAddItem = async () => {
    setLoadingAdd(true);
    await items.createTODOItem({ description, done: false });
    setDescription("");
    setLoadingAdd(false);
  };

  const handleEditStatus = async (item: ItemEntityType) => {
    if (item.done) {
      setLoadingDone(true);
      await items.editStatusItem(item, !item.done);
      setLoadingDone(false);
    }

    if (!item.done) {
      setLoadingUndone(true);
      await items.editStatusItem(item, !item.done);
      setLoadingUndone(false);
    }
  };

  const handleEditDescription = async (
    item: ItemEntityType,
    description: string
  ) => {
    if (item.done) {
      setLoadingDone(true);
      await items.editDescriptionItem(item, description);
      setLoadingDone(false);
    }

    if (!item.done) {
      setLoadingUndone(true);
      await items.editDescriptionItem(item, description);
      setLoadingUndone(false);
    }
  };

  const handleDelete = async (item: ItemEntityType) => {
    if (item.done) {
      setLoadingDone(true);
      await items.removeTODOItem(item.id);
      setLoadingDone(false);
    }

    if (!item.done) {
      setLoadingUndone(true);
      await items.removeTODOItem(item.id);
      setLoadingUndone(false);
    }
  };

  useEffect(() => {
    async function handleGetItems() {
      setLoadingAdd(true);
      await items.listTodoItems();
      setLoadingAdd(false);
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
      loadingAdd,
    },
    listStatement: {
      doneTitle: "Done",
      undoneTitle: "Undone",
      doneItems: items.allData.doneList,
      undoneItems: items.allData.undoneList,
      onDelete: handleDelete,
      onEditDescription: handleEditDescription,
      onEditStatus: handleEditStatus,
      loadingDone,
      loadingUndone,
    },
  };

  return (
    <div className="template-container">
      <TemplateHome {...templateHome} />
    </div>
  );
};
