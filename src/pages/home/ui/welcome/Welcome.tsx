import CaldarGuyImage from '@/assets/calendar-guy-image.png';
import { useTheme } from '@/entities/theme/lib/useTheme';
import { Button } from '@/shared/ui/button';

export const Welcome = () => {
  const {theme, toggleTheme} = useTheme()
  return(
    <div className='flex flex-row justify-center items-center gap-5'>
        <div className='flex flex-col justify-center items-start gap-5 w-2/5'>
          <p className='font-bold text-3xl md:text-4xl'>Добро пожаловать в Event Weave 📅</p>
          <p className='font-medium text-xl md:text-2xl text-gray-400'>умное планирование событий</p>
        </div>
        <img className='w-xs md:w-sm' src={CaldarGuyImage} alt='Calendar Guy'/>
        <Button onClick={toggleTheme}>{theme}</Button>
    </div>
  );
}