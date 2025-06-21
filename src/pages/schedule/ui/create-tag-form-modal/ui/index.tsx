import { ModalFormLayout } from '@/widgets/modal-form-layout';
import { useTranslation } from 'react-i18next';
import { CREATE_TAG_FORM_MODAL_LINK } from '../model/consts';
import { CREATE_TAG_FORM_MODAL_NAMESPACE } from '../model/consts';
import { useNavigate } from 'react-router-dom';
import { TagForm, TagFormProvider } from '@/features/tag-form';

export const CreateTagFormModal = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) navigate(-1);
  };

  return (
    <ModalFormLayout
      title={t(`${CREATE_TAG_FORM_MODAL_LINK}.title`, CREATE_TAG_FORM_MODAL_NAMESPACE)}
      open={true}
      onOpenChange={handleClose}
    >
      <TagFormProvider>
        <TagForm mode="create" />
      </TagFormProvider>
    </ModalFormLayout>
  );
};
