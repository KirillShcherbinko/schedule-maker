import { ModalFormLayout } from '@/widgets/ModalFormLayout';
import { useTranslation } from 'react-i18next';
import { CREATE_EVENT_FORM_MODAL_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '../config/consts';
import { EventForm } from '@/features/EventForm';
import { useNavigate } from 'react-router-dom';
import { EventFormProvider } from '@/features/EventForm/ui/EventFormProvider';

export const CreateEventFormModal = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) navigate(-1);
  };

  return (
    <ModalFormLayout
      title={t(`${CREATE_EVENT_FORM_MODAL_LINK}.title`, BASE_NAMESPACE)}
      open={true}
      onOpenChange={handleClose}
    >
      <EventFormProvider>
        <EventForm mode="create" />
      </EventFormProvider>
    </ModalFormLayout>
  );
};
