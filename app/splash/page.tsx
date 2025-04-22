// app/(splash)/layout.tsx
export const metadata = {
  title: 'Welcome | TBAI',
};

export default function SplashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      {children}
    </div>
  );
}
