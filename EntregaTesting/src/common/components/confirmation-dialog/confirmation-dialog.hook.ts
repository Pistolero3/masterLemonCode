import React from 'react';
import { Lookup } from 'common/models';

export const useConfirmationDialog = () => {
  const createEmptyLookup = (): Lookup => ({
    id: '',
    name: '',
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(createEmptyLookup());

  return {
    isOpen,
    itemToDelete,
    onAccept: () => {
      setItemToDelete(createEmptyLookup());
    },
    onClose: () => setIsOpen(false),
    onOpenDialog: (item: Lookup) => {
      setIsOpen(true);
      setItemToDelete(item);
    },
  };
};
