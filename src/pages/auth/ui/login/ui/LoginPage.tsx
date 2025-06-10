import { useTranslation } from 'react-i18next';
import { LOGIN_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '../config/consts';
import { FormProvider, useForm } from 'react-hook-form';
import { userFormSchema, type TUserFormData } from '@/entities/User/model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@/shared/ui/FormField';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';

export const LoginPage = () => {
  const { t } = useTranslation();
  const methods = useForm<TUserFormData>({
    resolver: zodResolver(userFormSchema(t)),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-full gap-5">
        <h1 className="text-center text-3xl font-bold text-foreground">{t(`${LOGIN_LINK}.title`, BASE_NAMESPACE)}</h1>

        <div className="flex flex-col gap-4">
          <FormField
            className="bg-card ring-0 border-0 h-12 text-md rounded-2xl"
            name="email"
            inputProps={{
              placeholder: t(`${LOGIN_LINK}.placeholder.email`, BASE_NAMESPACE),
            }}
          />
          <FormField
            className="bg-card ring-0 border-0 h-12 text-md rounded-2xl"
            name="password"
            type="password"
            inputProps={{
              placeholder: t(`${LOGIN_LINK}.placeholder.password`, BASE_NAMESPACE),
            }}
          />
        </div>

        <div className="text-right text-sm">
          <Link to="/auth/forgot-password" className="text-primary hover:underline">
            {t(`${LOGIN_LINK}.forgotPassword`, BASE_NAMESPACE)}
          </Link>
        </div>

        <Button type="submit" className="w-full">
          {t(`${LOGIN_LINK}.buttonText`, BASE_NAMESPACE)}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          <Link to="/auth/register" className="text-primary hover:underline">
            {t(`${LOGIN_LINK}.register`, BASE_NAMESPACE)}
          </Link>
        </p>
      </form>
    </FormProvider>
  );
};
