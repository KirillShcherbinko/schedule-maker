import { ModalFormLayout } from '@/widgets/modal-form-layout';
import { useTranslation } from 'react-i18next';
import { EDIT_EVENT_FORM_MODAL_LINK } from '../model/consts';
import { EDIT_EVENT_FORM_MODAL_NAMESPACE } from '../model/consts';
import { EventForm, EventFormProvider } from '@/features/event-form';
import { useNavigate } from 'react-router-dom';

export const EditEventFormModal = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) navigate(-1);
  };

  return (
    <ModalFormLayout
      title={t(`${EDIT_EVENT_FORM_MODAL_LINK}.title`, EDIT_EVENT_FORM_MODAL_NAMESPACE)}
      open={true}
      onOpenChange={handleClose}
    >
      <EventFormProvider>
        <EventForm mode="edit" />
      </EventFormProvider>
    </ModalFormLayout>
  );
};
