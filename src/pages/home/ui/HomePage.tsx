import { Welcome } from "./welcome/Welcome";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-svh">
      <Welcome/>
    </div>
  );
};
