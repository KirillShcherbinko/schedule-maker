import { ModalFormLayout } from '@/widgets/modal-form-layout';
import { useTranslation } from 'react-i18next';
import { CREATE_EVENT_FORM_MODAL_LINK } from '../model/consts';
import { CREATE_EVENT_FORM_MODAL_NAMESPACE } from '../model/consts';
import { EventForm, EventFormProvider } from '@/features/event-form';
import { useNavigate } from 'react-router-dom';

export const CreateEventFormModal = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) navigate(-1);
  };

  return (
    <ModalFormLayout
      title={t(`${CREATE_EVENT_FORM_MODAL_LINK}.title`, CREATE_EVENT_FORM_MODAL_NAMESPACE)}
      open={true}
      onOpenChange={handleClose}
    >
      <EventFormProvider>
        <EventForm mode="create" />
      </EventFormProvider>
    </ModalFormLayout>
  );
};
