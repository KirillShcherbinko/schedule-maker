import { ModalFormLayout } from '@/widgets/modal-form-layout';
import { useTranslation } from 'react-i18next';
import { EDIT_TAG_FORM_MODAL_LINK } from '../model/consts';
import { EDIT_TAG_FORM_MODAL_NAMESPACE } from '../model/consts';
import { useNavigate } from 'react-router-dom';
import { TagForm, TagFormProvider } from '@/features/tag-form';

export const EditTagFormModal = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) navigate(-1);
  };

  return (
    <ModalFormLayout
      title={t(`${EDIT_TAG_FORM_MODAL_LINK}.title`, EDIT_TAG_FORM_MODAL_NAMESPACE)}
      open={true}
      onOpenChange={handleClose}
    >
      <TagFormProvider>
        <TagForm mode="edit" />
      </TagFormProvider>
    </ModalFormLayout>
  );
};
