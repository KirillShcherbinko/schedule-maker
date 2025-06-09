import { ModalFormLayout } from '@/widgets/ModalFormLayout';
import { useTranslation } from 'react-i18next';
import { EDIT_TAG_FORM_MODAL_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '../config/consts';
import { useNavigate } from 'react-router-dom';
import { TagFormProvider } from '@/features/TagForm/ui/TagFormProvider';
import { TagForm } from '@/features/TagForm';

export const EditTagFormModal = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) navigate(-1);
  };

  return (
    <ModalFormLayout
      title={t(`${EDIT_TAG_FORM_MODAL_LINK}.title`, BASE_NAMESPACE)}
      open={true}
      onOpenChange={handleClose}
    >
      <TagFormProvider>
        <TagForm mode="edit" />
      </TagFormProvider>
    </ModalFormLayout>
  );
};
