import { Header } from '@/widgets/header';
import { Button } from '@/shared/ui/button';
import { LogOut, Plus } from 'lucide-react';
import { useWindowWidth } from '@/shared/lib/hooks';
import { BREAKING_WIDTH } from '../model/consts';
import { SchedulesList } from './schedule-list';

export const ProfileContent = () => {
  const width = useWindowWidth();

  const handleLogout = () => {
    console.log('Выход из аккаунта');
  };

  const handleAddEvent = () => {
    console.log('Добавить событие');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="mt-25 container mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Мои расписания</h1>

          <div className="flex gap-3">
            <Button className="rounded-full md:rounded-2xl size-10 md:size-auto" onClick={handleAddEvent}>
              <Plus className="w-4 h-4" />
              {width > BREAKING_WIDTH && <p>Добавить событие</p>}
            </Button>

            <Button className="rounded-full md:rounded-2xl size-10 md:size-auto" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              {width > BREAKING_WIDTH && <p>Выйти</p>}
            </Button>
          </div>
        </div>

        <SchedulesList />
      </div>
    </div>
  );
};
