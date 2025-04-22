// app/(screens)/layout.tsx
import { AppSidebar } from '@/components/app-sidebar';
import { NavActions } from '@/components/nav-actions';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { PageLoader } from '@/components/PageLoader';
import { LoaderProvider } from '@/context/LoaderContext';

export const metadata = {
  title: 'TBAI',
  description: 'Next Gen AI EDU',
};

export default function ScreensLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <PageLoader />
      <SidebarProvider className="h-screen p-4">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="ml-auto px-3">
              <NavActions />
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </LoaderProvider>
  );
}
