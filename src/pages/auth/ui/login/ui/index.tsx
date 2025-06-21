import { useTranslation } from 'react-i18next';
import { LOGIN_NAMESPACE } from '../model/consts';
import { FormProvider, useForm } from 'react-hook-form';
import { userFormSchema, type TUserFormData } from '@/entities/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/shared/ui/form-input';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

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
        <h1 className="text-center text-3xl font-bold text-foreground">{t('title', LOGIN_NAMESPACE)}</h1>

        <div className="flex flex-col gap-4">
          <FormInput
            className="bg-card ring-0 border-0 h-12 text-md rounded-2xl"
            name="email"
            inputProps={{
              placeholder: t('placeholder.email', LOGIN_NAMESPACE),
            }}
          />
          <FormInput
            className="bg-card ring-0 border-0 h-12 text-md rounded-2xl"
            name="password"
            type="password"
            inputProps={{
              placeholder: t('placeholder.password', LOGIN_NAMESPACE),
            }}
          />
        </div>

        <div className="text-right text-sm">
          <Link to="/auth/forgot-password" className="text-primary hover:underline">
            {t('forgotPassword', LOGIN_NAMESPACE)}
          </Link>
        </div>

        <Button type="submit" className="w-full">
          {t('buttonText', LOGIN_NAMESPACE)}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          <Link to="/auth/register" className="text-primary hover:underline">
            {t('register', LOGIN_NAMESPACE)}
          </Link>
        </p>
      </form>
    </FormProvider>
  );
};
